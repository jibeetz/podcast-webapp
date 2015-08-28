podcastApp.factory('pageTitle', function(){
	var showTitle = '';
	var podcastTitle = '';
	return {
		showTitle: function() {
			return showTitle;
		},
		setShowTitle: function(newShowTitle) {
			showTitle = newShowTitle;
		},
		podcastTitle: function(){
			return podcastTitle;
		},
		setPodcastTitle: function(newPodcastTitle){
			podcastTitle = newPodcastTitle;
		}
	};
});