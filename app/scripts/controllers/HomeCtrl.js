(function() {
    function HomeCtrl() {
      this.time = 20;
    }

    angular
        .module('pomTimer')
        .controller('HomeCtrl', [HomeCtrl]);
})();
