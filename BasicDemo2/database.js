var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myappdatabase');

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
    meta: {
      age: Number,
      website: String
    },
    created_at: Date,
    updated_at: Date
})

userSchema.methods.dudify = function(){
    this.name = this.name + '-dude';
    return this.name;
}

// on every save, add the date
userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
  
    // change the updated_at field to current date
    this.updated_at = currentDate;
  
    // if created_at doesn't exist, add to that field
    if (!this.created_at)
      this.created_at = currentDate;
  
    next();
});

// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
