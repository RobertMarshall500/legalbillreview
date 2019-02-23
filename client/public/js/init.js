$(document).ready(function(){

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
  
      $(document).ready(function(){
        $('.modal').modal();
        $('.modal').close();
      });
              
    }); // end of document ready
  })(jQuery); // end of jQuery name space
});
  