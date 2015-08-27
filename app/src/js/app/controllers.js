
var podcastControllers = angular.module('podcastControllers', []);

podcastControllers.controller('searchCtrl', ['$scope', '$anchorScroll', 'search', 'searchFeedService', function ($scope, $anchorScroll, search, searchFeedService){

	$scope.clearSearch = function(){
		$scope.keyword.str = '';
	};

	$scope.clearSearchToTop = function(){
		$scope.keyword.str = '';
		$anchorScroll();
	};

	$scope.keyword = search.str;

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			var searchFeed = angular.copy($scope.feed.q);
			$scope.searchFeed = searchFeedService.getSearchFeed(searchFeed);
		}
	});
}]);

podcastControllers.controller('feedsCtrl', ['$scope', '$timeout', '$location', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', function ($scope, $timeout, $location, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle){

	$scope.feed = getFeedService.get();
	$scope.inputRssFeed = {};

	$scope.checkFeed = function(){

		if(!$scope.inputRssFeed.url)
			return;

		rssService.getRssFeed($scope.inputRssFeed.url).then(function(res){
			$scope.checkedFeed = checkFeedService.check(res, $scope.inputRssFeed.url);

			$timeout(function() {
				savePlayFeed($scope.inputRssFeed.url);
			}, 500);
		});
	};

	var resetChecked = function(){
		$scope.checkedFeed = [];
		$scope.inputRssFeed.url = '';
	};

	var savePlayFeed = function(url){

		if(!$scope.checkedFeed)
			return;

		if($scope.feed.length === 0 && $scope.feed.q.url == url){
			resetChecked();
			$location.url('/');
			return;
		}

		getFeedService.set(url).then(function(data){
			podcastsPlaylist.set($scope.checkedFeed);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
			resetChecked();
			$location.url('/' +  $scope.feed.q.slug);

		});
	};

}]);

podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer){

	$scope.currentPodcastText = 'current';
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();
	$scope.podcastsList = podcastsPlaylist.get();

	$scope.playFeed = function(url){

		if(!url)
			return;

		if($scope.feed.q && $scope.feed.q.url == url)
			return;

		getFeedService.set(url).then(function(res){
			$location.url('/' +  $scope.feed.q.slug);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
		});
	};

	$scope.removeFeedFromList = function(url){

		podcastsPlaylist.removePodcast(url);

		if($scope.feed.q && $scope.feed.q.url == url){
			if(confirm('Are you sure you want to remove the podcast ?')){
				delete $scope.feed.q;
				pageTitle.setPodcastTitle($scope.pageTitleDefault);
				pageTitle.setShowTitle('');

				if($scope.currentPlaying){
					$timeout(function(){
						angularPlayer.stop();
					});

					$scope.currentPlaying = [];
				}
				$location.url('/');
			}
		}
	};
}]);

podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueShowService', 'pageTitle', function ($scope, getUniqueShowService, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShowService.getItem($scope.feed.q.item, 'latest');
			pageTitle.setPodcastTitle($scope.feed.q.title);
			pageTitle.setShowTitle('');
		}
	});
}]);

podcastControllers.controller('podcastCtrl', ['$scope', '$routeParams', 'getUniqueShowService', 'pageTitle', function ($scope, $routeParams, getUniqueShowService, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShowService.getItem($scope.feed.q.item, $routeParams.id);
			pageTitle.setShowTitle($scope.podcast.title  + ' - ');
		}
	});
}]);

podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', 'pageTitle', 'angularPlayer', 'search', 'podcastsPlaylist', 'getFeedService', 'checkCurrentPodcastOnLoad', function ($scope, $location, $routeParams, pageTitle, angularPlayer, search, podcastsPlaylist, getFeedService, checkCurrentPodcastOnLoad){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var loadCurrentPodcastOnLoade = function(){
		if(!$scope.podcastsList)
			return;

		var currentPodcastOnLoad;
		angular.forEach($scope.podcastsList, function(item, i){
			if(item.current === true)
				currentPodcastOnLoad = item;
		});

		if(!currentPodcastOnLoad){
			$location.url('/');
			return;
		}

		getFeedService.set(currentPodcastOnLoad.url).then(function(res){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);
		});
	};
	// loadCurrentPodcastOnLoade();

	$scope.CurrentPodcastOnLoadUrl = checkCurrentPodcastOnLoad.get($scope.podcastsList);
	console.log($scope.CurrentPodcastOnLoadUrl);
	if($scope.isCurrentPodcastOnLoadUrl === false){
		console.log('letscheckthebitch');
		getFeedService.set($scope.CurrentPodcastOnLoadUrl).then(function(res){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);
		});
	}


}]);