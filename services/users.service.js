(function() {

  angular
    .module('app')
    .factory('UserService', UserService);

    function UserService($httpBackend) {
      var users = [{name: 'test', pass: 'test'}, {name: 'marina', pass: '54321'}];

      var service = {};

      service.setUsers = function() {
        var users = [{name: 'test', pass: 'test'}, {name: 'marina', pass: '54321'}];
        console.log(users);

        function checkCreds (login, pass) {
          for (var i = 0; i < users.length; i++) {
            if (users[i].name === login && users[i].pass === pass) {
              return true;
            }
          }
        }

        $httpBackend.whenPOST('/users').respond(function(method, url, data) {
          var user = JSON.parse(data);
          var check = checkCreds(user.login, user.password);
          var res = {success: check, username: user.login};
          return [200, res, {}];
        });
      };

      return service;

    }


})();
