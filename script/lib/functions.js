/**
 * Console Debugging
 * To use console.log you will need to set the varible `debugging` to `true`
 * before this script is called.
 */
if (typeof console == "undefined" || typeof debugging == "undefined")
	var console = { log: function() {} };
else if (!debugging || typeof console.log == "undefined")
	console.log = function() {};

/**
 * Is Set
 * Checks element exists on a page
 * 
 * @param	element
 * @return	bool
 */
var isset = function (elem) {
	if ( $(elem).length >= 1 ) {
		return true;
	} else {
		return false;
	}
}