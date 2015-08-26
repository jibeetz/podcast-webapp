
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

	$scope.$watch('feed', function() {
		if($scope.feed){
			var searchFeed = angular.copy($scope.feed);
			$scope.searchFeed = searchFeedService.getSearchFeed(searchFeed);
		}
	});
}]);

podcastControllers.controller('playlistCtrl', ['$scope', 'podcastsPlaylist', function ($scope, podcastsPlaylist){

	$scope.podcastsList = podcastsPlaylist.get();
}]);

podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueService', 'pageTitle', function ($scope, getUniqueService, pageTitle){

	$scope.$watch('feed', function() {
		if($scope.feed){
			$scope.podcast = getUniqueService.getItem($scope.feed.item, 'latest');
			pageTitle.setTitle('');
		}
	});
}]);

podcastControllers.controller('podcastCtrl', ['$scope', '$routeParams', 'getUniqueService', 'pageTitle', function ($scope, $routeParams, getUniqueService, pageTitle){

	$scope.$watch('feed', function() {
		if($scope.feed){
			$scope.podcast = getUniqueService.getItem($scope.feed.item, $routeParams.id);
			pageTitle.setTitle($scope.podcast.title  + ' - ');
		}
	});
}]);

podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', '$timeout', 'pageTitle', 'rssService', 'feedService', 'angularPlayer', 'search', 'podcastsPlaylist', function ($scope, $location, $routeParams, $timeout, pageTitle, rssService, feedService, angularPlayer, search, podcastsPlaylist){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	$scope.podcastTitle = $scope.pageTitleDefault;
	$scope.imgDefault = 'img/icon320x320.png';
	$scope.currentPodcastText = 'current';
	$scope.keyword = search.str;

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var getData = function(url){
		return rssService.getRssFeed(url).then(function(res){

			$scope.feed = feedService.getFeed(res.data.query.results.rss.channel, url, $scope.imgDefault);

			$scope.podcastTitle = $scope.feed.title;
		});
	};

	$scope.checkFeed = function(){

		if(!$scope.inputRssFeed)
			return;

		rssService.getRssFeed($scope.inputRssFeed).then(function(res){

			if(res.status != 200)
				return;

			var channel = res.data.query.results.rss.channel;

			if(channel.item.length === 0)
				return;

			var channelSrc = 0;
			for (var i = 0; i < channel.item.length; i++) {
				if(channel.item[i].enclosure.url)
					channelSrc += 1;
			}
			if(channelSrc === 0)
				return;

			var feedTitle = channel.title,
				feedAuthor = channel.author;

			$scope.checkedFeed = {title: feedTitle, author: feedAuthor, url: $scope.inputRssFeed};

			$timeout(function() {
				savePlayFeed($scope.inputRssFeed);
			}, 500);
		});
	};

	$scope.playFeed = function(url){

		if(!url)
			return;

		if($scope.feed && $scope.feed.url == url)
			return;

		getData(url).then(function(res){
			$location.url('/' +  $scope.feed.slug);
			podcastsPlaylist.setCurrent($scope.feed.url);
		});
	};

	var resetChecked = function(){
		$scope.checkedFeed = [];
		$scope.inputRssFeed = '';
	};

	var savePlayFeed = function(url){

		if(!$scope.checkedFeed)
			return;

		if($scope.feed && $scope.feed.url == url){
			resetChecked();
			$location.url('/');
			return;
		}

		getData(url).then(function(res){
			podcastsPlaylist.set($scope.checkedFeed);
			podcastsPlaylist.setCurrent($scope.feed.url);
			resetChecked();
			$location.url('/' +  $scope.feed.slug);
		});
	};

	$scope.removeFeedFromList = function(url){

		podcastsPlaylist.removePodcast(url);

		if($scope.feed && $scope.feed.url == url){
			if(confirm('Are you sure you want to remove the podcast ?')){
				delete $scope.feed;
				$scope.podcastTitle = $scope.pageTitleDefault;

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

	$scope.podcastsList = podcastsPlaylist.get();

	var loadCurrentPodcastOnLoad = function(){
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

		getData(currentPodcastOnLoad.url).then(function(res){
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.slug);
		});
	};
	loadCurrentPodcastOnLoad();
}]);