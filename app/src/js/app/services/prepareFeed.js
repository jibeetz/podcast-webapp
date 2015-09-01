podcastApp.factory('prepareFeedService', ['constants', function(constants){

	var imgDefault = constants.imgDefault();

	return {
		getFeed: function(feedData, url) {
			var feed = feedData;
				feed.url = url;
				feed.slug = slug(feed.title);

				if(feed.image.length >= 1){
					for (var i = 0; i < feed.image.length; i++)
						if(feed.image[i].href)
							feed.podcastImg = feed.image[i].href;

					if(!feed.podcastImg)
						feed.podcastImg = imgDefault;

				}else if(feed.image.href){
						feed.podcastImg = feed.image.href;
				}else{
					feed.podcastImg = imgDefault;
				}

				angular.forEach(feed.item, function(item, i){

					feed.item[i].artist = feed.title;
					feed.item[i].id = 'id-' + i;
					feed.item[i].date = Date.parse(feed.item[i].pubDate);

					feed.item[i].url = feed.item[i].enclosure.url;
					var podRouteTemp = feed.item[i].url.split('/'),
						podRoute = podRouteTemp.slice(-1)[0];
					feed.item[i].route = podRoute.split('.')[0];
					feed.item[i].idc = feed.item[i].route + '-' + new Date(feed.item[i].pubDate).getTime();
					if(feed.item[i].encoded)
						feed.item[i].description = feed.item[i].encoded;
					feed.item[i].titleauthor = feed.item[i].title + ' - ' + feed.item[i].artist;
				});

			return feed;
		}
	};
}]);