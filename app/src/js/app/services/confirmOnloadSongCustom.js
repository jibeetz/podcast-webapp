podcastApp.factory('confirmOnloadSongCustom', ['configConstant', 'angularPlayer', function(configConstant, angularPlayer){

	var isEventOnLoad = true;

	var checkLoadingOnload = function(){
		var notificationMarkup = '<div class="notification-box">';
			notificationMarkup += '<h3>Do you want to play the previously playing show ?</h3>';
			notificationMarkup += '<button data-action="true">Yes</button>';
			notificationMarkup += '<button data-action="false">No</button>';
			notificationMarkup += '</div>';
			notificationMarkup += '<div class="overlay"></div>';

		$('body').prepend(notificationMarkup);
		setTimeout(function(){
			$('.notification-box').addClass('open');
			$('.overlay').addClass('open');
		}, 50);
	};

	return {
		get: function(currentId) {
			if(configConstant.loadSongsOnLoadCustom && isEventOnLoad){

				setTimeout(function(){
					checkLoadingOnload();
				}, 200);

				$(document).on('click', '.notification-box button', function(e){
					e.preventDefault();
					var isPlayOnLoad = $(this).attr('data-action');

					if(isPlayOnLoad == 'true'){
						angularPlayer.initPlayTrack(currentId, true, true);
					}else{
						angularPlayer.initPlayTrack(currentId, true, true, true);
					}

					$('.notification-box').removeClass('open');
					$('.overlay').removeClass('open');
				});

				isEventOnLoad = false;
			}
		}
	};
}]);