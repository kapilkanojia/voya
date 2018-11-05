$(document).ready(function(){
	$(".search-icon").on("click", function(){
		$(".search-icon, .search-area").toggleClass("show-search")
	});
	$("#btn-search").on("click", function(){
		$(".search-icon, .search-area").toggleClass("show-search")
	});
	
	$(document).on("click", "#checkBox1,#checkBox2", function() {
        if ($("#checkBox1:checked,#checkBox2:checked").length > 0) {
            $(".next").removeClass("disabled");
        } else {
            $(".next").addClass("disabled");
        }
    });
    
	$("#ipCoverageAmount").on("blur", function(){
		$("#storeCoverageAmount").val($(this).val());
	})
	$(".btn.btn-default.prev").hide();
	$(".quote .carousel-inner").hide();
	
$(".loader").hide();
	$('#voya-carousal').bind('slid.bs.carousel', function (e) {
		if($('#voya-carousal .carousel-item.active').hasClass("agree")){
			$(".btn-block").hide();
		}
		if($('#voya-carousal .carousel-item.active').hasClass("firstView")){
			$(".btn.btn-default.prev").hide();
		}
		if($('#voya-carousal .carousel-item.active').hasClass("personal-details")){
			$(".section-coverage-amt #dispCoverageAmount").val($("#storeCoverageAmount").val());
		}
		if($('#voya-carousal .carousel-item.active').hasClass("quote")){
			$(".loader").show();
			setTimeout(function(){ 
				$(".loader").hide();
				$(".quote .carousel-inner").show();
				$(".quote #dispCoverageAmount").html($("#storeCoverageAmount").val());
			}, 1000);
		}
		if($('#voya-carousal .carousel-item.active').hasClass("questionnaire")){
			$(".btn-block").show();
		}
		window.location.href = "#top";
	});
	$('#voya-carousal').bind('slide.bs.carousel', function (e) {
		if($('#voya-carousal .carousel-item.active').hasClass("firstView")){
			$(".btn.btn-default.prev").show();
		}
		if($('#voya-carousal .carousel-item.active').hasClass("agree")){
			
		}
	});
	$(document).on("click", ".agree #agreeCheckBox", function() {
        if ($("#agreeCheckBox:checked").length > 0) {
            $(".get-premium").prop("disabled",false);
        } else {
            $(".get-premium").prop("disabled","disabled");
        }
    });
	$(document).on("click", ".quote #coveragePeriod", function() {
        if ($("#coveragePeriod:checked").length > 0) {
            $(".quote-amt p").html("222.11");
        } else {
            $(".quote-amt p").html("21.22");
        }
    });

    
});
