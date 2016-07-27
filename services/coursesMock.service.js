(function() {

  angular
    .module('app')
    .factory('CoursesMockService', CoursesMockService);

  function CoursesMockService($httpBackend) {

    function setCourses() {
      //get all courses
      $httpBackend.whenGET('/courses').respond(function(method, url, data) {
        return [200, courses, {}];
      });

      //get particular course by id
      $httpBackend.whenGET(/courses\/\w+$/).respond(function(method, url, data) {
        var id = getId(url);
        var course = getById(id);
        return [200, course, {}];
      });

      //update course
      $httpBackend.whenPUT(/courses\/\w+$/).respond(function(method, url, data) {
        var id = getId(url);
        console.log('/courses/new: ', data, id);
        return [200, courses, {}];
      });

      //create cource
      $httpBackend.whenPOST('/courses/new').respond(function(method, url, data) {
        console.log('/courses/new: ', data);
        //return [200, courses, {}];
      });

      //delete cource
      $httpBackend.whenDELETE('/courses/:id').respond(function(method, url, data) {
        console.log(data);
        return [200, success, {}];
      });
    }


    function create () {
      //StorageService.setData(key, value);
    }

    function getById(id) {
      for (var i = 0; i < courses.length; i++) {
        if(courses[i].id === id) {
          return courses[i];
        }
      }
    }

    function remove(key) {
      //StorageService.removeData(key);
    }

    function getId(url) {
      var reg = /.*\/courses\/(\w+)/;
      return parseInt(url.replace(reg, '$1'), 10);
    }

    return {
      setCourses: setCourses
    }
  }


  var courses = [
    { 'title': 'Видеокурс1',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': new Date(60000),
      'id': 1
    },
    { 'title': 'Видеокурс2',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': '12:30',
      'id': 2
    },
    { 'title': 'Видеокурс3',
      'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
      'date': new Date(),
      'duration': '10:30',
      'id': 3
    }
  ];




})();