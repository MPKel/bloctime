(function() {
    function TaskCtrl(Tasks) {
      this.taskName = null;
      this.taskList = Tasks.all;

      this.add = (taskName) => {
        if(taskName){
        Tasks.create(taskName);
        this.taskName = '';
      }
      else {return;}
    }


      this.delete = (taskId) => {
        Tasks.remove(taskId);
      }
  }

    angular
        .module('pomTimer')
        .controller('TaskCtrl', ['Tasks', TaskCtrl]);
})();
