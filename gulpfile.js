
const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const del = require("del");


gulp.task("clean", function() {
    return del.sync("build");
});

gulp.task("style", () => {
    gulp.src("less/app.less")
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(gulp.dest("build"));
});

gulp.task("html", () => {
    gulp.src("*.html")
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["clean","html","style"]);

