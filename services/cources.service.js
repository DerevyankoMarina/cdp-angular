(function() {

  angular
    .module('app')
    .factory('CoursesService', CoursesService);

  function CoursesService($httpBackend) {

    function setCourses() {
      //get all courses
      $httpBackend.whenGET('/courses').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //get particular course by id
      $httpBackend.whenGET('/courses/:id').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //update course
      $httpBackend.whenPUT('/courses/:id').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //create cource
      $httpBackend.whenPOST('/courses/new').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //delete cource
      $httpBackend.whenDELETE('/courses/:id').respond(function(method, url, data) {
        return [200, courses, {}];
      });
    }


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
      setCourses: setCourses,
      create: create,
      update: update,
      remove: remove
    }
  }


  var courses = [
    { 'title': 'Видеокурс1',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': 'today',
      'duration': '01:30',
      'id': 1
    },
    { 'title': 'Видеокурс2',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': 'today',
      'duration': '01:30',
      'id': 2
    },
    { 'title': 'Видеокурс3',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': 'today',
      'duration': '01:30',
      'id': 3
    }
  ];




})();