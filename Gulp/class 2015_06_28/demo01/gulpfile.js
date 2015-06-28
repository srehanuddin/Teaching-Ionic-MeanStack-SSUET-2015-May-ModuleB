var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');

gulp.task("transpile", function(){
	return gulp.src("src/scripts/**/*.ts")
		.pipe(ts())
		.on("error", function(){
			/*gulp.src('build/')
        		.pipe(clean({force: true}))*/
			this.emit('end');
		})
		.pipe(uglify())
		.pipe(gulp.dest("src/scripts/"));
});

gulp.task("copyhtmlfiles", function(){
	gulp.src("src/**/*.html")
		.pipe(gulp.dest("build/"));
});

gulp.task("copyjsfiles", ["transpile"], function(){
	gulp.src("src/**/*.js")
		.pipe(gulp.dest("build/"));
});

gulp.task('default', ["copyjsfiles", "copyhtmlfiles" ]);


gulp.task("watchmyfiles", function(){
	gulp.watch(["src/scripts/**/*.ts"], ['transpile']);
});
