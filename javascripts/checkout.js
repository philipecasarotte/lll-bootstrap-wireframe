$(document).ready(function(e) {
	//Billing/Shipping
	$(".radio label").click(function(){
		var sel_value = $(this).find("input:first").attr("value");
		if (sel_value == "same-as-billing") {
			$("#shipping-form").html("");
		}else{
			$("#shipping-form").html($("#billing-form").html(), function(){
				$("#shipping-form label:last, #shipping-form .row:last,").remove();				
			});
		}
	});
	
	//Action Steps
	$(".row.action .btn").click(function(){
		var ele_show = $(this).attr("rel");
		$(".row.step .col.current").removeClass("current");
		$(this).parent().parent().parent().fadeOut("fast", function(){
			$(ele_show).fadeIn("slow");
		});
		$(".row.step .col[rel='"+ele_show+"']").addClass("current");
	});
	$(".row.step .col").click(function(){
		var ele_show = $(this).attr("rel");
		$(".row.step .col.current").removeClass("current");
		$("#step-1, #step-2, #step-3, #step-4").fadeOut("fast", function(){
			$(ele_show).fadeIn("slow");	
		});
		$(".row.step .col[rel='"+ele_show+"']").addClass("current");
	});


});
