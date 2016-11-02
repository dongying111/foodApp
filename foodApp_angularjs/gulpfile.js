var gulp=require('gulp');
var fs=require('fs');
var connect=require('gulp-connect');
var respond=require('gulp-respond');
var clean=require('gulp-clean');



gulp.task('connect',function(){
	return connect.server({
		root:['src','bower_components'],
		port:3006,
		livereload:true,

		middleware:function(){
			return [function(req,res,next){
				console.log("开始操作");
				next();
			},function(req,res){
				var path=req.url.split('?').shift();
				path=path=='/'?'/entry.html':path;
				url='src'+path;
				if(!fs.existsSync(url)){
					url='bower_components'+path;

				}
				console.log(url)
				gulp.src(url)
					.pipe(respond(res))

			}];
		}
	})
})
gulp.task('server',['connect'])