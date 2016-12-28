const gulp = require("gulp");
const sass = require("gulp-sass");
const path = require("path");


gulp.task("sass", () => {
    gulp.src(path.join(__dirname, "assets/sass/app.scss"))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest(path.join(__dirname, "public/css")));
});

gulp.task("default", ["sass"], () => {
    gulp.watch(path.join(__dirname, "assets/sass/**/*.scss"), ["sass"]);
});