var playing = true;
var myTimer = setInterval("changeText()", 5000);
var isVisible = false;

function changeText(){	
	if ($(".slider .item.active").is(":last-child")){
		$('.slider .item.active').removeClass("active").fadeOut("fast", function(){
			$('.slider .item:first').fadeIn("slow").addClass("active");			
		});
	}else{
		$('.slider .item.active').removeClass("active").fadeOut("fast", function(){
			$(this).next().fadeIn("slow").addClass("active");
		})
	};
	
	clearInterval(myTimer);
	myTimer = setInterval("changeText()", 5000);
}

var playing_img = true;
var myTimer_img = setInterval("changeImage()", 5000);
var isVisible_img = false;

function changeImage(){	
	if ($(".img-slider img.active").is(":last-child")){
		$('.img-slider img.active').removeClass("active").fadeOut("fast", function(){
			$('.img-slider img:first').fadeIn("slow").addClass("active");			
		});
	}else{
		$('.img-slider img.active').removeClass("active").fadeOut("fast", function(){
			$(this).next().fadeIn("slow").addClass("active");
		})
	};
	
	clearInterval(myTimer_img);
	myTimer_img = setInterval("changeImage()", 5000);
}