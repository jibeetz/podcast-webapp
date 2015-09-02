podcastControllers.controller('feedsCtrl', ['$scope', '$timeout', '$location', 'rssService', 'podcastsPlaylist', 'checkFeedService', 'getFeedService', 'pageTitle', 'inputBox', function ($scope, $timeout, $location, rssService, podcastsPlaylist, checkFeedService, getFeedService, pageTitle, inputBox){

	$scope.feed = getFeedService.get();
	$scope.inputRssFeed = {};
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