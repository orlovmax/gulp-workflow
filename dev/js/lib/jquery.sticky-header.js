// Stick header to the top of the screen
// Define plugin
;(function ( $, window, document, undefined ) {
	"use strict";

	$.fn.stickyHeader = function(options) {

		// Default settings
		var defaults = {
			isFixedHeader: "is-fixed",
			triggerPosition: 0
		};

		var settings = $.extend( {}, defaults, options );


		return this.each(function(){

			 // Store the object
			var $this = $(this);


			// FUNCTIONS

			// headerPosition function stick nav to top when window scroll top more than
			var headerPosition = function(){
				var windowTop = $(window).scrollTop()

				if (windowTop > settings.triggerPosition) {
					$this.addClass(settings.isFixedHeader);
				} else {
					$this.removeClass(settings.isFixedHeader);
				}
			};


			// EVENTS

			// Call headerPosition function on scroll
			$(window).on("scroll", headerPosition);

		});

	};

}( jQuery, window, document ));


// Call plugin
$(function(){
	$(".js-sticky-header").stickyHeader();
});
