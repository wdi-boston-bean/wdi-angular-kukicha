(function(){
  'use strict';

  angular
    .module('Lab', [])
    .run(function(TaskFactory) {
        TaskFactory.getTasks();
    });

})();