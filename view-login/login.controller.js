(function() {
  angular
      .module('app')
      .controller('loginController', loginController);

  //loginController.$inject = ['StorageService']; // TODO: save user creds in LocalStorage, separate service. It does not work now ((

  function loginController ($scope, $http, $state, $rootScope, StorageService) {
    console.log('loginController');
    console.log(StorageService);

    $scope.user = {
      'login': '',
      'password': ''
    };

    $scope.correctCreds = true; // hide incorrect creds message

    $scope.login = function(user) {
      $http.post('/users', user).success(function(data) {

        if(data.success) {
          $rootScope.$broadcast('userLogged', {
            username: data.username
          });

          StorageService.setUsername('login', data.username);


          //TODO: save username to storage // {currentUser: data.username}
          $state.go('courses');

        } else {
          $scope.correctCreds = false; // show incorrect creds message
          $scope.user.password = '';
        }
      });
    };

  }
})();





