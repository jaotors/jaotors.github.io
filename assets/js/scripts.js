$(document).ready(function() {

	resize();

	$(window).resize(function() {
		resize();
	})


	function resize() {
		// $('main').css({ height: $(window).outerHeight()});
		$('main section').css({ height: $(window).outerHeight()});
	}
})