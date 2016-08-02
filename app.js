(function() {
  angular
      .module('app',  [
        'ui.router',
        'ngMessages',
        'ngMockE2E',
        'ngResource',
        'header',
        'footer',
        'modal',
        'app.login',
        'app.courses',
        'app.editcourse'
      ])
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
        template: '<login></login>'
      })
      .state('courses', {
        url: '/courses',
        template: '<courses></courses>'
      })
      .state('editcourse', {
        url: "/courses/:id",
        controller: 'editController',
        templateUrl: 'view-editcourse/editcourse.view.html',
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
        controller: 'editController',
        controllerAs: 'editcourse'
      })
  }

  function run(UserService, CoursesMockService) {
    UserService.setUsers();
    CoursesMockService.setCourses();
  }

})();