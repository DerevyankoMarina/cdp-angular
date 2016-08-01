(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($state, AuthenticationService, CoursesService) {
    var vm = this;

    vm.$onInit = function() {
      vm.courses = CoursesService.query();
    };

//redirect
    vm.edit = function(item) {
      $state.go('editcourse', {id: item.id} );
    };

//remove current course
    vm.remove = function(item) {
      CoursesService.remove({id: item.id});

      for (var i = 0; i < vm.courses.length; i++) {
        if(vm.courses[i].id === item.id) {
          vm.courses.splice(i, 1);
        }
      }
    };

//login section
    vm.logoff = function() {
      AuthenticationService.removeUsername('currentUser');
      $state.go('login');
    };

    vm.helloUser = function(key) {
      return AuthenticationService.getUsername(key);
    };
  }

})();