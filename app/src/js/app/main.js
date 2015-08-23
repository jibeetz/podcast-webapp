// Utilities

function localStorageTest(){
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}

var slug = function(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
	var to   = "aaaaaeeeeeiiiiooooouuuunc------";
	for (var i=0, l=from.length ; i<l ; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	.replace(/\s+/g, '-') // collapse whitespace and replace by -
	.replace(/-+/g, '-'); // collapse dashes

	return str;
};

//----------------------

var main = {
	listHeight: function(){

		function setSize(){
			var windowHeight = parseInt($(window).height()),
				sectionHeight = parseInt($('section').height() - 105),
				listHeight = (sectionHeight > windowHeight) ? sectionHeight : windowHeight;

			$('#list').css('height', listHeight - 105);
		}
		setTimeout(setSize,100);
	}
};

$(function(){
	main.listHeight();
});

$(window).resize(function(){
	main.listHeight();
});