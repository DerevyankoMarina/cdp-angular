(function() {
  var app = angular.module('cdpSpa',  ["ui.router"])
    .controller('mainController', function($scope) {
      $scope.title = "Hello!";
      $scope.phones = [
        { 'name': '1',
          'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
        { 'name': '2',
          'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
        { 'name': '3',
          'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'}

      ];

    });

  app.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /login
    $urlRouterProvider.otherwise("login");

    $stateProvider
      .state('login', {
        url: "login",
        templateUrl: "./view-login/login.html"
      })
      .state('courses', {
        url: "/courses",
        templateUrl: "./view-courses/courses.html"
      })

      .state('editcourse', {
        url: "/edit",
        templateUrl: "./view-editcourse/editCourse.html"
      })
      .state('addcourse', {
        url: "/add",
        templateUrl: "./view-addcourse/addcourse.html"
      })
  });


/*
  app.config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl : "index.html"
      })
/!*      .when("/login", {
        templateUrl : "login.html"
      })*!/
      /!* .when("/all-courses", {
        templateUrl : "components/courses/addcourse.html"
      })
      .when("/edit-course", {
        templateUrl : "components/editCourse/editCourse.html"
      })*!/;
  });
*/


})();




/*  .factory('funnyFct', () => ({
    makeFun() {
      return 'Ha-ha-ha';
    }
  }))
  .controller('ViewDevCtrl', funnyFct => {
    // after some exhausting job
    console.log(132);
    funnyFct.makeFun();
  });*/
