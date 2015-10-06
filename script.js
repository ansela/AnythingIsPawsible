// // create the module and name it scotchApp
// var scotchApp = angular.module('scotchApp', ['ngRoute']);

// // configure our routes
// scotchApp.config(function($routeProvider) {
// 	$routeProvider

// 		// route for the home page
// 		.when('/', {
// 			templateUrl: 'pages/home.html',
// 			controller: 'mainController'
// 		})

// 		// route for the about page
// 		.when('/about', {
// 			templateUrl: 'pages/about.html',
// 			controller: 'aboutController'
// 		})

// 		// route for the contact page
// 		.when('/contact', {
// 			templateUrl: 'pages/contact.html',
// 			controller: 'contactController'
// 		});

// 		// use the HTML5 History API
// 		//$locationProvider.html5Mode(true);
// });

// scotchApp.controller('mainController', function($scope) {
// 	$scope.message = 'hello world!';
// });

// scotchApp.controller('aboutController', function($scope) {
// 	$scope.message = 'this is the about page bitchhhhh';
// });

// scotchApp.controller('contactController', function($scope) {
// 	$scope.message = 'GO AWAY BYE';
// });