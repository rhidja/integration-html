$(document).ready(function(){

	$(".genres-a").click(function () {

		var data = $(this).attr('data-slug');

		if(data == 'all') {
			$( ".projet" ).show();
		}else{
			$( ".projet" ).hide();
			$( "."+data ).show();
		}
	});


	$(".owl-carousel").owlCarousel({
		margin:10,
	    loop:true,
		navigation:true,
		navigationText: [
		  	'<i class="fa fa-chevron-left" fa-3x aria-hidden="true"></i>',
			'<i class="fa fa-chevron-right" fa-3x aria-hidden="true"></i>',
		],
		pagination:false,
	    autoWidth:true,
	    items:1
	});

	// $("#owl-carousel").owlCarousel({
	// 	loop:true,
	// 	margin:10,
	// 	responsiveClass:true,
	// 	responsiveRefreshRate:10,
	// 	responsive:{
	// 		0:{
	// 			items:1,
	// 			nav:true
	// 		},
	// 		600:{
	// 			items:4,
	// 			nav:true
	// 		}
	// 	}
	// });

/*
	$(".works-carousel").owlCarousel({
		loop:true,
		margin:10,
		dots:true,
		navText:["<",">"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			}
		}
	});*/

});
