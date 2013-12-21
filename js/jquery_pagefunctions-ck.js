/* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/$(document).ready(function(){function n(){var n=$(window).width(),r=n*t;n<=1333?e.width("1333").height("750"):e.width(n).height(r)}function r(){var e=$("#mcfooter").css("height");$("#page").css("padding-bottom",e)}$(window).width()<767?$(".tabsSmall").css("display","inline-block"):$(".tabsBig").css("display","inline-block");$(window).on("resize",function(){if($(window).width()<767){$(".tabsBig").css("display","none");$(".tabsSmall").css("display","inline-block")}else{$(".tabsBig").css("display","inline-block");$(".tabsSmall").css("display","none")}});$(document).scroll(function(){var e=$(document).scrollTop();if(e>=620){$("#pagenav").addClass("scrollednav");$("#mcfooter").css("z-index","2")}else{$("#pagenav").removeClass("scrollednav");$("#mcfooter").css("z-index","0")}});var e=$("body").find("#stagevideo"),t=9/16;$(document).ready(n);$(window).resize(n);$(document).ready(r);$(window).resize(r);$(".menu-icon a").click(function(){var e=$(document).scrollTop();e<=500&&$("#pagenav").toggleClass("scrollednav")})});