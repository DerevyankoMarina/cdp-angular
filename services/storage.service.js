(function() {
  angular
    .module('app')
    .factory('StorageService', StorageService);

  function StorageService() {

    function setUsername (key, value) {
      localStorage.setItem(key, value);
    }

    function getUsername(key) {
      return localStorage.getItem(key);
    }

    function removeUsername(key) {
      localStorage.removeItem(key);
    }


    return {
      setUsername: setUsername,
      getUsername: getUsername,
      removeUsername: removeUsername
    }
  }
})();
