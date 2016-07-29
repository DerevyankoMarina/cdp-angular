(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($state, AuthenticationService, CoursesService) {
    var vm = this;

    vm.$onInit = function() {
      vm.courses = CoursesService.query();
    };

/*redirect*/
    vm.edit = function(item) {
      $state.go('editcourse', {id: item.id} );
    };

/*remove current course*/
    vm.remove = function(item) {
      console.log('remove current course');
      //CoursesService.remove({id: item.id});
    };


/*login section*/
    vm.logoff = function() {
      AuthenticationService.removeUsername('currentUser');
      $state.go('login');
    };

    vm.helloUser = function(key) {
      return AuthenticationService.getUsername(key);
    };
  }

})();


