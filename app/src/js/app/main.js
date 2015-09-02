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

svg4everybody();

//----------------------

var main = {
	listHeight: function(){
		var windowHeight = parseInt($(window).height());
		$('aside, section').css('height', windowHeight - 145);
	},
	events: function(){
		$(document).on({
			mouseenter: function () {
				$(this).find('button').show();
			},
			mouseleave: function () {
				$(this).find('button').hide();
			}
		}, 'aside li');
	}
};

$(function(){
	main.listHeight();
	// main.events();
});

$(window).resize(function(){
	main.listHeight();
});