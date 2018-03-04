(function() {
    function HomeCtrl($interval) {
      this.time = 1500;
      this.break = true;
      this.workButtonName = "Start A Work Session";
      var counting = false;
      var begin;


      this.runTimer = (total) => {
        if (counting === false) {
          counting = true;
          this.time = total;
          begin = $interval(this.countdown, 1000);
          this.workButtonName = "Reset Only - No breaks yet!";
       }
       else {
         counting = false;
         this.time = total;
         this.workButtonName = "Start A Work Session";
         $interval.cancel(begin);
       }

      }


      this.countdown = () => {
        this.time--
      }






    }

    angular
        .module('pomTimer')
        .controller('HomeCtrl', ['$interval', HomeCtrl]);
})();
