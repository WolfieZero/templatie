Change Log
==========

** v2.1.1 - 02/08/12 **

* Removed leaflet.js and map.js
* Changed `img` element in normalize.less to now resize on `max-width: 100%;`
* Moved the changes to CHANGELOG.md
* Made the button group a bit prettier again
* That base.less really couldn't stick, went for layout.less for high-up layout stuffs


** v2.1 - 08/06/12 **

* Added base.less to scaffold to serve as a "go-to" .less file


** v2.0 - 08/06/12 **

* Re-throught the CSS system so it's stripped down to a customised [Normalize.css](http://necolas.github.com/normalize.css/) decleration
* Added some standardised CSS/LESS documentation (based on [CSS_doc](https://github.com/imedo/css_doc) and a number of other languages documentation style)
	* Use `/** ... */` for CSS with each line starting with ` *` (note the space)
	* Use `/// ... //` for LESS with each new line starting with `//` (supresses it from CSS view)
** Will provide a detailed document later on
* Added `additional` folder into the `less` folder that's used for tranferable scripts such as for JS libraries
* Kept the custom dialog boxes 
* Removed a lot of the boilerplate stuff as it is easier to add then to remove


*******************************************************************************


** v1.1.1 - 14/05/12 **

* Moved dialog function to it's own file
* Split out the dialog object to prototype objects for better performance - http://net.tutsplus.com/tutorials/javascript-ajax/stop-nesting-functions-but-not-all-of-them/
* Moved some of the code in index.html around for better performace


** v1.1 - 24/04/12 **

* Removed `functions.js` as it seems pointless
* Removed the `isset()` function as that also seems pointless and annoying when out of scope
* Moved the `console` debugger to the index.html page as we want this globally avaliable
* Made some major changes to the less/element/form.less as it
* Added custom dialog boxes (need more felixablity these days)


** v1.0.3 - 01/03/12 **

* Added CodeKit import statement in main.js
* CSS files compressed using YUI Compressor - http://developer.yahoo.com/yui/compressor/


** v1.0.2 - 28/02/12 **

* Changed the order some tags in the `head` of index.html for a better code flow
* Added detail to the `isset()` function
* Added jQuery check and local file (for check fails)
* Renamed function.js => functions.js
* Renamed image.less => images.less
* Renamed tpyographical.less = > basic.less
* Renamed base.less => init.less
* Removed root slash from humans.txt file path
* Removed author meta tag


** v1.0.1 - 27/02/12 **

* Added some extra definitions to `nav` to remove style by default


** v1.0 - 27/02/12 **

* The first full official release of Templatie.
* Started logging changes
* Officially released as v1
* Improved the Scaffold structure
* Started use of variable and function file to be include where needed (keeping it DRY)
* Change some of the default type styles
* Removed reliance on PHP for JavaScript pulling (simply HTML commenting used)
* Added a JS script to make `console.log` safe for all browser us also globally switch on/off