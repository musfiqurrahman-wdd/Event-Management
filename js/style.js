var $ = jQuery.noConflict();
  $(document).ready(function() { 
      $('.carousel-inner').carousel({ interval: 3000, cycle: true });
  });