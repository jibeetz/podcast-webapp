podcastApp.factory('constants', [function(){
	return {
		imgDefault : function(){
			return 'img/icon320x320.png';
		}
	};
}]);

podcastApp.factory('rssService', ['$http', function($http){

	return {
		getRssFeed: function(url) {
			return $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D"' + url + '"&format=json');
		}
	};
}]);

podcastApp.service('search', function(){
	var _keyword = {};
	this.str = _keyword;
});