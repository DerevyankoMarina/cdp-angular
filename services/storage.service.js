(function() {

  angular
    .module('app')
    .factory('StorageService', StorageService);

  function StorageService() {
    console.log('StorageService');

    return {
      setUsername: function(key, value) {
                      localStorage.setItem(key, value);
                      console.log('setUsername: ' + value);
                    },

      getUsername: function(key) {
                        return localStorage.getItem(key);
                      }
    }


  }


})();
