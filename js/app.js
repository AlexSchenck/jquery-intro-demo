/* app.js
* main script file for our little application
* */

"use strict";

// select all navigation links
var allNavLinks = $('nav a');
var allImgs = $('img');
var allSections = $('section');

var tile = 'img/sec1.jpg';
var info = 'some other data';

var gameBoard = $('#game-board');

// create and configure a new <img> element
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

// use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); // first param is a key
newTile.data('tileInfo', info); // second param is a value

//add to the board
gameBoard.append(newTile);

// when an image in game-board is clicked
$('#game-board img').click(function() {
	// 'this' refers to the DOM element that raised the event, 
	// wrapped in jQuery to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);
});

function onReady() {
	var array = ['a', 'b', 'c', 'd'];

	_.forEach(array, function(element, index) {
		console.log(element);
		console.log(index);
	});

	_.difference(array, ['c', 'd']);
	var unionArray = _.union(array, ['e', 'f']);
	_.intersection(array, ['b', '']);

	var numArray = [1,2,3,4,5,6,7,8,9,10];

	var evens = _.filter(numArray, function(num) {return 0 == num % 2});
	console.log(evens);

	var shuffledArray = _.shuffle(array);

	console.log(shuffledArray);
	console.log(numArray);
	console.log(array);
	console.log(unionArray);

	var startTime = _.now();
	console.log(startTime);

	// use window.setInterval to create a timer that runs a function every second
	var timer = window.setInterval(function() {
		// compare _.now to start time to get elapsed time
		// Math.floor() rounds down to the nearest integer
		var elapsedSeconds = Math.floor((_.now() - startTime) / 1000);
		console.log(elapsedSeconds);
		$('#game-board h2').css("font-size", elapsedSeconds + 'px');
	}, 1000);

	
	$('.jumbotron').click(function() {
		window.clearInterval(timer);
		$('#game-board').empty();
	});
} // onReady

$('#exit-button').dblclick(function() {
	// show the modal to the world!
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location.href = 'http://courses.washington.edu/info343/morris';
});

allImgs.hover(function() {
	// console.log($(this));
	$(this).addClass('awesomesauce');
}); // allImgs hover

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
}); // allImgs mouseout

allNavLinks.click(function() {
	// the cooler jQuery this
	console.log($(this));

	// plain version
	console.log(this);

	// acts on the jQuery object containing this element
	// allSections.fadeIn(6000);

	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
}); // allNavLinks onClick

$(onReady);
