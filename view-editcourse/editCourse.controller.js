(function() {
  angular
      .module('app')
      .controller('editController', editController);

  function editController ($scope, $state, CoursesService) {

    CoursesService.get({id: $state.params.id}).$promise.then(function(data) {
      $scope.course = data;
    });

    $scope.create = function(course) {
      console.log('new course: ', course);
      //CoursesService.save(course);
    };

  }
})();