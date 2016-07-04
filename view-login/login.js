angular.module('loginPage', [])
  .controller('loginController', function($scope) {
    $scope.title = "Hello!";
    $scope.phones = [
      { 'name': '1',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
      { 'name': '2',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'},
      { 'name': '3',
        'snippet': 'dshjvbdfhj vfdbvjhdf vdfvd'}

    ];

  });


console.log('login page');
