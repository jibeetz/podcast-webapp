podcastControllers.controller('pageCtrl', ['$scope', '$routeParams', 'pageTitle', 'search', 'getFeedService', function ($scope, $routeParams, pageTitle, search, getFeedService){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

}]);