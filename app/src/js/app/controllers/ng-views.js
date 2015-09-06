podcastControllers.controller('homeCtrl', ['$scope', 'getUniqueShow', 'pageTitle', function ($scope, getUniqueShow, pageTitle){

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			$scope.podcast = getUniqueShow.getItem($scope.feed.q.item, 'latest');
			pageTitle.setPodcastTitle($scope.feed.q.title);
			pageTitle.setShowTitle('');
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