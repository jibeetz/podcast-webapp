podcastControllers.controller('feedsCtrl', ['$scope', '$timeout', '$location', '$routeParams', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', 'inputBox', 'checkCurrentPodcastOnLoad', function ($scope, $timeout, $location, $routeParams, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle, inputBox, checkCurrentPodcastOnLoad){

	$scope.feed = getFeedService.get();
	$scope.inputRssFeed = {};
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.addRss = inputBox.set(($scope.podcastsList.length) ? false: true);
	$scope.addRss = inputBox.get();

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

	// if(!$scope.podcastsList.length){
	// 	defaultPodcasts.get().then(function(res){
	// 		$scope.podcastsList = res;
	// 		checkCurrentPodcastOnLoad.getCurrent($scope.podcastsList).then(getFeed);
	// 	});
	// 	// console.log($scope.podcastsList);
	// }else{
	// 	checkCurrentPodcastOnLoad.getCurrent($scope.podcastsList).then(getFeed);
	// }

	checkCurrentPodcastOnLoad.getCurrent($scope.podcastsList).then(getFeed);

	$scope.toggleAddrssAdd = '<svg class="icon icon-plus"><use xlink:href="assets/icons.svg#icon-plus"></use></svg>';

	$scope.toggleAddrssList = '<svg class="icon icon-numbered-list"><use xlink:href="assets/icons.svg#icon-numbered-list"></use></svg>';


	var toggleAddrssBtnFn = function(){
		$scope.toggleAddrssBtn = ($scope.addRss.b) ? $scope.toggleAddrssList : $scope.toggleAddrssAdd;
	}
	toggleAddrssBtnFn();

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
		});
	};

}]);