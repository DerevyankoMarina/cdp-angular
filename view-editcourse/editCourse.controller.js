(function() {
  angular
      .module('app')
      .controller('editController', editController);

  function editController ($scope, $state) {
    $scope.create = function(course) {
      console.log(course);
    };

    $scope.toAllCourses = function() {
      $state.go('courses');
    }
  }
})();

