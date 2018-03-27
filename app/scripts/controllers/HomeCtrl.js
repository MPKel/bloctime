(function() {
    function HomeCtrl($interval, SESSION, SoundPlayer) {
      this.time = 1500;
      this.onBreak = false;
      this.workButtonName = "Start A Work Session";
      this.breakButtonName = "Start A Break Session"
      this.workTally = 0;
      var counting = false;
      var begin;


      this.workTimer = () => {
        if (counting === false) {
          counting = true;
          this.time = SESSION.WORK;
          begin = $interval(this.countdown, 1000);
          this.breakButtonName = "Start A Break Session";
          this.workButtonName = "Reset Only - No breaks yet!";
       }
       else {
         counting = false;
         this.time = SESSION.WORK;
         this.workButtonName = "Start A Work Session";
         $interval.cancel(begin);
       }

      }


      this.breakTimer = () => {
        if (counting === false) {
          counting = true;
          if(this.workTally >= 4) {
            this.time = SESSION.BREAK_LONG;
            this.workTally = 0;
          }
          else {
            this.time = SESSION.BREAK_SHORT;
          }

          begin = $interval(this.countdown, 1000);
          this.workButtonName = "Start A Work Session";
          this.breakButtonName = "Reset Only - No Pausing!";
       }
       else {
         counting = false;
         this.time = SESSION.BREAK_SHORT;
         this.breakButtonName = "Start A Break Session";
         $interval.cancel(begin);
       }

      }


      this.countdown = () => {
        this.time--
        if(this.time <= 0) {

          $interval.cancel(begin);
          counting = false;
          if(this.onBreak != true) {
            SoundPlayer.play(0);
            this.onBreak = true;
            this.workTally++;
          }
          else {
            this.onBreak = false;
            SoundPlayer.play(1);
          }

        }
      }

    }

    angular
        .module('pomTimer')
        .controller('HomeCtrl', ['$interval','SESSION', 'SoundPlayer', 'Tasks', HomeCtrl]);
})();
