angular
  .module('app.courses', ['modal', 'filters'])
  .component('courses', {
    templateUrl: 'view-courses/courses.view.html',
    controller: 'coursesController',
    controllerAs: 'courses'
  });