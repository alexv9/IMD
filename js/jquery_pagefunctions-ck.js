/* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/$(document).ready(function(){$("#scrolltocontent").click(function(){$("html, body").animate({scrollTop:$("#content").position().top},"slow")});$(window).width()<767?$(".tabsSmall").css("display","inline-block"):$(".tabsBig").css("display","inline-block");$(window).on("resize",function(){if($(window).width()<767){$(".tabsBig").css("display","none");$(".tabsSmall").css("display","inline-block")}else{$(".tabsBig").css("display","inline-block");$(".tabsSmall").css("display","none")}});$(document).scroll(function(){var e=$(document).scrollTop();if(e>=550){$("#pagenav").css("background-color","black");$("#mcfooter").css("z-index","2")}else{$("#pagenav").css("background-color","transparent");$("#mcfooter").css("z-index","0")}})});