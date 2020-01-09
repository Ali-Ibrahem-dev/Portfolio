var typed1 = new Typed("#typed1", {
  strings: ["Creating WebSites","Designing UI/UX"],
  smartBackspace:true // Default value
    ,typeSpeed:56
    ,fadeOut: true
    ,loop: true
    
});









function removeActive()
{
      for(var i=0;i<6;i++)
            {
                $(".nav-ul a").eq(i).removeClass('active');
            }
}
$(document).ready(function() {
    var aTop = $('#home').height();
    if($(this).scrollTop()>=aTop){
     $("nav").removeClass('bg-transparent');
          $("nav").addClass('bg-white');
    $("nav").removeClass('navbar-custom');
    }
         else{
               $("nav").addClass('bg-transparent');
             $("nav").addClass('navbar-custom');
          $("nav").removeClass('bg-white');
          
         }
    
  $('body').scrollspy({target: ".navbar", offset: 50});  
  $("a").click(function(){
    removeActive();
    $(this).addClass('active');
$("body").animate({scrollTop:$( $(this).attr("href")  ).offset().top  },1000)
})
////////////////////////////////////
 
     $(window).scroll(function(){
    var aTop = $('#home').height()-30;
    if($(this).scrollTop()>=aTop){
     $("nav").removeClass('bg-transparent');
          $("nav").addClass('bg-white');
    $("nav").removeClass('navbar-custom');
    }
         else{
               $("nav").addClass('bg-transparent');
             $("nav").addClass('navbar-custom');
          $("nav").removeClass('bg-white');
          
         }
      
         
         
         
  });
    
    
   $('.carousel').carousel({
  interval: 2000
})
     $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
   var owl = $('.owl-carousel');
    owl.trigger('play.owl.autoplay',[2000]);   
    
    $(".filter-button").click(function(){
        for(var i=0;i<4;i++)
            {
                $(".filter-button").eq(i).removeClass('active');
            }
            
            $(this).addClass('active');
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
         
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
       
        }
    });

});
$(".num").counterUp({delay:10,time:1000});
 