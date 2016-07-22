(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($scope, $state, AuthenticationService, $http) {

    $scope.logoff = function() {
      AuthenticationService.removeUsername('currentUser');
      $state.go('login');
    };

    $scope.helloUser = function(key) {
      return AuthenticationService.getUsername(key);
    };


    $scope.edit = function(item) {
      console.log(item);
      for (var i = 0; i < $scope.courses.length; i++) {
        if ($scope.courses[i].id == item.id) {
          $scope.courses[i] = item;
          break;
        }
      }

      //$state.go('editcourse',{id: courseId} )
    };

    $scope.addCourse = function(item) {
      //$scope.courses.push(item);
      $state.go('addcourse');
    };

    $scope.remove = function(id) {
      console.log('Remove this course');
    };

/*    $scope.courses = $http.get('../data/data.json').success(function(data) {
      console.log(data);
    });*/


      $scope.courses = [
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
  }
})();


