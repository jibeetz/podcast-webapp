podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', 'inputBox', 'svgs', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer, inputBox, svgs){

	$scope.currentPodcastText = svgs.get('play');
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
}]);