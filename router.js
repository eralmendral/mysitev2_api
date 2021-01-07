const AuthController = require('./controllers/Authentication');

module.exports =  function(app) {
  app.post('/signup', AuthController.signup);
}