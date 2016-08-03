angular
  .module('app.courses', ['modal'])
  .component('courses', {
    templateUrl: 'view-courses/courses.view.html',
    controller: 'coursesController',
    controllerAs: 'courses'
  });