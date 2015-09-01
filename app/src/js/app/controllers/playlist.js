podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', 'inputBox', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer, inputBox){

	$scope.currentPodcastText = '<svg class="icon icon-play"><use xlink:href="assets/icons.svg#icon-play"></use></svg>';
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.addRss = inputBox.get();

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
	};

	$scope.listrss = true;

	$scope.toggleListrssBtnMore = '<svg class="icon icon-bottom"><use xlink:href="assets/icons.svg#icon-bottom"></use></svg>';

	$scope.toggleListrssBtnLess = '<svg class="icon icon-top"><use xlink:href="assets/icons.svg#icon-top"></use></svg>';

	var toggleListrssBtnFn = function(){
		$scope.toggleListrssBtn = ($scope.listrss) ? $scope.toggleListrssBtnMore : $scope.toggleListrssBtnLess;
		$scope.allListrss = ($scope.listrss) ? false : true;
	}
	toggleListrssBtnFn();

	$scope.toggleListrss = function(){
		$scope.listrss = ($scope.listrss) ? false : true;
		toggleListrssBtnFn();
	}

	$scope.isListrssMore = function(){
		return ($scope.podcastsList.length > 4 && !$scope.addRss.b) ? true : false;
	};
}]);