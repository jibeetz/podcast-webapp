podcastApp.factory('svgService', ['$http', function($http){

	var svgObj = {};

	return {
		getSvgs: function() {
			return $http.get('assets/icons.svg');
		},
		manageData: function(){
			this.getSvgs().then(function(data){
				svgObj.d = data;
			});
		},
		get: function(){
			return svgObj;
		}
	};
}]);