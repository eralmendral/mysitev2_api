const User = require('../models/User');

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) return res.status(422).send({ error: 'Please provide email and password.' });
  
  // see if email already taken;
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({ error: 'Email already in use.' })
    }

    const user = new User({
      email,
      password
    })

    user.save(function (err) {
      if (err) return next(err);

      return res.json(user);
    });

  });


}