/*
(function() {

  angular
    .module('app')
    .factory('UserService', UserService);

    function UserService($httpBackend) {
      var users = [{name: 'test', pass: 'test'}, {name: 'marina', pass: '54321'}];

      return {
        setUsers: function() {
          console.log('setUsers');
          $httpBackend.whenGET(/^view-/).passThrough();
          $httpBackend.whenGET(/tmpl/).passThrough();

          var users = [{name: 'test', pass: 'test'}, {name: 'marina', pass: '54321'}];

          function checkCreds (login, pass) {
            for (var i = 0; i < users.length; i++) {
              if (users[i].name === login && users[i].pass === pass) {
                return true;
              } else {
                continue;
              }
            }
          }

          $httpBackend.whenPOST('/users').respond(function(method, url, data) {
            var user = JSON.parse(data);
            var res = checkCreds(user.login, user.password);
            return [200, res, {}];
            //return users;
          });
        }
      }

    }


})();*/
