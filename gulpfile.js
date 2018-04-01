
const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");

const autoprefixer = require('gulp-autoprefixer');

gulp.task("style", () => {
    gulp.src("less/app.less")
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(gulp.dest("build"));
});

gulp.task("html", () => {
    gulp.src("*/**/*.html")
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["html","style"]);

