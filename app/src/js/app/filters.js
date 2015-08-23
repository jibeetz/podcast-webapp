
podcastApp.filter('highlight', function($sce) {
	return function(text, phrase) {
		if(text && phrase && phrase.length > 2)
			text = text.replace(new RegExp('('+phrase+')', 'gi'), '<span class="highlighted">$1</span>');

		return $sce.trustAsHtml(text);
	};
});

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
