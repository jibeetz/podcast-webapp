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
			$scope.addRss = false;
		});
	};

}]);