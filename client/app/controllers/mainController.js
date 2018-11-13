angular.module('mainController', ['authServices'])


.controller('mainCtrl', function(Auth, $location) {
    var app = this;

    this.doLogin = function(loginData){
        console.log('submitted')
        $location.path('/')
    };
});