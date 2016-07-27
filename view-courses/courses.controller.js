(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($scope, $state, AuthenticationService, CoursesService) {
    $scope.courses = CoursesService.query();

/*redirect*/
    $scope.edit = function(item) {
      $state.go('editcourse', {id: item.id} );
    };

/*remove current course*/
    $scope.remove = function(item) {
      console.log('remove current course');
      //CoursesService.remove({id: item.id});
    };


/*login section*/
    $scope.logoff = function() {
      AuthenticationService.removeUsername('currentUser');
      $state.go('login');
    };

    $scope.helloUser = function(key) {
      return AuthenticationService.getUsername(key);
    };

  }
})();


