podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', 'inputBox', 'generateIcon', 'usSpinnerService', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer, inputBox, generateIcon, usSpinnerService){

	$scope.currentPodcastText = generateIcon.get('play');
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.addRss = inputBox.get();

	$scope.playFeed = function(url, update){

		if(!url)
			return;

		if(!update && $scope.feed.q && $scope.feed.q.url == url)
			return;

		usSpinnerService.spin('spinner-input');

		getFeedService.set(url).then(function(res){
			$location.url('/' +  $scope.feed.q.slug);
			podcastsPlaylist.setCurrent($scope.feed.q.url);
			usSpinnerService.stop('spinner-input');
		});
	};

	$scope.removeFeedFromList = function(url){

		podcastsPlaylist.removePodcast(url);

		// If current podcast to be removed
		if($scope.feed.q && $scope.feed.q.url == url){

			$timeout(function(){
				angular.forEach($scope.playlist, function(v, k) {
					if(v.showUrl === url)
						angularPlayer.removeSong(v.id, k);
				});
			});

			delete $scope.feed.q;
			pageTitle.setPodcastTitle($scope.pageTitleDefault);
			pageTitle.setShowTitle('');

			$location.url('/');

		}
	};
}]);