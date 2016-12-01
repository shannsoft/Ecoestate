(function($) {
    "use strict";
    $(document).ready(function(){
        $('.domain_search_drop').on("click",function(){
            $(this).toggleClass('rotate')
        });
        
		
		$(".navbar-default").affix({
        offset: {
            top: $('.top_header').height()
        	}
    	});
		


        
        
        /*----------------------------------------------------*/
        /*  Testimonial Slider
        /*----------------------------------------------------*/        
        $('.testimonial_slider').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: [
              "<span class='lnr lnr-arrow-left'></span>",
              "<span class='lnr lnr-arrow-right'></span>"
              ],
            autoplay:true,
            items: 1
        });      
        $('.testimonial_slider2').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            navText: [
              "<span class='lnr lnr-arrow-left'></span>",
              "<span class='lnr lnr-arrow-right'></span>"
              ],
            autoplay:true,            
            responsive:{
                0:{
                    items:1
                },
                800:{
                    items:2
                }
            }
        });
        
        


        
    })
    
})(jQuery)