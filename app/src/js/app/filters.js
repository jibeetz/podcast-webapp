
podcastApp.filter('highlight', function($sce) {
	return function(text, phrase) {
		if(text && phrase && phrase.length > 2)
			text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');

		return $sce.trustAsHtml(text);
	};
});

podcastApp.filter('currentOnTop', function() {

	function CustomOrder(item){
		switch(item) {
			case true:
				return 0;
			case false:
				return 1;
		}
	}

	return function(items) {
		var filtered = [];
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			return (CustomOrder(a.current) > CustomOrder(b.current) ? 1 : -1);
		});

		return filtered;
	};
});

podcastApp.filter('strLimit', ['$filter', function($filter) {
	return function(input, limit) {
		if (!input)
			return;
		if (input.length <= limit) {
			return input;
		}
		return $filter('limitTo')(input, limit) + '...';
	};
}]);

// podcastApp.filter('linkRemover', function() {
// 	return function(text) {
// 		return String(text).replace(/<a[^>]*>(.*?)<\/a>/g, "$1");
// 	}
// });

// podcastApp.filter('carRemover', function() {
// 	return function(text) {
// 		return String(text).replace(/[&\\#,+()$~%.*?↵{}]/g, '');
// 	}
// });
