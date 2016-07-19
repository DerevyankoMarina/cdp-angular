(function() {
  angular
      .module('app')
      .controller('editController', editController);


  function editController ($scope) {
    $scope.title = "add/edit course!";

    $scope.toAllCourses = function() {
      console.log('back to courses page');

      $state.go('courses');  // angular.js:13708 ReferenceError: $state is not defined
    };

    console.log('editController');
  }
})();

