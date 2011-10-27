/**
 * Main site scripts 
 */
$(document).ready(function() {
	
	$('body').removeClass('no-js');
	$('textarea').autoGrow();

	log('Welcome to Templatie! Enjoy your stay but please leave the carrot cake alone...');
});


/**
 * Is Set
 * Checks element exists on a page
 * 
 * @param	element
 * @return	bool
 *****************************************************************************/
function isset(elem) {
	if ( $(elem).length >= 1 ) {
		return true;
	} else {
		return false;
	}
}