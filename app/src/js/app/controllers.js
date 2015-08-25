
var podcastControllers = angular.module('podcastControllers', []);

podcastControllers.controller('searchCtrl', ['$scope', '$anchorScroll', 'search', function ($scope, $anchorScroll, search){

	$scope.clearSearch = function(){
		$scope.keyword.str = '';
	};

	$scope.clearSearchToTop = function(){
		$scope.keyword.str = '';
		$anchorScroll();
	};

	$scope.keyword = search.str;
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

podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', '$timeout', 'pageTitle', 'rssService', 'feedService', 'searchFeedService', 'angularPlayer', 'search', function ($scope, $location, $routeParams, $timeout, pageTitle, rssService, feedService, searchFeedService, angularPlayer, search){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	$scope.podcastTitle = $scope.pageTitleDefault;
	$scope.imgDefault = 'img/icon320x320.png';
	$scope.isLocalStorage = localStorageTest();
	$scope.currentPodcastText = 'current';
	$scope.keyword = search.str;

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var getData = function(data){
		return rssService.getRssFeed(data).then(function(res){

			$scope.feed = feedService.getFeed(res.data.query.results.rss.channel, data, $scope.imgDefault);

			$scope.podcastTitle = $scope.feed.title;

			var searchFeed = angular.copy($scope.feed);
			$scope.searchFeed = searchFeedService.getSearchFeed(searchFeed);
		});
	};

	var retrievePodcastsFromLocalStorage = function (){
		$scope.podcastsList = [];

		if(!$scope.isLocalStorage || !localStorage.feeds || localStorage.feeds === undefined || localStorage.feeds === 'undefined')
			return;

		$scope.podcastsList = JSON.parse(localStorage.feeds);
	};
	retrievePodcastsFromLocalStorage();

	var saveToPodcastsList = function(data){

		if(!$scope.isLocalStorage)
			return;

		var isPodcastIn = false;
		angular.forEach($scope.podcastsList, function(item, i){
			if(item.url == data.url)
				isPodcastIn = true;
		});

		if(isPodcastIn)
			return;

		$scope.podcastsList.push(data);

		localStorage.setItem('feeds', angular.toJson($scope.podcastsList));
	};

	var updateCurrent = function(url){

		angular.forEach($scope.podcastsList, function(item, i){
			item.current = (item.url == $scope.feed.url) ? true : false;
		});

		localStorage.setItem('feeds', angular.toJson($scope.podcastsList));
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
			}, 1000);
		});
	};

	$scope.playFeed = function(url){

		if(!url)
			return;

		if($scope.feed && $scope.feed.url == url)
			return;

		getData(url).then(function(res){
			$location.url('/' +  $scope.feed.slug);
			updateCurrent(url);
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
			saveToPodcastsList($scope.checkedFeed);
			updateCurrent(url);
			resetChecked();
			$location.url('/' +  $scope.feed.slug);
		});
	};

	$scope.removeFeedFromList = function(url){
		$scope.podcastsList = $scope.podcastsList.filter(function(obj){
			return obj.url !== url;
		});

		localStorage.setItem('feeds', angular.toJson($scope.podcastsList));

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

	var loadCurrentPodcastOnLoad = function(){
		if(!$scope.podcastsList)
			return;

		var currentPodcastOnLoad;
		angular.forEach($scope.podcastsList, function(item, i){
			if(item.current === true)
				currentPodcastOnLoad = item;
		});

		// TODO Add location blank if no current

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