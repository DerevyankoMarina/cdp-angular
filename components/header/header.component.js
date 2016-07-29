angular
    .module('header', [])
    .component('headerApp', {
      templateUrl: 'components/header/header.tmpl.html',
      controller: 'coursesController',
      controllerAs: 'courses'
    });