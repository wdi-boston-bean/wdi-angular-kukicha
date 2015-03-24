(function(){
  'use strict';

  angular
    .module('Lab')
    .controller('TodoCtrl', TodoCtrl);

  TodoCtrl.$inject = ['$http']; 

  function TodoCtrl( $http ) {
    var vm = this;

    $http.get('http://localhost:3000/tasks').success(function( response ) {
        vm.tasks = response;
      });

    vm.updateTask = function( task ) {
      var params = {
        task: task
      };

      if (task.id) {
        $http.put('http://localhost:3000/tasks/' + task.id, params);
      } else {
        $http.post('http://localhost:3000/tasks', params)
          .success(function( response ) {
            vm.tasks.push(response);
          });
      }
      vm.task = {};
    };

    vm.editTask = function( task ) {
      vm.task = task;
    };

    vm.deleteTask = function( task ) {
      $http.delete('http://localhost:3000/tasks/' + task.id).success(function(response) {

        for (var i = 0; i < vm.tasks.length; i++) {
          if (vm.tasks[i].id === task.id) {
            vm.tasks.splice(i, 1);

            break;
          }
        }
      });
    };
  }
})();