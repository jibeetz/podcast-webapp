podcastControllers.controller('playlistCtrl', ['$scope', '$location', '$timeout', 'podcastsPlaylist', 'getFeedService', 'pageTitle', 'angularPlayer', function ($scope, $location, $timeout, podcastsPlaylist, getFeedService, pageTitle, angularPlayer){

	$scope.currentPodcastText = '<svg class="icon icon-play"><use xlink:href="assets/icons.svg#icon-play"></use></svg>';
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

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