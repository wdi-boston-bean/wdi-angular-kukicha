(function(){

  angular
    .module('Demo', [])
    .directive('gaLorem', gaLorem);

    function gaLorem() {
      return {
        restrict: 'EA',
        templateUrl = 'templates/lorem.html'
      };
    }

})();