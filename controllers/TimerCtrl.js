
     (function() {
       function TimerCtrl(){
         
         this.buttonName = "Start!";
         this.time = 0;
         this.runTimer = () => {
           this.time++;
           this.buttonName = "running";
           console.log("wwoooooaah: " + this.time) };
       }

       angular
         .module('timer')
         .controller('TimerCtrl', TimerCtrl);
     })();
