podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueShow', 'pageTitle', 'angularPlayer', 'confirmOnloadSongCustom', function ($scope, getUniqueShow, pageTitle, angularPlayer, confirmOnloadSongCustom){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShow.getItem($scope.feed.q.item, 'latest');
			pageTitle.setPodcastTitle($scope.feed.q.title);
			pageTitle.setShowTitle('');
			angularPlayer.onLoadSongs(confirmOnloadSongCustom.get);
		}
	});
}]);

podcastControllers.controller('podcastCtrl', ['$scope', '$routeParams', 'getUniqueShow', 'pageTitle', function ($scope, $routeParams, getUniqueShow, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShow.getItem($scope.feed.q.item, $routeParams.id);
			pageTitle.setShowTitle($scope.podcast.title  + ' - ');
		}
	});
}]);