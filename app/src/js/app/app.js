var podcastApp = angular.module('podcastApp', ['ngSanitize', 'ngRoute', 'podcastControllers', 'angularSoundManager']);

podcastApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when('/', {
		templateUrl: 'partials/podcast.html',
		controller: 'homeCtrl'
	}).
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
