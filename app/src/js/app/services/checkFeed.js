podcastApp.factory('checkFeedService', [function(){

	return {
		check: function(res, urlFeed) {

			if(res.status != 200)
				return;

			var channel = res.data.query.results.rss.channel;

			if(!channel.item)
				return;

			checkedFeed = {title: channel.title, author: channel.author, url: urlFeed};

			return checkedFeed;
		}
	};
}]);