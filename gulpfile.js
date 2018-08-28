let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("sass", function () {
	gulp.src("./source/scss/styles.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./source/css"))
})

gulp.task("sass:watch", function () {
	gulp.watch("./source/**/*.scss", ["sass"])
})
