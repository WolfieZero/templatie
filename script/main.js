// @codekit-prepend 'lib/dialog.js';
// @codekit-prepend 'lib/map.js';


/*****************************************************************************/


$(document).ready(function() {

	dialog		= new Dialog();
	
	// Just in case JS is disabled we can style our page accordingly
	$('html').removeClass('no-js').addClass('yes-js');

});