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