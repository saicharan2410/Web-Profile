$(document).ready(function(){
	
	//$('.nameAndDescription h1').slideDown(500);
	$('.nameAndDescription p').show(1000);
	setTimeout(function(){
		$('.navigation').slideDown(1000);}, 1000);


	/*
	 * Code for the Employment Carousel
	 */

	var $ul = $('.slider'); 
  	var $li = $('.slider li.sliderList');
  	var $transition_time = 700;
  	var $num=1;
 	var indent;
   	$(".slider li:first").addClass('active');
	$(".prev").css('visibility','hidden');
	//$('.prev').css({'cursor' : 'auto', 'color' : '#c6c6c6'}).unbind('click');
 
 	// Function when next slide in the carousel has to be seen
 	$(".next").click(function(e){
 		$(".prev").css('visibility','visible');
 		var $i = $ul.find('li.active').index();
  		if($i+1 == $li.length - 1)
  			$(".next").css("visibility","hidden");
  		indent = ($i + $num) * 600;
  		$(".slider li.sliderList").removeClass('active');
		$(".slider li.sliderList").eq($i + $num).addClass('active');
		$ul.animate({"left": -indent }, $transition_time);
	});

 	// Function when previous slide in the carousel has to be seen
	$(".prev").click(function(e){
		var $i = $ul.find('li.active').index();
		if($i - 1 == 0)
  		$(".prev").css("visibility", "hidden");
  		if($i <= $li.length - 1)
  			$(".next").css("visibility","visible");
  		indent = ($i - $num) * 600;
  		$(".slider li.sliderList").removeClass('active');
	  	$(".slider li.sliderList").eq($i - $num).addClass('active');
	  	$ul.animate({"left" : -indent}, $transition_time);
	});

	/*
	 * Carousel Code Ends
	 */


	/*
	 * Code for the Navigation Highlights
	 */

	var htmlbody = $('html,body');
	var links = $('.navigation').find('li');
    var mywindow = $(window);
	var slide = $('.fullscreen');
	
	slide.waypoint(function (event, direction) {

	    dataslide = $(this).attr('data-slide');
		links.removeClass('navActive');
		$('.navigation li[data-slide="' + dataslide + '"]').addClass('navActive');

    });
	
	mywindow.scroll(function () {
		// $('.header').each(function(){
		// 	if($(this).visible(true))
		// 	myHandler($(this));
		// })

        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('navActive');
            $('.navigation li[data-slide="2"]').removeClass('navActive');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
    	var current = $('.navigation').find('li.navActive').index();
		if(dataslide < current)
		{
			htmlbody.animate({
            scrollTop: $('.fullscreen[data-slide="' + dataslide + '"]').position().top - 0.5
        	}, 1500, 'easeInOutQuint');
		}
		else
		{
			htmlbody.animate({
            scrollTop: $('.fullscreen[data-slide="' + dataslide + '"]').position().top
        	}, 1500, 'easeInOutQuint');
		}
	}

	links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    /*
     * Code for Navigation Highlights Ends
     */

    /*
     * Code for Accordian
     */

    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });

    /*
     * Code for Accordion Ends
     */

    /*
     * Code for Custom Animations
     */

     
//Inside DOM-Loaded event
	//$('.aboutHeader').bind('enterviewport', myHandler).bullseye();
	

	
	// function myHandler() {
	// 	alert("true");
	// 	$('.aboutHeader').addClass("animated fadeInLeft");
	// }

	$('.aboutHeader').waypoint(function (event, direction) {

	   $(this).addClass("animated fadeInLeft");

    });

});





