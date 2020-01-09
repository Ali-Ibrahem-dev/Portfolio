/***************type************/
var typed1 = new Typed("#typed1", {
  strings: ["Creating WebSites","Designing UI/UX"],
  smartBackspace:true // Default value
    ,typeSpeed:56
    ,fadeOut: true
    ,loop: true
    
});

  /*************** removeactive************/
function removeActive()
{
      for(var i=0;i<6;i++)
            {
                $(".nav-ul a").eq(i).removeClass('active');
            }
}

$(document).ready(function() {
    
    /*************** preloader************/
     $("#loading .spinner").fadeOut(2000 , function(){
    
    $("#loading").fadeOut(2000)
})
     /*************** navbarchange************/
                 
    if($(this).scrollTop()>=400){
     $("nav").removeClass('bg-transparent');
          $("nav").addClass('bg-white');
    $("nav").removeClass('navbar-custom');
        
    }
         else{
               $("nav").addClass('bg-transparent');
             $("nav").addClass('navbar-custom');
          $("nav").removeClass('bg-white');
         }
      /***************scrollspy************/
  $('body').scrollspy({target: ".navbar", offset: 50});  
  $(".nav-ul a").click(function(){
    removeActive();
    $(this).addClass('active');
      $(".navbar-toggler").addClass("collapsed");
   $("#navbarSupportedContent").removeClass("collapse show");
   $("#navbarSupportedContent").addClass("collapse");
$("body").animate({scrollTop:$( $(this).attr("href")  ).offset().top  },1000)
})

 
     $(window).scroll(function(){
       if($(this).scrollTop()>=100 && $(this).scrollTop()<400 ){
           $("nav").hide();
       }
         else {$("nav").show();}
    var aTop = $('#home').height();
    if($(this).scrollTop()>=400){
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
    
    /*************** owl carousel************/
   
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
    
    /*************** filterDivs************/
    $(".filter-button").click(function(){
        for(var i=0;i<4;i++)
            {
                $(".filter-button").eq(i).removeClass('active');
            }
            
            $(this).addClass('active');
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
          
            $('.filter').show('1000');
        }
        else
        {
         
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
       
        }
    });

});

/*************** counter************/
$(".num").counterUp({delay:10,time:1000});
 