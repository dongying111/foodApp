;(function($){
	var myscroll=new IScroll("#main",{
		click:true
	})
	$("#back").on("tap",function(){
		window.history.back();
	})
})(Zepto)

