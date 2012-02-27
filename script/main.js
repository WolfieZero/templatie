$(document).ready(function() {
	
	console.log('Loading scripts');

	// Just in case JS is disabled we can style our page accordingly
	$('html').removeClass('no-js');

	$('input[type=reset]').click(function () {
		var check = confirm('Are you sure you want to clear the form?');
	});

	if (isset('.msgbox')) {
		$('.msgbox').find('.close').click(function () {
			$(this).parent().fadeOut(500);
		});
	}

});