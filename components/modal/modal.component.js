angular
  .module('modal', ['ngAnimate', 'ui.bootstrap'])
  .component('modal', {
    templateUrl: 'components/modal/modal.tmpl.html',
    controller: 'modalController',
    controllerAs: 'modalCtrl'
  });