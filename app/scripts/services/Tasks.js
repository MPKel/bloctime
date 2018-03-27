(function() {
  function Tasks($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.all = tasks;

    Task.create = function(newTask) {
      tasks.$add(newTask);
    };

    Task.remove = function(taskId) {
      tasks.$remove(tasks[taskId]);
    }






   return Task;
  }

  angular
    .module('pomTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
