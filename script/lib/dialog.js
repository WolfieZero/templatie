/**
 * Dialog
 * ============================================================================
 *
 * Custom dialog box to use instead of the browser default. Allows more options
 * and better customisation to better suite sites and apps.
 *
 *
 * Usage
 * ----------------------------------------------------------------------------
 *
 * Once jQuery has been loaded the dialog box will initilise itself under the
 * global varaible 'dialog'.
 *
 * Then you can call each function by doing the following commands.
 *
 * For an alert:
 *   Dialog.alert({message: 'Something has happened'}, func(){});
 *
 * For a confirmation:
 *   Dialog.confirm({message: 'You sure about this?'}, positive(), negative());
 *
 * Both require a minimum of the message field and a call back function, or two
 * callbacks for the confirmation dialog (one for a positive answer and one for
 * negative).
 *
 *
 * Requires
 * ----------------------------------------------------------------------------
 *
 * - jQuery
 *
 *
 * License
 * ----------------------------------------------------------------------------
 *
 * Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 */
/*global $,window*/

var Dialog = {

    /**
     * Assigns the body element locally
     * @type {Object}
     */
	bodyElem: $('body'),
 

    /**
     * Alert box for the front end
     * @param  {Object|String}  obj       Either all variables to custom name or just the message
     * @param  {Object}         callback  Function to call back on button press
     * @return {Object} Returns callback option
     */
	alert: function (obj, callback) {

        'use strict';
        
        var message,
            html;
        
        if (obj === undefined) {
            return {error: 'message not defined'};
        }

		// if `obj` is a string then we need to make it an object again
		if (obj.split) {
			message = obj;
			obj = {};
			obj.message = message;
		}

		if (obj.response === undefined) {
            obj.response = 'OK';
        }
		if (obj.type === undefined) {
            obj.type = 'default';
        }

		html =	'<div id="dialog-wrapper"><div class="dialog-box ' + obj.type + '">' +
				    '<p>' + obj.message + '</p>' +
					'<p>' +
						'<input type="button" class="btn" value="' + obj.response + '" name="confirm" />' +
				    '</p>';

		if (obj.messageBelow !== undefined) {
            html += '<p>' + obj.messageBelow + '</p>';
        }

		html +=	'</div></div>';

		Dialog.bodyElem.append(html);

		// Make sure the box is central
		Dialog.fixPosition();

		$('.dialog-box').find('.btn').focus().on('click', function (e) {
			e.preventDefault();
			$('#dialog-wrapper').remove();
			if (callback !== undefined) {
				callback();
			}
		});

		window.onresize = function () {
			Dialog.fixPosition();
		};
	},


    /**
     * Confirmation box for the front end
     * @param  {Object|String}  obj          Either all variables to custom name or just the message
     * @param  {Object}         posCallback  Function to call back on position aciton
     * @param  {Object}         negCallback  Function to call back on negative action
     * @return {Object} Returns one of the callbacks depending on response
     */
	confirm: function (obj, posCallback, negCallback) {

        'use strict';
        
        var message,
            html;
        
        if (obj === undefined) {
            return {error: 'message not defined'};
        }

        // if `obj` is a string then we need to make it an object again
        if (obj.message === undefined && obj.split) {
            message = obj;
            obj = {};
            obj.message = message;
        }

		if (obj.positive === undefined) {
            obj.positive = 'Yes';
        }
		if (obj.negative === undefined) {
            obj.negative = 'No';
        }
		if (obj.type === undefined) {
            obj.type = 'default';
        }

		html =	'<div id="dialog-wrapper"><div class="dialog-box ' + obj.type + '">' +
					'<p>' + obj.message + '</p>' +
					'<p><form>' +
						'<input type="button" class="btn" value="' + obj.positive + '" tabindex="1" />' +
						'<input type="button" class="btn" value="' + obj.negative + '" tabindex="2" />' +
					'</form></p>';

		if (obj.messageBelow !== undefined) {
            html += '<p>' + obj.messageBelow + '</p>';
        }
				
		html += '</div></div>';

		Dialog.bodyElem.append(html);

		// Focus on the button by default
		$('input[tabindex=1]').focus();

		// Make sure the box is central
		Dialog.fixPosition();

		// What to do when the user picks an option
		$('.dialog-box').find('.btn').on('click', function (e) {

			e.preventDefault();
			$('#dialog-wrapper').remove();

			if ($(this).val() === obj.positive && posCallback !== undefined) {
				posCallback();
			} else if ($(this).val() === obj.negative && negCallback !== undefined) {
				negCallback();
			}

		});

		window.onresize = function () {
			Dialog.fixPosition();
		};
				
	},



    /**
     * Fixes the dialog box's position on a page so that it appear central
     * @return {Boolean} Return true
     */
    fixPosition: function () {

        'use strict';
        
        var dialogBox = $('.dialog-box');

        dialogBox.
            css('left', parseInt((window.innerWidth / 2) - (dialogBox.width() / 2) - 20, 10) + 'px').
            css('top', parseInt((window.innerHeight / 2) - (dialogBox.height() / 2) - 20, 10) + 'px');
        
        return true;
    }

};
