podcastControllers.controller('searchCtrl', ['$scope', '$anchorScroll', 'search', 'searchFeedService', function ($scope, $anchorScroll, search, searchFeedService){

	$scope.clearSearch = function(){
		$scope.keyword.str = '';
	};

	$scope.clearSearchToTop = function(){
		$scope.keyword.str = '';
		$anchorScroll();
	};

	$scope.keyword = search.str;

	$scope.$watch('feed.q', function() {
		if($scope.feed.q){
			var searchFeed = angular.copy($scope.feed.q);
			$scope.searchFeed = searchFeedService.getSearchFeed(searchFeed);
		}
	});
}]);