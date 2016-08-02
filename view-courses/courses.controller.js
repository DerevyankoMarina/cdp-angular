(function () {
  angular
      .module('app.courses')
      .controller('coursesController', coursesController);

  coursesController.$inject = ['$state', 'AuthenticationService', 'CoursesService'];


  function coursesController ($state, AuthenticationService, CoursesService) {
    var vm = this;

    vm.$onInit = function () {
      vm.courses = CoursesService.query();
    };

//redirect
    vm.edit = function (item) {
      $state.go('editcourse', {id: item.id});
    };

//remove current course
    vm.remove = function (item) {
      CoursesService.remove({id: item.id}).$promise.then(function (data) {
        if (data.success) {
          for (var i = 0; i < vm.courses.length; i++) {
            if (vm.courses[i].id === item.id) {
              vm.courses.splice(i, 1);
            }
          }
        }
      });
    };
  }
})();