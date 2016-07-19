(function() {
  angular
      .module('app')
      .controller('loginController', loginController);

  function loginController ($scope, $http, $state, $rootScope) {
    $scope.user = {
      'login': '',
      'password': ''
    };

    $scope.correctCreds = true; // hide incorrect creds message
    $rootScope.username = "123"; // display user name after login

   // var user = $scope.user;

    $scope.login = function(user) {
      console.log('getUsers', user);
      $http.post('/users', user).success(function(data) {

        if(data) {
          $state.go('courses');
          $rootScope.username = user.login; // display user name after login
        } else {
          $scope.correctCreds = false; // show incorrect creds message
          $scope.user.password = '';
        }
      });
    };

  }
})();

// TODO: save user creds in LocalStorage, separate service




