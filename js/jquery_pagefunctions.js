  /* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/



$(document).ready(function() {



	//marco 15.12.13 
	

	if ($(window).width() < 767) {
		$('.tabsSmall').css('display', 'inline-block');
	}
	else {
		$('.tabsBig').css('display', 'inline-block');
	}

	$(window).on('resize', function() {
		if ($(window).width() < 767) {
			$('.tabsBig').css('display', 'none');
			$('.tabsSmall').css('display', 'inline-block');				
		} else {
			$('.tabsBig').css('display', 'inline-block');
			$('.tabsSmall').css('display', 'none');
		}
	});
	
	$(document).scroll(function() {
		var scroll = $(document).scrollTop();
		if(scroll >=500){	
			$('#pagenav').addClass('scrollednav');
			$('#mcfooter').css('z-index', '2');
		}else{
			$('#pagenav').removeClass('scrollednav');
			$('#mcfooter').css('z-index', '0');
		}	
	});

	// Stage sizing 16:9

	var myPlayer = $("body").find("#stagevideo");    // Store the video object
    var aspectRatio = 9/16; // Make up an aspect ratio


    function resizeVideoJS(){
	    var width = $(window).width();
	    var height = width * aspectRatio;

      if(width <= 1130) {
      	myPlayer.width("1130").height("636");
      	//$( "#page.has-stage" ).css( "padding-top", "636px" );
      	//$( "#header.has-stage" ).css( "height", "636px" );
      }else {
      	myPlayer.width(width).height(height);
      	//$( "#page.has-stage" ).css( "padding-top", height );
      	//$( "#header.has-stage" ).css( "height", height );
    }}

    $(document).ready(resizeVideoJS);
    $(window).resize(resizeVideoJS);
	

	
	
});