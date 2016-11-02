;(function($){
	var myiscroll=new IScroll("#main",{
		click:true
	});
	function init(){
		bindEvent();
	}
	function bindEvent(){
		$("#back").on("click",function(){
			window.history.back();
		})
	}
	init()
})(Zepto)