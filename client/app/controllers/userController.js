angular.module('userControllers', ['userServices'])

.controller('regCtrl', function($http, $location, User) {
    var app = this;

    this.regUser = function(regData){
        console.log('submitted')
        console.log(this.regData)
        User.create(app.regData);
        $location.path('/login')
    };
});