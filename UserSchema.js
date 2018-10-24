/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
var Schema = mongoose.Schema;

/* Create your schema */
var userSchema = new Schema({
  //username atleast 8 length and must have atleast 1 digit
  
	username: {type: String, required: true, unique: true },
	password: {type: String, required: true, type: Number, required: true },
	email: {type: String, required: true, unique: true },
	//security question for password retrieval
	secq: 	{type: String, required true},
	seca: {type: String, required true, unique: true },
	meta:{
	ifreserved: Boolean,
	//holds location name and coordinates
	reservation: {type: String, type: Number },
	},
	created_at: Date,
	updated_at: Date
	
  
  
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at= currentDate; 
  
  if(!this.created_at)
	  this.created_at = crrentDate;
 
 next();
  
  
});


/* Possible user functions */









//****************************




var User = mongoose.model('User', userSchema);
module.exports = User;