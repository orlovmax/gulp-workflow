// Mobile nav toggle
// Define plugin
;(function ( $, window, document, undefined ) {
	"use strict";

	$.fn.imgFit = function(options) {

		// Default settings
		var defaults = {
			isVertical: "is-vertical",
			isHorizontal: "is-horizontal"
		};

		var settings = $.extend( {}, defaults, options );


		return this.each(function(){

			 // Store the object
			var $this = $(this);

			// Plugin variables
			var $thumbImg = $this.find("img");


			// FUNCTIONS

			// thumbImgFit function apply specific class to the thumb lement
			var thumbImgFit = function() {
				var thumbAspect = $this.outerWidth() / $this.outerHeight(),
					thumbImgAspect = $thumbImg.outerWidth() / $thumbImg.outerHeight();

					if (thumbImgAspect >= thumbAspect) {
						$this.removeClass(settings.isHorizontal);
						$this.addClass(settings.isVertical);
					} else if (thumbImgAspect < thumbAspect) {
						$this.removeClass(settings.isVertical);
						$this.addClass(settings.isHorizontal);
					}
			};


			// EVENTS

			// Call thumbImgFit function on window load or resize
			$(window).on('load resize', thumbImgFit);

		});

	};

}( jQuery, window, document ));


// Call plugin
$(function(){
	$(".js-img-fit").imgFit();
});
