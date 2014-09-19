// JavaScript Document
/*
Author: Murilo Ferreira - www.muriloferreira.com
Allows any video or image element to take 100% of the browser window size, on width and height, not generating margins or borders.
Simply add the class "full-video" to the element of your choice.
*/

// JavaScript Document

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	var device="mobile"
}else{
	var device="desktop"
}

$(document).ready(function(e) {
	//alert("FULLVideo")
	videoSize()
	
});

$(window).resize(function(e) {
	videoSize()
});


function videoSize(){
	
	expandIndex=1.0;
	var winWidth=($("#app").width()+200)*expandIndex;
	var winHeight=($("#app").height()+200)*expandIndex;
	
	
	if((winWidth/16)>(winHeight/9)){ videoHorizontal() }
	if((winWidth/16)<(winHeight/9)){ videoVertical() }
	
	
	function videoVertical(){
		videoHeight=winHeight;
		videoWidth=(videoHeight/9)*16;
		videoMargin=(winWidth-videoWidth)/2
		
		$('.full-video').width(videoWidth);
		$('.full-video').height(videoHeight);
		$('.full-video').css({
			'margin-left':videoMargin,
			'margin-top':0
		});
		
	}	
	
	
	function videoHorizontal(){
		videoWidth=winWidth;
		videoHeight=(winWidth/16)*9
		videoMargin=(winHeight-videoHeight)/2
		
		$('.full-video').width(videoWidth);
		$('.full-video').height(videoHeight);
		$('.full-video').css({
			'margin-top':videoMargin,
			'margin-left':0
		});
	}
}

