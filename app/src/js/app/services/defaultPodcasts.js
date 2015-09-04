podcastApp.factory('defaultPodcasts', ['$q', function($q){

	var defaultShows = [
		{
			"title":"The Big Web Show",
			"author":"5by5",
			"url":"http://feeds.5by5.tv/bigwebshow",
			"current":true
		},
		{
			"title":"Accidental Tech Podcast",
			"author":"Marco Arment, Casey Liss, John Siracusa",
			"url":"atp.fm/episodes?format=rss",
			"current":false
		}
	];

	return {
		get: defaultShows
	};
}]);