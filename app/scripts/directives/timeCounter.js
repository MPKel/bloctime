(function() {
     function timeCounter($interval) {

       return {
         templateUrl: '/templates/directives/time_counter.html',
         replace: true,
         restrict: 'E',
         scope: { },
         link: function(scope, element, attributes) {
             scope.time = 0.00;


         var updateTimer = function () {
            scope.time += 1;
         }

         $interval(updateTimer, 1000);
       }

     }

     };





     angular
         .module('pomTimer')
         .directive('timeCounter', ['$interval', timeCounter]);
 })();
