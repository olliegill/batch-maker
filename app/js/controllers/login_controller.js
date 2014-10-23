// App.LoginController = Ember.Controller.extend({
//   needs: ['application'],
//   username: '',
//
//   actions: {
//     logIn: function() {
//       var user = this.get('controllers.application.currentUser');
//       this.transitionToRoute('user');
//       App.ref.user({
//         username: this.get('username'),
//         password: this.get('password'),
//       });
//     },
//   }
// });

App.LoginController = Ember.ArrayController.extend({
    needs: ['application'],
    currentUser: Ember.computed.alias('controllers.application.currentUser'),

    actions: {

      logIn: function() { 
        var self = this;
        App.ref.authWithPassword({
          email: this.get('email'),
          password: this.get('password')
        }, function(error, authData) {
          if (error === null) {
            self.store.find('user', authData.uid).then(function(user) {
              localStorage.setItem('userData', JSON.stringify(user));
              self.set('currentUser', JSON.parse(localStorage.getItem('userData')));
              self.set('currentUser.userRef', authData.uid);
            });
            // self.push('currentUser', authData.uid);
            self.transitionToRoute('recipe');
            console.log('User ID: ' + authData.uid + ', Provider: ' + authData.provider);
          } else {
            console.log('Error authenticating user:', error);
          }
        });
      },

      createNewUser: function() {
        var self = this;
        var user = this.get('setUser');
        var email = this.get('setEmail');
        var password = this.get('setPassword');

        var data = {
          email: email,
          password: password
        };

        Application.ref.createUser(data, function(error) {
          if (error === null) {
            Application.ref.authWithPassword(data, function(error, authData) {
              if (error === null) {
                var users = self.store.createRecord('user', {
                  id: authData.uid,
                  username: user,
                  email: email
                });
                users.save().then(function() {
                  self.store.find('user', authData.uid).then(function(user) {
                    localStorage.setItem('userData', JSON.stringify(user));
                    self.set('currentUser', JSON.parse(localStorage.getItem('userData')));
                    self.set('currentUser.userRef', authData.uid);
                  });
                });
                self.transitionToRoute('welcome');
              } else {
              }
            });
          }
        });
      }
    }
  });
