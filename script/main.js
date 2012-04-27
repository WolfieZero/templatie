function Dialog() {

	/**
	 * Alert Front End (public)
	 * 
	 * @param  {object} obj The options for the alert box
	 * @return {bool} Returns true to show message was sent
	 */
	this.alert = function(obj, callback) {

		if (obj.message === undefined)	obj.message = 'Something happened';
		if (obj.response === undefined)	obj.response = 'Okay';
		if (obj.type === undefined)		obj.type = 'default';

		var html =	'<div id="dialog-wrapper"><div class="dialog-box '+obj.type+'">'+
						'<p>'+obj.message+'</p>'+
						'<p>'+
							'<input type="button" class="btn" value="'+obj.response+'" name="confirm" />'+
						'</p>';

		if (obj.messageBelow !== undefined) html += '<p>'+obj.messageBelow+'</p>';

		html +=	'</div></div>';

		$('body').append(html);

		fixPosition();

		$('.dialog-box').find('.btn').focus().on('click', function(e) {
			e.preventDefault();
			$('#dialog-wrapper').remove();
			if (callback !== undefined) {
				callback();
			}
		});

		window.onresize = function() {
			fixPosition();
		};

	};


	/*************************************************************************/


	/**
	 * Custom ConfirmDialog (public)
	 *
	 * @param  {string} message The question to show
	 * @return {bool} Returns true or false depending on answer
	 */
	this.confirm = function(obj, posCallback, negCallback) {

		if (obj.message === undefined)	obj.positive = 'What do you pick?';
		if (obj.positive === undefined)	obj.positive = 'Yes';
		if (obj.negative === undefined)	obj.negative = 'No';
		if (obj.type === undefined)		obj.type = 'default';

		var html =	'<div id="dialog-wrapper"><div class="dialog-box '+obj.type+'">'+
						'<p>'+obj.message+'</p>'+
						'<p><form>'+
							'<input type="button" class="btn" value="'+obj.positive+'" tabindex="1" />'+
							'<input type="button" class="btn" value="'+obj.negative+'" tabindex="2" />'+
						'</form></p>';

		if (obj.messageBelow !== undefined) html += '<p>'+obj.messageBelow+'</p>';
			
		html += '</div></div>';


		$('body').append(html);
		$('input[tabindex=1]').focus();

		fixPosition();

		// What to do when the user picks an option
		$('.dialog-box').find('.btn').on('click', function(e) {

			e.preventDefault();
			$('#dialog-wrapper').remove();

			if ($(this).val() === obj.positive && posCallback !== undefined) {
				posCallback();
			} else if ($(this).val() === obj.negative && negCallback !== undefined) {
				negCallback();
			}

		});

		window.onresize = function() {
			fixPosition();
		};
			
	};


	/*************************************************************************/


	/**
	 * Fix Position (private)
	 * Fixes the dialog box's position on a page so that it appear central
	 * 
	 * @return {bool} Return true
	 */
	fixPosition = function() {
		// Make it centred correctly
		var dialogBox = $('.dialog-box');
		dialogBox
			.css('left', parseInt( (window.innerWidth / 2) - (dialogBox.width()/2) - 20, 10) +'px')
			.css('top', parseInt( (window.innerHeight / 2) - (dialogBox.height()/2) - 20, 10) +'px');
		return true;
	};

}



/*****************************************************************************/


// Despite being at the end of the document, we want to make sure all DOM
// element are loaded before excuting any JS
$(document).ready(function() {

	dialog = new Dialog();
	
	// Just in case JS is disabled we can style our page accordingly
	$('html').removeClass('no-js').addClass('yes-js');

});