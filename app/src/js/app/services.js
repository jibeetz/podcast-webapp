podcastApp.factory('pageTitle', function(){
	var title = '';
	return {
		title: function() {return title;},
		setTitle: function(newTitle) {title = newTitle;}
	};
});

podcastApp.factory('rssService', ['$http', '$q', function($http, $q){

	return {
		getRssFeed: function(url) {
			return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"' + url + '"&format=json');
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
