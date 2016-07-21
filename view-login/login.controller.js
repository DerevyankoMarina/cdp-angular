(function() {
  angular
      .module('app')
      .controller('loginController', loginController);

  function loginController ($scope, $http, $state, AuthenticationService) {
    $scope.user = {
      'login': '',
      'password': ''
    };

    $scope.correctCreds = true; // hide incorrect creds message

    $scope.login = function(user) {
      $http.post('/users', user).success(function(data) {

        if(data.success) {
          AuthenticationService.setUsername('currentUser', data.username);
          $state.go('courses');

        } else {
          $scope.correctCreds = false; // show incorrect creds message
          $scope.user.password = '';
        }
      });
    };

  }
})();





