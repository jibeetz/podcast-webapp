podcastApp.factory('defaultPodcasts', ['$q', function($q){

	var defaultShows = [
		{
			"url":"http://feeds.5by5.tv/bigwebshow",
			"current":true
		},
		{
			"url":"atp.fm/episodes?format=rss",
			"current":false
		}
	];

	return {
		get: defaultShows
	};
}]);