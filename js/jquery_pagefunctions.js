  /* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/

$(document).ready(function() {

	$('#scrolltocontent').click(function(){
	        $('html, body').animate({scrollTop:$('#content').position().top}, 'slow');
	});

});