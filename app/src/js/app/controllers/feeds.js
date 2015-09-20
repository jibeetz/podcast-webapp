podcastControllers.controller('feedsCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', 'inputBox', 'checkCurrentPodcastOnLoad', 'defaultPodcasts', 'generateIcon', 'usSpinnerService', function ($scope, $timeout, $location, $routeParams, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle, inputBox, checkCurrentPodcastOnLoad, defaultPodcasts, generateIcon, usSpinnerService){

	$scope.feed = getFeedService.get();
	$scope.inputRssFeed = {};
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.addRss = inputBox.set(($scope.podcastsList.length) ? false : true);
	$scope.addRss = inputBox.get();

	$scope.toggleAddrssAdd = generateIcon.get('plus');
	$scope.toggleAddrssList = generateIcon.get('numbered-list');

	var toggleAddrssBtnFn = function(){
		$scope.toggleAddrssBtn = ($scope.addRss.b) ? $scope.toggleAddrssList : $scope.toggleAddrssAdd;
	}
	toggleAddrssBtnFn();

	$scope.checkFeed = function(){

		if(!$scope.inputRssFeed.url)
			return;

		usSpinnerService.spin('spinner-input');

		rssService.getRssFeed($scope.inputRssFeed.url).then(function(res){
			$scope.checkedFeed = checkFeedService.check(res, $scope.inputRssFeed.url);

			$timeout(function() {
				savePlayFeed($scope.inputRssFeed.url);
			}, 200);
		});
	};

	var getFeed = function(url){

		if(!url)
			return;

		getFeedService.set(url).then(function(){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);

			usSpinnerService.stop('spinner-input');
			// console.log($scope.feed);
		});
	};

	var loadPodcastsOnload = function(){
		if(!$scope.podcastsList.length){

			$scope.defaultPodcasts = defaultPodcasts.get;
			angular.forEach($scope.defaultPodcasts, function(value, key) {
				rssService.getRssFeed(value.url).then(function(res){
					var defaultPodcast = checkFeedService.check(res, value.url);
					if(key === 0)
						$scope.launchOnload = true;

					defaultPodcast.current = value.current;
					podcastsPlaylist.set(defaultPodcast);
				});
			});

			inputBox.set(false);
			toggleAddrssBtnFn();
		}
	}
	loadPodcastsOnload();

	$scope.$watch('launchOnload', function() {
		if($scope.podcastsList.length)
			checkCurrentPodcastOnLoad.getCurrent($scope.podcastsList).then(getFeed);
	});

	$scope.toggleAddrss = function(){
		inputBox.set(($scope.addRss.b) ? false : true);
		toggleAddrssBtnFn();
	}

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
			inputBox.set(false);
			toggleAddrssBtnFn();
			usSpinnerService.stop('spinner-input');
		});
	};

}]);