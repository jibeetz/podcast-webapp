podcastApp.factory('localStorageHandler', [function(){

	var podcastsList = [];

	return {
		getOnLoad: function(){

			if(!this.test() || !localStorage.feeds || localStorage.feeds === undefined || localStorage.feeds === 'undefined')
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