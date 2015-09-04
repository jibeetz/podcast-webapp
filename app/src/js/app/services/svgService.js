podcastApp.factory('svgService', ['$http', function($http){

	var svgObj = {};

	return {
		getSvgs: function() {
			return $http.get('assets/icons.svg');
		},
		manageData: function(){
			this.getSvgs().then(function(data){
				svgObj.d = data;
				json = X2J.parseXml(svgObj.d.data),
				// console.log(json);

			});
		},
		get: function(){
			return svgObj;
		}
	};
}]);