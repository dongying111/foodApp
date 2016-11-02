window.onload=function(){

	$(".footer a").live("tap",function(){
		//alert($(this).attr("ui-sref"))
		$(this).addClass('active').siblings().removeClass("active");
	})
}