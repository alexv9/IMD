/* 

Function: Gerneral page functionality
Version: 0.1
Author: Alexander Vonnemann
Last changes: 2013/12/07 

*/$(document).ready(function(){function a(){var e=$(window).width();if(e>=930){$(".dropdown").addClass("desktopbar");$(".has-dropdown").addClass("desktopbar");$(".top-bar").addClass("desktopbar");$(".top-bar-section").addClass("desktopbar");$(".liwrapper").addClass("active")}}function c(){var e=$(window).width(),t=e*l;e<=1333?f.width("1333").height("750"):f.width(e).height(t)}function h(){var e=$(window).width();if(e>=1025){var t=$("#mcfooter").css("height");$("#page").css("padding-bottom",t)}else $("#page").css("padding-bottom","0")}var e=!1,t=window.pageYOffset,n=$("body"),r=$(window),i=$(".close"),s=$(".open"),o=$("#overlay"),u=$("#popup");$(document).keyup(function(e){e.keyCode===27&&i.trigger("click")});s.click(function(e){e.preventDefault();link=$(this).attr("href");t=window.pageYOffset;n.css({position:"fixed",top:-t+"px"});o.fadeIn("fast");u.fadeIn("fast");$(".popupcontent").load(link);u.addClass("animated fadeInDown");setTimeout(function(){u.removeClass("animated fadeInDown")},1e3)});i.click(function(){n.css({position:"static"});r.scrollTop(t);u.addClass("animated fadeOutDownBig");o.fadeOut("slow");u.fadeOut("fast");setTimeout(function(){u.removeClass("animated fadeOutDownBig")},1e3)});$(window).width()<767?$(".tabsSmall").css("display","inline-block"):$(".tabsBig").css("display","inline-block");$(window).on("resize",function(){if($(window).width()<767){$(".tabsBig").css("display","none");$(".tabsSmall").css("display","inline-block")}else{$(".tabsBig").css("display","inline-block");$(".tabsSmall").css("display","none")}});$(document).scroll(function(){var t=$(document).scrollTop();if(e==0)if($("#header").hasClass("has-bigstage")){t>=660&&$("#pagenav").addClass("scrollednav");t<=0&&$("#pagenav").removeClass("scrollednav")}else t>=380?$("#pagenav").addClass("scrollednav"):$("#pagenav").removeClass("scrollednav")});$(".menu-icon a").click(function(){var t=$(document).scrollTop();if(e==0){$("#pagenav").addClass("scrollednav");e=!0}else{$("#pagenav").removeClass("scrollednav");e=!1}});$(document).ready(a);var f=$("body").find("#stagevideo"),l=9/16;$(document).ready(c);$(window).resize(c);$(window).bind("load",h);$(window).resize(h);$("#slider1").on("after-slide-change.fndtn.orbit",function(e,t){var n=$(".slide-descriptions .slide-description");n.removeClass("active");n.eq(t.slide_number).addClass("active")});$("#pagenav").headroom({offset:0,tolerance:10,classes:{initial:"animated",pinned:"flipInX",unpinned:"fadeOutUp"}})});