(function() {
    function HomeCtrl($interval, SESSION) {
      this.time = 1500;
      this.onBreak = false;
      this.workButtonName = "Start A Work Session";
      this.breakButtonName = "Start A Break Session"
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
          this.time = SESSION.BREAK_SHORT;
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
          this.onBreak ? this.onBreak = false : this.onBreak = true;
        }
      }






    }

    angular
        .module('pomTimer')
        .controller('HomeCtrl', ['$interval','SESSION', HomeCtrl]);
})();
