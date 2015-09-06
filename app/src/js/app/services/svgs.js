podcastApp.factory('svgs', [function(){

	return {
		get: function(icon) {
			return '<svg class="icon icon-' + icon + '"><use xlink:href="assets/icons.svg#icon-' + icon + '"></use></svg>';
		}
	};

	// return {
		// getSvgs: function() {
		// 	return $http.get('assets/icons.svg');
		// },
		// manageData: function(){
		// 	this.getSvgs().then(function(data){
		// 		svgObj.d = data;
		// 		json = X2J.parseXml(svgObj.d.data);
		// 		console.log(json);

		// 	});
		// }
	// };
}]);