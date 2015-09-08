podcastApp.factory('svgs', [function(){

	return {
		get: function(icon) {
			return '<svg class="icon icon-' + icon + '"><use xlink:href="assets/icons.svg#icon-' + icon + '"></use></svg>';
		}
	};
}]);