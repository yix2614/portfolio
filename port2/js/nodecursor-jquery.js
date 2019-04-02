(function($){NodeCursor=function(options){var defaults={cursor:true,node:true,cursor_velocity:1,node_velocity:0.35,native_cursor:'default',element_to_hover:'disable',cursor_class_hover:'disable',node_class_hover:'disable',hide_mode:true,hide_timing:3000}
var settings=$.extend({},defaults,options);var node,cursor;var timer;var request;var playing=false;var cursor_mouseX=0;var cursor_mouseY=0;var node_mouseX=0;var node_mouseY=0;var cursor_xp=0;var cursor_yp=0;var node_xp=0;var node_yp=0;if(settings.cursor===true){cursor=$("#cursor");}
if(settings.node===true){node=$("#node");}
var cursor_width=cursor.width()/2;var cursor_height=cursor.width()/2;var node_width=node.width()/2;var node_height=node.width()/2;$('body').css({'curosr':settings.native_cursor})
function mouseStopped(){playing=false;}
$(document).mousemove(function(e){playing=true;if(settings.cursor===true){cursor_mouseX=e.pageX-cursor_width;cursor_mouseY=e.pageY-cursor_height;}
if(settings.node===true){node_mouseX=e.pageX-node_width;node_mouseY=e.pageY-node_height;}
if(settings.hide_mode===true){hide_cursor();}
function hide_cursor(){clearTimeout(timer);timer=setTimeout(mouseStopped,settings.hide_timing);}});function render(){if(playing===true){if(settings.cursor===true){cursor.addClass('moving');cursor_xp+=((cursor_mouseX-cursor_xp)*settings.cursor_velocity);cursor_yp+=((cursor_mouseY-cursor_yp)*settings.cursor_velocity);cursor.css({left:cursor_xp+'px',top:cursor_yp+'px'});}
if(settings.node===true){node.addClass('moving');node_xp+=((node_mouseX-node_xp)*settings.node_velocity);node_yp+=((node_mouseY-node_yp)*settings.node_velocity);node.css({left:node_xp+'px',top:node_yp+'px'});}}else{if(settings.cursor===true){cursor.removeClass('moving');}
if(settings.node===true){node.removeClass('moving');}
cancelAnimationFrame(request);}
if(settings.element_to_hover!=='disable'){if($(settings.element_to_hover+':hover').length!=0){if(settings.cursor===true){if(settings.cursor_class_hover!=='disable'){cursor.addClass(settings.cursor_class_hover);}}
if(settings.node===true){if(settings.node_class_hover!=='disable'){node.addClass(settings.node_class_hover);}}}else{if(cursor.hasClass(settings.cursor_class_hover)){cursor.removeClass(settings.cursor_class_hover)}
if(node.hasClass(settings.node_class_hover)){node.removeClass(settings.node_class_hover)}}}
request=requestAnimationFrame(render);}
request=requestAnimationFrame(render);window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;}})(jQuery);