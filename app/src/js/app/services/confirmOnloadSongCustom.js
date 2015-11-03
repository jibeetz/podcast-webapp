podcastApp.factory('confirmOnloadSongCustom', ['configConstant', function(configConstant){

	var ifOnLoad = true;

	var checkLoadingOnload = function(){
		var notificationMarkup = '<div class="notification-box">';
			notificationMarkup += '<h3>Play the previously playing show ?</h3>';
			notificationMarkup += '<button class="">Yes</button>';
			notificationMarkup += '<button class="">No</button>';
			notificationMarkup += '</div>';

		$('body').prepend(notificationMarkup);
		setTimeout(function(){
			$('.notification-box').addClass('open');
		}, 50);

		return true;
	};

	return {
		get: function(initTrack) {
			if(configConstant.loadSongsOnLoadCustom && ifOnLoad){

				setTimeout(function(){
					var isLoadingOnload = checkLoadingOnload();
					if(confirm('Do you want ?'))
					if(isLoadingOnload)
						initTrack();
				}, 200);
				ifOnLoad = false;
			}
		}
	};
}]);