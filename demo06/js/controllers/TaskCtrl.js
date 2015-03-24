(function(){
  'use strict';

  angular
    .module('Lab')
    .controller('TaskCtrl', TaskCtrl);

  TaskCtrl.$inject = ['$http', 'TaskFactory']; 

  function TaskCtrl( $http, TaskFactory ) {
    var vm = this;

    function resetTask() {
      vm.task = {
        name: ''
      };
    }

    vm.updateTask = function( task ) {
      TaskFactory.updateTask(task)
        .then(function( response ) {
          resetTask();
        }, function( response ) {
          console.log(response);
        });

      resetTask();
    };

    vm.editTask = function( task ) {
      vm.task = task;
    };

    vm.deleteTask = function( task ) {
      TaskFactory.deleteTask(task);

      resetTask();
    };

    vm.tasks = TaskFactory.tasks;

  }
})();