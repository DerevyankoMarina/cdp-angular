(function() {
  angular
      .module('app',  ['ui.router', 'ngMessages', 'ngMockE2E'])
      .controller('mainController', mainController)
      .config(config)
      .run(run);

  function mainController($scope, $state) {}


  function config($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /login
    $urlRouterProvider.otherwise('login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'view-login/login.view.html',
        controller: 'loginController'
      })
      .state('courses', {
        url: '/courses',
        controller: 'coursesController',
        templateUrl: 'view-courses/courses.view.html'
      })
      .state('editcourse', {
        url: "/courses/:id",
        controller: 'editController',
        templateUrl: 'view-editcourse/editCourse.view.html',
        params: {
          id: {
            value: '1'
          }
        }

      })
      .state('addcourse', {
        url: 'courses/new',
        templateUrl: 'view-addcourse/addcourse.html',
        controller: 'editController'
      })
  }

  function run(UserService) {
    UserService.setUsers();
  }

})();



// https://endlessindirection.wordpress.com/2013/05/18/angularjs-delay-response-from-httpbackend/
