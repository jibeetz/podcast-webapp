podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', 'pageTitle', 'search', 'podcastsPlaylist', 'getFeedService', 'checkCurrentPodcastOnLoad', function ($scope, $location, $routeParams, pageTitle, search, podcastsPlaylist, getFeedService, checkCurrentPodcastOnLoad){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var getFeed = function(url){

		if(!url)
			return;

		getFeedService.set(url).then(function(){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);

			// console.log($scope.feed);
		});
	};

	checkCurrentPodcastOnLoad.getMessages($scope.podcastsList).then(getFeed);



}]);