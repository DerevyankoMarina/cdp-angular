(function() {
  angular
      .module('app.login')
      .controller('loginController', loginController);

  loginController.$inject = ['$scope', '$http', '$state', 'AuthenticationService'];

  function loginController ($scope, $http, $state, AuthenticationService) {

    var vm = this;

    vm.user = {
      'login': '',
      'password': ''
    };

    vm.correctCreds = true; // hide incorrect creds message

    vm.login = function(user) {
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





