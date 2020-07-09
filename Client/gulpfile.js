const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
//const rename = require('gulp-rename');

//compile scss into css
function style() {
	// 1. Where is my scss file
	return (
		gulp
			.src("./src/scss/main.scss")
			// 2. Pass that file into the css compiler
			.pipe(
				sass({
					//Minified css
					outputStyle: "compressed",
				}).on("error", sass.logError)
			) //Rename file to .min.css /.pipe(rename({ sufix: '.min'}))// 3. Where do I save the compile css
			.pipe(gulp.dest("./src"))
			// 4. Stream Changes to all browsers
			.pipe(browserSync.stream())
	);
}

function watch() {
	// browserSync.init({
	//     server: {
	//         baseDir: './'
	//     }
	// });

	// If a change happens on files then calls functions to refresh or reload
	gulp.watch("./src/scss/**/*.scss", style);
	//gulp.watch('./*.html').on('change', browserSync.reload);
	//gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
