(function() {
  angular
    .module('app.courses')
    .filter('courseDuration', courseDuration);


  function courseDuration() {
    return function (value) {
      var hoursFraction = value/60;
      var hours = Math.floor(hoursFraction);
      var minutes = value % 60;

      return hours + ' ч. ' +  minutes + ' мин.';
    };
  }


})();