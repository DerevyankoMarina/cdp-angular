(function() {
  angular
      .module('app',  ['ui.router', 'ngMessages', 'ngMockE2E', ])
      .controller('mainController', mainController)
      .config(config)
      .run(run);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function mainController($scope) {
    $scope.title = 'mainController';
  }

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

  function run($httpBackend) {
    console.log('run');
    $httpBackend.whenGET(/^view-/).passThrough();
    $httpBackend.whenGET(/tmpl/).passThrough();

    var users = [{name: 'test', pass: 'test'}, {name: 'marina', pass: '54321'}];

    function checkCreds (login, pass) {
      for (var i = 0; i < users.length; i++) {
       if (users[i].name === login && users[i].pass === pass) {
         return true;
       } else {
         continue;
       }
      }
    }

    $httpBackend.whenPOST('/users').respond(function(method, url, data) {
      var user = JSON.parse(data);
      var res = checkCreds(user.login, user.password);
      return [200, res, {}];
      //return users;
    });

  }

})();



// https://endlessindirection.wordpress.com/2013/05/18/angularjs-delay-response-from-httpbackend/
