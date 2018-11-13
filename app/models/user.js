var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, null, null, function(err, hash){
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

// Method to compare passwords in API (when user logs in) 
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password); // Returns true if password matches, false if doesn't
};

module.exports = mongoose.model('User', UserSchema);