$(document).ready(function(e) {
	//Toggle Product Additional Details
	$("#shop p a").click(function(e){
		e.preventDefault();
		$("#shop p small").toggle("slow");
		return false;
	});
	
	$(".alert").alert();

	//Emulate Form Submission - Newsletter Form	
	$("#footer form").submit(function(e){
		e.preventDefault();
		$("#footer form .alert-success").fadeIn();
		$(this).reset();
		return false;
	});
	
	//Emulate Form Submission - Contact Form
	$("#contact-popup form").submit(function(e){
		e.preventDefault();
		$("#contact-popup form .alert-success").fadeIn();
		$(this).reset();
		return false;
	});
	
	//Site Scroll Nav
	$(".nav.navbar-nav a, footer a").click(function() {
		var this_element = $(this).attr("href");
	    $('html, body').animate({
	        scrollTop: $(this_element).offset().top
	    }, 500);
	});
});

$(window).resize(function(e) {
});

$(window).load(function(e) {
});