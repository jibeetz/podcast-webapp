podcastApp.factory('localStorageHandler', ['defaultPodcasts', 'checkFeedService', 'rssService', function(defaultPodcasts, checkFeedService, rssService){

	var podcastsList = [];

	return {
		getOnLoad: function(){

			if(!this.test())
				return podcastsList;

			if(!localStorage.feeds || localStorage.feeds.length <= 2)
				return podcastsList;

			return JSON.parse(localStorage.feeds);
		},
		set: function(data){
			localStorage.setItem('feeds', angular.toJson(data));
		},
		test: function(){
			return localStorageTest();
		}
	};
}]);