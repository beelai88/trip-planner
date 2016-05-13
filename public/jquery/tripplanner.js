// <script id="dayTemplate" type="text/x-custom-template">
//     <div class="hello">
//     	<div>
//     	</div>
//     </div>
// </script>

$(document).ready(function(){
   // $(".selectItinerary").hide();
   $(".doneDay").hide();

   // var template = $('#dayTemplate').html();

   $(".addItinerary").click(function(){
   	 $(".selectItinerary").show();
   	 $(".noPlans").fadeOut();
   	 // $(".addDay").hide();
   	 // $(".doneDay").show();
   	 $( "#days" ).append('<article><div class="hello">Day<div></div></div></article>');
   });

   $(".menu-button, #naving").hover(function(){
   	 $(".nav-bar > ul > li").fadeIn();
   	 $(".nav-bar").slideDown();
   }, function(){
   	$(".nav-bar > ul > li").fadeOut();
   	$(".nav-bar").slideUp("slow");
   })

   $(".add-button").click(function(){
   	 $(".itinerary").slideToggle();
   })   


	
	$(".hotel").click(function(){
		$(".allHotels").slideToggle("slow");
		// $(".allHotels").slideToggle('2000',"easeInQuint", function () {
		// Animation complete.
		//});
	});

	$(".restaurant").click(function(){
		$(".allRestaurants").slideToggle("slow");
		// $(".allHotels").slideToggle('2000',"easeInQuint", function () {
		// Animation complete.
		//});
	});

	$(".activity").click(function(){
		$(".allActivities").slideToggle("slow");
		// $(".allHotels").slideToggle('2000',"easeInQuint", function () {
		// Animation complete.
		//});
	});	


	$(function() {
		$( "#days" ).accordion();
	});

});