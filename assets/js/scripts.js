$(document).ready(function() {
	
	$('main section').height($(window).outerHeight());

	$(window).resize(function() {
		$('main').height($(window).outerHeight());
		$('main section').height($(window).outerHeight());
	})
})