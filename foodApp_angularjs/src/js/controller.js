function logins($scope,$location,apiService){

	apiService.login("/data/data.json",{key:123,name:"zhangsan"},"post")
			  .success(function(res){
			  		//console.log(res)
			  		$scope.sub2=function(){
			  			console.log(0)
						//console.log($scope.username)
						//console.log($scope.password)
						//console.log(res.data.length)
						for(var i=0;i<res.data.length;i++){
							if($scope.username==res.data[i].username && $scope.password==res.data[i].password){
								alert("登陆成功");
								$location.url('index/my');
								return false;
							}else{
								alert("登录失败");
								$scope.username="";
								$scope.password="";
								return false;
							}
						}
						//$location.url('index/my');
						//跳转页面
					}
			  })

	// apiService.login("http://localhost:3005/login",{key:$scope.username,name:$scope.userpassword},"jsonp")
	// 		  .success(function(res){
	// 		  		//console.log(res)
	// 		  		$scope.sub2=function(){
	// 		  			if(res.code==0){
	// 		  				alert('success');
	// 		  				$location.url('index/my');
	// 		  			}else{
	// 		  				alert('error')
	// 		  			}
	// 					//$location.url('index/my');
	// 					//跳转页面
	// 				}
	// 		  })

	$scope.sub=function(){
		//跳转页面
		$location.url('index');
	}

}
function data($scope,$http){
	//console.log($http)
	$http.get('../data/cai.json')//食材
		 .success(function(res){
		 		$scope.data=res.data;
			})
	$http.get('../data/cake.json')//烘焙
		 .success(function(res){
		 		$scope.data1=res.data;
			})
	 $http.get('../data/chudian.json')//厨电
	 .success(function(res){
	 		$scope.data2=res.data;
		})

}
function swiper(){
	var swiper=new Swiper(".swiper-container",{
		loop:true,
		autoplay:1000

	})
}
function swiper1(){
	var swiper=new Swiper(".swiper-container",{
		/*autoplay:1000,
		loop:false*/
	})
}

angular.module('app')
		.controller('logins',logins)
		.controller('data',data)
		.controller('swiper',swiper)
		.controller('swiper1',swiper1)
