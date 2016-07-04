angular.module('coursesPage', [])
  .controller('coursesController', function($scope) {
    $scope.title = "coursesPage!";
    $scope.phones = [
      { 'name': '1',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
      { 'name': '2',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
      { 'name': '3',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'}

    ];

  });
