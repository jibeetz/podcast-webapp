podcastControllers.controller('pageCtrl', ['$scope', '$routeParams', 'pageTitle', 'search', 'getFeedService', 'svgService', function ($scope, $routeParams, pageTitle, search, getFeedService, svgService){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.feed = getFeedService.get();

	$scope.svgs = svgService.manageData();
	$scope.svgs = svgService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

}]);