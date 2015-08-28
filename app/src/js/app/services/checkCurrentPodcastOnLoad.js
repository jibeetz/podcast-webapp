podcastApp.factory('checkCurrentPodcastOnLoad', ['$q', '$timeout', function($q, $timeout){

	var getMessages = function(podcastsList) {
		var deferred = $q.defer();

		var currentPodcastOnLoad;
		angular.forEach(podcastsList, function(item, i){
			if(item.current === true)
				currentPodcastOnLoad = item;
		});
		var currentPodcastUrl = (currentPodcastOnLoad) ? currentPodcastOnLoad.url : false;

		deferred.resolve(currentPodcastUrl);

		return deferred.promise;
	};

	return {
		getMessages: getMessages
	};
}]);