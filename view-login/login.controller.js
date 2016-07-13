(function() {
  angular.module('app').controller('loginController', loginController);

  function loginController ($scope) {
    $scope.title = "Hello!";

    $scope.login = function() {
      console.log('login');
    };

    console.log('login page');
  }

})();




