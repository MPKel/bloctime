(function() {
  function Tasks($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);
    Task.all = tasks;

    Task.create = function(newTask) {
      var timestamp = new Date().getTime();
      tasks.$add({value: newTask, date: timestamp.toString()});

    };

    Task.remove = function(taskId) {
      var taskDel = tasks.$getRecord(taskId);
      tasks.$remove(taskDel);
    }






   return Task;
  }

  angular
    .module('pomTimer')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
