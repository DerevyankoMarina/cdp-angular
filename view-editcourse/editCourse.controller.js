(function() {
  angular
      .module('app')
      .controller('editController', editController);

  function editController ($state, CoursesService) {
    var vm = this;

    CoursesService.get({id: $state.params.id}).$promise.then(function(data) {
      vm.course = data;
    });

    vm.saveCourse = function (course) {
      !!course.id ? update(course) : create(course);
    };

//private methods
    function update(course) {
      console.log('update course: ', course);
      CoursesService.update({id: vm.course.id}, course);
    }

    function create(course) {
      console.log('new course: ', course);
      CoursesService.save(course).$promise.then(function(data) {
        console.log(data);
      })
    }


  }
})();