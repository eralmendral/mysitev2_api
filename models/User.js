const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define 
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
  }
})

// create model class
const UserModel = mongoose.model('user', userSchema);

// export 
module.exports = UserModel;