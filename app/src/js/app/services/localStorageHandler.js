podcastApp.factory('localStorageHandler', ['defaultPodcasts', function(defaultPodcasts){

	var podcastsList = [];

	return {
		getOnLoad: function(){

			if(!this.test())
				return podcastsList;

			if(!localStorage.feeds || localStorage.feeds.length <= 2)
				localStorage.setItem('feeds', angular.toJson(defaultPodcasts.get));

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