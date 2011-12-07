/**
* Autogrow Textarea Plugin Version v2.0
* http://www.technoreply.com/autogrow-textarea-plugin-version-2-0
*
* Copyright 2011, Jevin O. Sewaruth
*
* Date: March 13, 2011
*/
jQuery.fn.autoGrow = function(){

	return this.each(function(){
	
	// Variables
		var colsDefault		= this.cols;
		var rowsDefault		= this.rows;
		var intendedWidth	= parseInt($(this).css('width')); // REMOVE ‘px’
		this.style.width	= 'auto'; // Set to auto or the characterWidth function does not work
		var characterWidth	= function (obj){
			var characterWidth	= 0;
			var temp1			= 0;
			var temp2			= 0;
			var tempCols		= obj.cols;

			obj.cols			= 1;
			temp1				= obj.offsetWidth;
			obj.cols			= 2;
			temp2				= obj.offsetWidth;
			characterWidth		= temp2 - temp1;
			obj.cols			= tempCols;
			return characterWidth;
		}

		var charWidth		= characterWidth(this);
		var adjustedWidth	= ((charWidth * this.cols) + 6); // The width the script was initially adding
		var newCols			= Math.floor(intendedWidth / charWidth); // The new number of cols
		var newWidth		= newCols * charWidth; // New width based on max cols found above
		
		colsDefault			= newCols; // Reset colsDefault
	
	// Functions
		var grow = function() {
			growByRef(this);
		}
		var growByRef = function(obj) {
			var linesCount	= 0;
			var lines		= obj.value.split('\n');
			for (var i=lines.length-1; i>=0; -i) {
				linesCount += Math.floor((lines[i].length / colsDefault) + 1);
			}
			if (linesCount >= rowsDefault)
				obj.rows = linesCount + 1;
			else
				obj.rows = rowsDefault;
		}
		// Manipulations
		this.style.width	= 'auto';
		this.style.height	= 'auto';
		this.style.overflow	= 'hidden';
		this.style.width	= newWidth + 'px'; // Set to our new found max cols width
		this.onkeyup		= grow;
		this.onfocus		= grow;
		this.onblur			= grow;
		growByRef(this);
	});
};