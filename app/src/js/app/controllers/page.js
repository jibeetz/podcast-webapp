podcastControllers.controller('pageCtrl', ['$scope', '$location', '$routeParams', 'pageTitle', 'search', 'podcastsPlaylist', 'getFeedService', 'checkCurrentPodcastOnLoad', function ($scope, $location, $routeParams, pageTitle, search, podcastsPlaylist, getFeedService, checkCurrentPodcastOnLoad){

	$scope.pageTitleDefault = 'Podcast Player';
	$scope.pageTitle = pageTitle;
	pageTitle.setPodcastTitle($scope.pageTitleDefault);
	$scope.keyword = search.str;
	$scope.podcastsList = podcastsPlaylist.get();
	$scope.feed = getFeedService.get();

	$scope.isActive = function (id) {
		return id == $routeParams.id;
	};

	var getFeed = function(url){

		if(!url)
			return;

		getFeedService.set(url).then(function(){
			pageTitle.setPodcastTitle($scope.feed.q.title);
			if(!$routeParams.id)
				$location.url('/' +  $scope.feed.q.slug);
		});
	};

	checkCurrentPodcastOnLoad.getMessages($scope.podcastsList).then(getFeed);

	//-------------------------------------

	$scope.toggleAddrssAdd = '<svg class="icon icon-plus"><use xlink:href="assets/icons.svg#icon-plus"></use></svg>';

	$scope.toggleAddrssList = '<svg class="icon icon-numbered-list"><use xlink:href="assets/icons.svg#icon-numbered-list"></use></svg>';

	$scope.addRss = ($scope.podcastsList.length) ? false: true;

	var toggleAddrssBtnFn = function(){
		$scope.toggleAddrssBtn = ($scope.addRss) ? $scope.toggleAddrssList : $scope.toggleAddrssAdd;
	}
	toggleAddrssBtnFn();

	$scope.toggleAddrss = function(){
		$scope.addRss = ($scope.addRss) ? false : true;
		toggleAddrssBtnFn();
	}

	//-------------------------------------

	// $scope.listrss = true;

	// $scope.toggleListrssBtnMore = '<svg class="icon icon-bottom"><use xlink:href="assets/icons.svg#icon-bottom"></use></svg>';

	// $scope.toggleListrssBtnLess = '<svg class="icon icon-top"><use xlink:href="assets/icons.svg#icon-top"></use></svg>';

	// var toggleListrssBtnFn = function(){
	// 	$scope.toggleListrssBtn = ($scope.listrss) ? $scope.toggleListrssBtnMore : $scope.toggleListrssBtnLess;
	// 	$scope.allListrss = ($scope.listrss) ? false : true;
	// }
	// toggleListrssBtnFn();

	// $scope.toggleListrss = function(){
	// 	$scope.listrss = ($scope.listrss) ? false : true;
	// 	toggleListrssBtnFn();
	// }

	// $scope.isListrssMore = function(){
	// 	return ($scope.podcastsList.length > 4 && !$scope.addRss) ? true : false;
	// };

}]);