angular.module('homeController', ['authServices'])


.controller('homeController', function(Auth, $location) {
    var app = this;

    app.email = Auth.getEmail();

    if(!Auth.getEmail()){
        $location.path('/login');
    }
});