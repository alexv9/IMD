/* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/$(document).ready(function(){function e(){var e=$(window).width();if(e>=930){$(".dropdown").addClass("desktopbar");$(".has-dropdown").addClass("desktopbar");$(".top-bar").addClass("desktopbar");$(".top-bar-section").addClass("desktopbar");$(".liwrapper").addClass("active")}}function r(){var e=$(window).width(),r=e*n;e<=1333?t.width("1333").height("750"):t.width(e).height(r)}function i(){var e=$(window).width();if(e>=767){var t=$("#mcfooter").css("height");$("#page").css("padding-bottom",t)}else $("#page").css("padding-bottom","0")}$(document).ready(function(){var e=window.pageYOffset,t=$("body"),n=$(window),r=$(".close"),i=$(".open"),s=$("#overlay"),o=$("#popup");$(document).keyup(function(e){e.keyCode===27&&r.trigger("click")});i.click(function(){e=window.pageYOffset;t.css({position:"fixed",top:-e+"px"});s.fadeIn("fast");o.fadeIn("fast");o.addClass("animated fadeInDown");setTimeout(function(){o.removeClass("animated fadeInDown")},1e3)});r.click(function(){t.css({position:"static"});n.scrollTop(e);o.addClass("animated fadeOutDownBig");s.fadeOut("slow");o.fadeOut("fast");setTimeout(function(){o.removeClass("animated fadeOutDownBig")},1e3)})});$(window).width()<767?$(".tabsSmall").css("display","inline-block"):$(".tabsBig").css("display","inline-block");$(window).on("resize",function(){if($(window).width()<767){$(".tabsBig").css("display","none");$(".tabsSmall").css("display","inline-block")}else{$(".tabsBig").css("display","inline-block");$(".tabsSmall").css("display","none")}});$(document).scroll(function(){var e=$(document).scrollTop();if($("#header").hasClass("has-bigstage"))if(e>=600){$("#pagenav").addClass("scrollednav");$("#mcfooter").css("z-index","2")}else{$("#pagenav").removeClass("scrollednav");$("#mcfooter").css("z-index","0")}else if(e>=380){$("#pagenav").addClass("scrollednav");$("#mcfooter").css("z-index","2")}else{$("#pagenav").removeClass("scrollednav");$("#mcfooter").css("z-index","0")}});$(document).ready(e);var t=$("body").find("#stagevideo"),n=9/16;$(document).ready(r);$(window).resize(r);$(window).bind("load",i);$(window).resize(i);$("#slider1").on("after-slide-change.fndtn.orbit",function(e,t){var n=$(".slide-descriptions .slide-description");n.removeClass("active");n.eq(t.slide_number).addClass("active")});$(".menu-icon a").click(function(){var e=$(document).scrollTop();e<=500&&$("#pagenav").toggleClass("scrollednav")})});