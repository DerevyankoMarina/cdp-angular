(function () {
  angular
      .module('app')
      .controller('coursesController', coursesController);

  function coursesController ($scope, $state, StorageService) {

    $scope.logoff = function() {
      StorageService.removeUsername('currentUser');
      $state.go('login');
    };

    $scope.helloUser = function(key) {
      return StorageService.getUsername(key);
    };

    $scope.edit = function(courseId) {
      $state.go('editcourse',{id: courseId} )
    };

    $scope.new = function() {
      $state.go('addcourse');
    };

    $scope.edit = function(id) {
      $state.go('editcourse/1');
    };

    $scope.remove = function(id) {
      console.log('Remove this course');
    };


    $scope.courses = [
      { 'title': 'Видеокурс1',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
        'date': 'today',
        'duration': '01:30'
      },
      { 'title': 'Видеокурс2',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
        'date': 'today',
        'duration': '01:30'
      },
      { 'title': 'Видеокурс3',
        'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
        'date': 'today',
        'duration': '01:30'
      }
    ];
  };
})();


