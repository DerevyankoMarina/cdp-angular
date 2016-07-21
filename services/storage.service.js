(function() {
  angular
    .module('app')
    .factory('StorageService', StorageService);

  function StorageService() {

    function setData (key, value) {
      localStorage.setItem(key, value);
    }

    function getData(key) {
      return localStorage.getItem(key);
    }

    function removeData(key) {
      localStorage.removeItem(key);
    }

    return {
      setData: setData,
      getData: getData,
      removeData: removeData
    }
  }
})();
