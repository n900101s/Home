$(function(){

var slides =$('.slideshow .slide').length-1;
var up = 0;
var reference= (slides*-700);

setInterval(function(){
  
 if( reference === up)
  up=0; 
  else
  up = up-700;
  
  $('.container').css('margin-top', up);
  }, 
 2000 );
 });