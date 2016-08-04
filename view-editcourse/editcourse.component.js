angular
  .module('app.editcourse', ['filters'])
  .component('editcourse', {
    templateUrl: 'view-editcourse/editcourse.view.html',
    controller: 'editController',
    controllerAs: 'edit'
  });