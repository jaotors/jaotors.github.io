$(document).ready(function() {

	resize();
	var click = true,
		startG;

	$(window).resize(function() {
		resize();
	});

	$('.btn-start').click(function(e) {
		e.preventDefault();
		
		if(click == true) {
			$(this).text('stop');
			startGame(click);
			click = false;
		} else {
			$(this).text('start');
			startGame(click);
			click = true;
		}
	});

	function startGame(click) {
		// var arrColor = [['#e65765', 'red'], ['#4e73eb', 'blue'], ['#d7d05e', 'yellow'], ['#60cc8e', 'green'], ['#606060', 'black'], ['#8d6ef0', 'purple']];
		var arrDeck = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

		if(click == true) {
			startG = setInterval(function() {
				// $('.box-list li:first').css({
				// 	'background-color' : arrColor[getRandom()][0]
				// });

				// $('.box-list li:nth-child(2)').css({
				// 	'background-color' : arrColor[getRandom()][0]
				// });

				// $('.box-list li:last').css({
				// 	'background-color' : arrColor[getRandom()][0]
				// });

				$('.box-list li:first').text(arrDeck[getRandom()]);
				$('.box-list li:last').text(arrDeck[getRandom()]);

			}, 100);
		} else {
			clearInterval(startG);
		}
	}


	function getRandom() {
		var number = Math.floor(Math.random() * (13));
		console.log(number);
		return number;
	}

	function checkColor(elem) {
		var check = elem.css('background-color'),
			check = check.replace('rgb', ''),
			check = check.replace('(', ''),
			check = check.replace(')', ''),
			check = check.split(',');

			for (var i = 0; i < check.length; i++) {check[i] = parseInt(check[i])}
			check = rgbToHex(check[0], check[1], check[2]);

		return check;



	}

	/* from stackoverflow */
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	/* end */

	function resize() {
		$('main section').css({ height: $(window).outerHeight()});
	}
})