(function(){
  'use strict';

  angular
    .module('Lab')
    .controller('TaskFormCtrl', TaskFormCtrl);

  TaskFormCtrl.$inject = ['$http', 'TaskFactory']; 

  function TaskFormCtrl( $http, TaskFactory ) {
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

    vm.tasks = TaskFactory.tasks;

  }
})();