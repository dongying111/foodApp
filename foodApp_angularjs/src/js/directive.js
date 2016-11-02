function pageTitle($rootScope){
	return {
		restrict : "A",
		link:function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				var tit="美食--";
				if(toState.data && toState.data.title){
					tit+=toState.data.title
				}
				element.text(tit)
			})
		}
	}
}
function reFresh($rootScope){
	return {
		restrict : "A",
		link:function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				setTimeout(function(){
					myScroll = new iScroll('main',{
					 	hScrollbar:false,
						vScrollbar:false,
						onBeforeScrollStart:function(e){
							var tar=e.target || e.srcElement,
								tog=tar.nodeName.toLowerCase();
							if(tog!='input' && tog!='select' && tog!='button' && tog!='textarea'){
								e.preventDefault();
							}
					}

					 });

					document.addEventListener('touchmove', function(e){
		   				 e.preventDefault();
					}, false);

				},100)
			})
		}
	}
}
function addUrl($rootScope){
	return {
		restrict : "A",
		link:function(scope,element){
			$rootScope.$on('$stateChangeStart',function(event,toState){
				scope.cssUrl=toState.data.css;
				scope.jsUrl=toState.data.js;
			})
		}
	}
}
angular.module("app")
		.directive("pageTitle",pageTitle)
		.directive("reFresh",reFresh)
		.directive("addUrl",addUrl)

