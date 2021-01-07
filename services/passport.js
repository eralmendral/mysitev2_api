const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// jwt strategy options
const jwtOptions = {};

// create strategy 
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // Find if the user id exist in the db
    // if exist -> done with user else  done with null
    User.findById(payload.sub, function(err ,user) {
      if(err) return done(err, false);
      if(user) done(null, user);
      else done(null, false);
    });
});
// tell passport to use this strategy