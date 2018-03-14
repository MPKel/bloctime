(function() {
     function SoundPlayer() {
          var SoundPlayer = {};
          var mySound= null;


          SoundPlayer.play = function(number) {

            if(number === 1){
            mySound = new buzz.sound( "/assets/backtowork.mp3", {
              preload: true
            });
            }
            else {
              mySound = new buzz.sound( "/assets/breaktime.mp3", {
                preload: true
              });
            }

            mySound.play();

          }


          return SoundPlayer;


     }

     angular
         .module('pomTimer')
         .factory('SoundPlayer', SoundPlayer);
 })();
