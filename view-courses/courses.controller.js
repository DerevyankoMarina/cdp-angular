(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($scope, $state, AuthenticationService, $http, $resource) {

    $scope.logoff = function() {
      AuthenticationService.removeUsername('currentUser');
      $state.go('login');
    };

    $scope.helloUser = function(key) {
      return AuthenticationService.getUsername(key);
    };


    $scope.edit = function(item) {
      console.log(item);
      for (var i = 0; i < $scope.courses.length; i++) {
        if ($scope.courses[i].id == item.id) {
          $scope.courses[i] = item;
          break;
        }
      }

      //$state.go('editcourse',{id: courseId} )
    };

    $scope.addCourse = function(item) {
      //$scope.courses.push(item);
      $state.go('addcourse');
    };

    $scope.remove = function(id) {
      console.log('Remove this course');
    };



    var ItemResource = $resource('/courses/:id', { id: '@id' });

    $scope.courses = ItemResource.query(function() {
      console.log($scope.courses);
    });



/*    $scope.courses = $http.get('/courses').success(function(data) {
      $scope.courses = data;
    });*/


  }
})();


