podcastApp.directive('svgIcon', ['generateIcon', function(generateIcon) {
	return {
		template: function(elem, attr){
			return generateIcon.get(attr.svgIcon);
		}
	};
}]);