podcastApp.factory('getFeedService', ['rssService', 'prepareFeedService', function(rssService, prepareFeedService){

	var feed = {};

	return {
		get: function(){
			return feed;
		},
		set: function(url){
			return rssService.getRssFeed(url).then(function(res){
				feed.q = res.data.query.results.rss.channel;
				return prepareFeedService.getFeed(res.data.query.results.rss.channel, url);
			});
		}
	};
}]);