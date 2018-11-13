var User = require('../models/user');

module.exports = function(router){
    router.post('/users', function(req, res) {
        var user = new User();
        user.email = req.body.email;
        user.password =  req.body.password;
        if(req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == ''){
            res.send('Please provide an email and password');
        } else {
            user.save(function(err){
                if (err){
                    res.send('Email is already being used');
                } else {
                    res.send('Account Created')
                }
            });
        }
    });
    router.post('/authenticate', function(req,res){
        User.findOne({email: req.body.email}).select('email password').exec(function(err,user){
            if (err) throw err;
            if (!user)  {
                res.json({sucess: false, message: 'Could not authenticate the User'});
            } else if (user) {
                if (req.body.password){
                    var validPassword = user.comparePassword(req,body.password);
                } else{
                    res.json({sucess: false, message: 'No password'});
                }
                if (!validPassword){
                    res.json({sucess: false, message: 'Could not authenticate pswd'});
                } else {
                    res.json({sucess: true, message: 'Authenticated!'});
                }
            }
        });
        });
    
    return router;
}