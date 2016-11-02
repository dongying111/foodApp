function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
	//console.log($stateProvider)
	$urlRouterProvider.otherwise('lead');
	$stateProvider
		.state('index',{
			url:'/index',
			templateUrl:'views/index.html',
			data: {
					title:"index页面",
					css:"css/index.css",
					js:"js/index.js"
			}
			/*resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
							{
								files:['css/index.css','index.js']
							}
						])
				}
			}*/
		})
		.state('lead',{
			url:'/lead',
			templateUrl:'views/lead.html',
			data: {
					title:"lead页面",
					css:"css/upload.css"
			}
			/*resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
							{
								files:['css/upload.css','lead.js']
							}
						])
				}
			}*/

		})
		.state('login',{
			url:'/login',
			templateUrl:'views/login.html',
			data: {
					title:"login页面",
					css:"css/login.css",
					js:"js/login.js"
			},
			controller:'logins'
			/*resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
							{
								files:['css/login.css','./login.js']
							}
						])
				}
			}*/

		})
		.state('welcom',{
			url:'/welcom',
			templateUrl:'views/welcom.html'
		})
		.state('index.find',{
			url:'/find',
			templateUrl:'views/find.html',
			data: {
					title:"find页面",
					css:"css/find.css"
			}
			/*resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
							{
								files:['css/find.css','./find.js']
							}
						])
				}
			}*/
		})

		.state('index.mall',{
			url:'/mall',
			templateUrl:'views/mall.html',
			data: {
					title:"mall页面",
					css:"css/mall.css",
					js:"js/mall.js"
			}
			/*resolve:{
				loadPlugin:function($ocLazyLoad){
					return $ocLazyLoad.load([
							{
								files:['css/mall.css','./mall.js']
							}
						])
				}
			}*/
		})
		.state('cake',{
			url:'/cake',
			templateUrl:'views/cake.html',
			data: {
					title:"cake页面",
					css:"css/cake.css",
					js:"js/cake.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/cake.css','./cake.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('tool',{
			url:'/tool',
			templateUrl:'views/tool.html',
			data: {
					title:"tool页面",
					css:"css/tool.css",
					js:"js/tool.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/tool.css','./tool.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('oil',{
			url:'/oil',
			templateUrl:'views/oil.html',
			data: {
					title:"oil页面",
					css:"css/oil.css",
					js:"js/oil.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/oil.css','./oil.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('all',{
			url:'/all',
			templateUrl:'views/all.html',
			data: {
					title:"all页面",
					css:"css/all.css",
					js:"js/all.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/all.css','./all.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('chudian',{
			url:'/chudian',
			templateUrl:'views/chudian.html',
			data: {
					title:"chudian页面",
					css:"css/chudian.css"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/chudian.css','./chudian.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('cai',{
			url:'/cai',
			templateUrl:'views/cai.html',
			data: {
					title:"cai页面",
					css:"css/cai.css"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/cai.css','./cai.js']
			// 				}
			// 			])
			// 	}
			// }

		})
		.state('index.chat',{
			url:'/chat',
			templateUrl:'views/chat.html',
			data: {
					title:"chat页面",
					css:"css/chat.css",
					js:"js/chat.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/chat.css','./chat.js']
			// 				}
			// 			])
			// 	}
			// }
		})
		.state('in',{
			url:'/in',
			templateUrl:'views/in.html',
			data: {
					title:"in页面",
					css:"css/in.css"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/in.css','./in.js']
			// 				}
			// 			])
			// 	}
			// }
		})
		.state('index.my',{
			url:'/my',
			templateUrl:'views/my.html',
			data: {
					title:"my页面",
					css:"css/my.css",
					js:"js/my.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/my.css','./my.js']
			// 				}
			// 			])
			// 	}
			// }
		})
		.state('good',{
			url:'/good',
			templateUrl:'views/good.html',
			data: {
					title:"good页面",
					css:"css/good.css"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/good.css','./good.js']
			// 				}
			// 			])
			// 	}
			// }
		})
		.state('message',{
			url:'/message',
			templateUrl:'views/message.html',
			data: {
					title:"message页面",
					css:"css/message.css",
					js:"js/message.js"
			}
			// resolve:{
			// 	loadPlugin:function($ocLazyLoad){
			// 		return $ocLazyLoad.load([
			// 				{
			// 					files:['css/message.css','./message.js']
			// 				}
			// 			])
			// 	}
			// }
		})
}


angular.module('app')
		.config(config)