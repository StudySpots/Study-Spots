angular.module('homeController', ['authServices'])


.controller('homeController', function(Auth, $location) {
    var app = this;
	
	//map
	var mymap = L.map('mapid').setView([29.642526, -82.356317], 14);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		style: 'mapbox://styles/yingwenhuang/cjp4v1m8k02b82sqxy3ugknc4',
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiaXRzYWxpMyIsImEiOiJjam5seGU5c3MwMjl4M3BycnkxYjV6NDN4In0.3ABf8EiMO2eAQ4vWTa9w-w'
	}).addTo(mymap);
	
    app.email = Auth.getEmail();

    if(!Auth.getEmail()){
        $location.path('/login');
    }
});