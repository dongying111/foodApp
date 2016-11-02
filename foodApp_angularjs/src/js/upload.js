;(function($){
	$("ul li").on("tap",function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	$("#back").on("tap",function(){
		window.history.back();
	})
})(Zepto)