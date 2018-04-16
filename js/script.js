$(document).ready(function() {
   $('div').mouseenter(function() { //Reacciona el nodo div al pasar el mouse sobre él
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() { //Reacciona el nodo div al quitar el mouse
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() { //Al hacer click sobre él, desaparece
       $(this).toggle(1000);
   }); 
});