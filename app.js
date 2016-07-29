(function() {
  angular
      .module('app',  ['ui.router', 'ngMessages', 'ngMockE2E', 'ngResource', 'header', 'footer'])
      .controller('mainController', mainController)
      .config(config)
      .run(run);

  function mainController($scope, $state) {}

  function config($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /login
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'view-login/login.view.html',
        controller: 'loginController'
      })
      .state('courses', {
        url: '/courses',
        template: '<courses></courses>'
      })
      .state('editcourse', {
        url: "/courses/:id",
        controller: 'editController',
        templateUrl: 'view-editcourse/editCourse.view.html',
        controllerAs: 'editcourse',
        params: {
          id: {
            value: '@id'
          }
        }

      })
      .state('addcourse', {
        url: 'courses/new',
        templateUrl: 'view-addcourse/addcourse.html',
        controller: 'editController'
      })
  }

  function run(UserService, CoursesMockService) {
    UserService.setUsers();
    CoursesMockService.setCourses();
  }

})();