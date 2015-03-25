(function(){
  'use strict';

  angular
    .module('Lab')
    .controller('TaskListCtrl', TaskListCtrl);

  TaskListCtrl.$inject = ['$http', 'TaskFactory']; 

  function TaskListCtrl( $http, TaskFactory ) {
    var vm = this;

    function resetTask() {
      vm.task = {
        name: ''
      };
    }

    vm.editTask = function( task ) {
      task = task;
    };

    vm.deleteTask = function( task ) {
      TaskFactory.deleteTask(task);

      resetTask();
    };

    vm.tasks = TaskFactory.tasks;

  }
})();