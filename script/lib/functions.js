/**
 * Is Set
 * Checks element exists on a page
 * 
 * @param	element
 * @return	bool
 */
function isset(elem) {
	if ( $(elem).length >= 1 ) {
		return true;
	} else {
		return false;
	}
}