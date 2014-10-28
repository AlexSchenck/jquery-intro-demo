/* app.js
* main script file for our little application
* */

"use strict";

// select all navigation links
var allNavLinks = $('nav a');
var allImgs = $('img');
var allSections = $('section');

function onReady() {
	$('nav').slideUp();
	$('nav').slideDown();
	allSections.hide();
} //onReady

allImgs.hover(function() {
	// console.log($(this));
	$(this).addClass('awesomesauce');
}); // allImgs onClick

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {
	// the cooler jQuery this
	console.log($(this));

	// plain version
	console.log(this);

	// acts on the jQuery object containing this element
	//allSections.fadeIn(6000);

	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000);
}); // allNavLinks onClick

$(onReady);
