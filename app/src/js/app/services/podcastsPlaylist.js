podcastApp.factory('podcastsPlaylist', ['localStorageHandler', function(localStorageHandler){

	var podcastsList = localStorageHandler.getOnLoad();

	return {
		get: function(){

			return podcastsList;
		},
		set: function(data){

			if(!localStorageHandler.test())
				return;

			var isPodcastIn = false;
			angular.forEach(podcastsList, function(item, i){
				if(item.url == data.url)
					isPodcastIn = true;
			});

			if(isPodcastIn)
				return;

			podcastsList.push(data);
			localStorageHandler.set(podcastsList);
		},
		setCurrent: function(feedUrl){
			angular.forEach(podcastsList, function(item, i){
				item.current = (item.url == feedUrl) ? true : false;
			});

			localStorageHandler.set(podcastsList);
		},
		removePodcast: function(url){

			angular.forEach(podcastsList, function(item, i){
				if(item.url == url)
					podcastsList.splice(i,1);
			});

			localStorageHandler.set(podcastsList);
		}
	};
}]);
