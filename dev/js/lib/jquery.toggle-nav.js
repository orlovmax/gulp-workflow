// Mobile nav toggle
// Define plugin
;(function ( $, window, document, undefined ) {
	"use strict";

	$.fn.toggleNav = function(options) {

		// Default settings
		var defaults = {
			toggleNavIcon: "js-toggle-icon",
			isClosedNav: "is-closed"
		};

		var settings = $.extend( {}, defaults, options );


		return this.each(function(){

			 // Store the object
			var $this = $(this);

			// Plugin variables
			var $toggleNavIcon = $(this).find("." + settings.toggleNavIcon);


			// FUNCTIONS

			// navToggle function toggle opened/closed state of the navbar
			var navToggle = function(e) {
				e.preventDefault();
				$this.toggleClass(settings.isClosedNav);
			};


			// EVENTS

			// Call navToggle function on click
			$toggleNavIcon.on('click', navToggle);

		});

	};

}( jQuery, window, document ));


// Call plugin
$(function(){
	$(".js-toggle-nav").toggleNav();
});
