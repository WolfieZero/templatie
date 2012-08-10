/**
 * Dialog
 * ======
 *
 * Custom dialog box to use instead of the browser default. Allows more options
 * and better customisation to better suite sites and apps.
 *
 *
 * Usage
 * -----
 *
 * Once jQuery has been loaded the dialog box will initilise itself under the
 * global varaible 'dialog'.
 *
 * Then you can call each function by doing the following commands.
 *
 * For an alert:
 * `dialog.alert({message: 'Something has happened'}, func(){});`
 *
 * For a confirmation:
 * `dialog.confirm({message: 'You sure about this?'}, posFunc(){}, negFunc(){});`
 *
 * Both require a minimum of the message field and a call back function, or two
 * callbacks for the confirmation dialog (one for a positive answer and one for
 * negative).
 *
 *
 * Requires
 * --------
 *
 * - jQuery
 *
 *
 * License
 * -------
 *
 * Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 */


/**
 * Default constructor
 */
Dialog = function() {
	this._body = $('body');
};


/*****************************************************************************/


/**
 * Alert box for the front end
 * @param  {object} obj The options for the alert box
 * @return {bool} Returns true to show message was sent
 */
Dialog.prototype.alert = function(obj, callback) {

	// if `obj` is a string then we need to make it an object again
	if (obj.split) {
		var message = obj;
		obj = {};
		obj.message = message;
	}

	if (obj.message === undefined)	obj.message = 'Something happened';
	if (obj.response === undefined)	obj.response = 'Okay';
	if (obj.type === undefined)		obj.type = 'default';

	var self = this,
		html =	'<div id="dialog-wrapper"><div class="dialog-box '+obj.type+'">'+
					'<p>'+obj.message+'</p>'+
					'<p>'+
						'<input type="button" class="btn" value="'+obj.response+'" name="confirm" />'+
					'</p>';

	if (obj.messageBelow !== undefined) html += '<p>'+obj.messageBelow+'</p>';

	html +=	'</div></div>';

	this._body.append(html);

	// Make sure the box is central
	self.fixPosition();

	$('.dialog-box').find('.btn').focus().on('click', function(e) {
			e.preventDefault();
			$('#dialog-wrapper').remove();
			if (callback !== undefined) {
				callback();
			}
		});

		window.onresize = function() {
			self.fixPosition();
		};

	};


/*****************************************************************************/


/**
 * Confirmation box for the front end
 * @param  {string} message The question to show
 * @return {bool} Returns true or false depending on answer
 */
Dialog.prototype.confirm = function(obj, posCallback, negCallback) {

	if (obj.message === undefined)	obj.positive = 'What do you pick?';
	if (obj.positive === undefined)	obj.positive = 'Yes';
	if (obj.negative === undefined)	obj.negative = 'No';
	if (obj.type === undefined)		obj.type = 'default';

	var self = this,
		html =	'<div id="dialog-wrapper"><div class="dialog-box '+obj.type+'">'+
					'<p>'+obj.message+'</p>'+
					'<p><form>'+
						'<input type="button" class="btn" value="'+obj.positive+'" tabindex="1" />'+
						'<input type="button" class="btn" value="'+obj.negative+'" tabindex="2" />'+
					'</form></p>';

	if (obj.messageBelow !== undefined) html += '<p>'+obj.messageBelow+'</p>';
			
	html += '</div></div>';

	this._body.append(html);

	// Focus on the button by default
	$('input[tabindex=1]').focus();

	// Make sure the box is central
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
		self.fixPosition();
	};
			
};


/*****************************************************************************/


/**
 * Fixes the dialog box's position on a page so that it appear central
 * @return {bool} Return true
 */
Dialog.prototype.fixPosition = function() {
	// Make it centred correctly
	var dialogBox = $('.dialog-box');
	dialogBox
		.css('left', parseInt( (window.innerWidth / 2) - (dialogBox.width()/2) - 20, 10) +'px')
		.css('top', parseInt( (window.innerHeight / 2) - (dialogBox.height()/2) - 20, 10) +'px');
	return true;
};


/*****************************************************************************/