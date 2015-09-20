var podcastApp = angular.module('podcastApp', ['ngSanitize', 'ngRoute', 'podcastControllers', 'angularSoundManager', 'angularSpinner']);

var podcastControllers = angular.module('podcastControllers', []);

podcastApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/:slug/:id/:url', {
		templateUrl: 'partials/podcast.html',
		controller: 'podcastCtrl'
	}).
	when('/:slug', {
		templateUrl: 'partials/podcast.html',
		controller: 'homeCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);

podcastApp.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
	usSpinnerConfigProvider.setDefaults({radius:3, width:2, length: 4, lines: 11, color: '#325671'});
}]);