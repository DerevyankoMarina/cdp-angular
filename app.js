(function() {
  var app = angular.module('app',  ['ui.router']);

  app.controller('mainController', mainController);

  function mainController($scope) {
    $scope.title = 'mainController';
  }

  app.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /login
    $urlRouterProvider.otherwise('login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'view-login/login.html',
        controller: 'loginController'
      })
      .state('courses', {
        url: '/courses',
        controller: 'coursesController',
        templateUrl: 'view-courses/courses.html'
      })

      .state('editcourse', {
        url: "/courses/:id",
        controller: 'editController',
        templateUrl: 'view-editcourse/editCourse.html',
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
  });


})();

