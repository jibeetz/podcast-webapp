podcastApp.directive('svgIcon', ['svgs', function(svgs) {
	return {
		template: function(elem, attr){
			return svgs.get(attr.svgIcon);
		}
	};
}]);