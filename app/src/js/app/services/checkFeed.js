podcastApp.factory('checkFeedService', [function(){

	return {
		check: function(res, urlFeed) {

			if(res.status != 200)
				return;

			var channel = res.data.query.results.rss.channel;

			if(channel.item.length === 0)
				return;

			var channelSrc = 0;
			for (var i = 0; i < channel.item.length; i++) {
				if(channel.item[i].enclosure.url)
					channelSrc += 1;
			}
			if(channelSrc === 0)
				return;

			checkedFeed = {title: channel.title, author: channel.author, url: urlFeed};

			return checkedFeed;
		}
	};
}]);