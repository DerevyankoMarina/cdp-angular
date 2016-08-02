angular
  .module('app.courses', [])
  .component('courses', {
    templateUrl: 'view-courses/courses.view.html',
    controller: 'coursesController',
    controllerAs: 'courses'
  });