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
		if ($("#header").hasClass("has-stage")) {
		if(scroll >=600){	
			$('#pagenav').addClass('scrollednav');
			$('#mcfooter').css('z-index', '2');
		}else{
			$('#pagenav').removeClass('scrollednav');
			$('#mcfooter').css('z-index', '0');
		};} else {
			if(scroll >=380){	
			$('#pagenav').addClass('scrollednav');
			$('#mcfooter').css('z-index', '2');
		}else{
			$('#pagenav').removeClass('scrollednav');
			$('#mcfooter').css('z-index', '0');
		};
		}	
	});

	// Stage Nav subnave 100% desktop version
	function stagenavsub(){
	    var width = $(window).width();

	    if(width >= 930) {
	    	$( ".dropdown" ).addClass("desktopbar");
	    	$( ".has-dropdown" ).addClass("desktopbar");
	    	$( ".top-bar" ).addClass("desktopbar");
			$( ".top-bar-section" ).addClass("desktopbar");
	    	$( ".liwrapper" ).addClass("active");
	    }

	}

	$(document).ready(stagenavsub);

	// Stage sizing 16:9

	var myPlayer = $("body").find("#stagevideo");    // Store the video object
    var aspectRatio = 9/16; // Make up an aspect ratio


    function resizeVideoJS(){
	    var width = $(window).width();
	    var height = width * aspectRatio;

      if(width <= 1333) {
      	myPlayer.width("1333").height("750");
      	//$( "#page.has-stage" ).css( "padding-top", "636px" );
      	//$( "#header.has-stage" ).css( "height", "636px" );
      }else {
      	myPlayer.width(width).height(height);
      	//$( "#page.has-stage" ).css( "padding-top", height );
      	//$( "#header.has-stage" ).css( "height", height );
    }}

    $(document).ready(resizeVideoJS);
    $(window).resize(resizeVideoJS);

    // Mediencampus Footer Height Parallax

    function mcfooterheight(){

    var mcfooterHeight = $("#mcfooter").css('height');
    $( "#page" ).css( "padding-bottom", mcfooterHeight );

	}

	$(window).bind('load', mcfooterheight);
	$(window).resize(mcfooterheight);
	

	// Mobile Nav Klick Background in Stage
	$(".menu-icon a").click(function() {
		var scroll = $(document).scrollTop();
		if(scroll <=500){ 
			$("#pagenav").toggleClass("scrollednav");
		}
	});
	
	
});