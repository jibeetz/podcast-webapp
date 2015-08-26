podcastApp.factory('rssService', ['$http', function($http){

	return {
		getRssFeed: function(url) {
			return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"' + url + '"&format=json');
		}
	};
}]);

podcastApp.factory('feedService', [function(){

	return {
		getFeed: function(feedData, url, imgDefault) {
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
				});

			return feed;
		}
	};
}]);

podcastApp.factory('searchFeedService', [function(){

	var fieldsToDeleteSearch = ['encoded', 'link', 'guid', 'enclosure', 'url', 'idc', 'thumbnail', 'explicit', 'pubDate', 'artist', 'author'];

	return {
		getSearchFeed: function(feedData) {

			var searchFeed = feedData;

			angular.forEach(searchFeed.item, function(item, i){

				if(item.description)
					searchFeed.item[i].description = item.description.replace(/<a[^>]*>(.*?)<\/a>/g, "$1");

				for (var j = 0; j < fieldsToDeleteSearch.length - 1; j++) {
					var itemToDelete = fieldsToDeleteSearch[j];
					if(searchFeed.item[i][itemToDelete])
						delete searchFeed.item[i][itemToDelete];
				}
			});

			return searchFeed;
		}
	};
}]);

podcastApp.factory('getUniqueService', [function(){

	return {
		getItem: function(data, id) {
			if(!data)
				return;

			for (var i = 0; i < data.length - 1; i++) {

				if(id == 'latest')
					return data[0];

				if(id == data[i].id)
					return data[i];
			}
		}
	};
}]);

podcastApp.factory('pageTitle', function(){
	var title = '';
	return {
		title: function() {return title;},
		setTitle: function(newTitle) {title = newTitle;}
	};
});

podcastApp.service('search', function(){
	var _keyword = {};
	this.str = _keyword;
});

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

podcastApp.factory('podcastsPlaylist', ['localStorageHandler', function(localStorageHandler){

	var podcastsList = localStorageHandler.getOnLoad();


	return {
		get: function(){

			return podcastsList;
		},
		set: function(data){

			if(!localStorageHandler.test())
				return;

			var isPodcastIn = false;
			angular.forEach(podcastsList, function(item, i){
				if(item.url == data.url)
					isPodcastIn = true;
			});

			if(isPodcastIn)
				return;

			podcastsList.push(data);
			localStorageHandler.set(podcastsList);
		},
		setCurrent: function(feedUrl){
			angular.forEach(podcastsList, function(item, i){
				item.current = (item.url == feedUrl) ? true : false;
			});

			localStorageHandler.set(podcastsList);
		},
		removePodcast: function(url){

			angular.forEach(podcastsList, function(item, i){
				if(item.url == url)
					podcastsList.splice(i,1);
			});

			localStorageHandler.set(podcastsList);
		}
	};
}]);



