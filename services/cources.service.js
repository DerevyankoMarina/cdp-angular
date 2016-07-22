(function() {

  angular
    .module('app')
    .factory('CoursesService', CoursesService);

  function CoursesService($httpBackend) {
    function create () {
      //StorageService.setData(key, value);
    }

    function update(item) {
      //return StorageService.getData(key);
    }

    function remove(key) {
      //StorageService.removeData(key);
    }




    return {
      create: create,
      update: update,
      remove: remove
    }
  }







})();