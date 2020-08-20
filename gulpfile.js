const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

//optimize images
function imageOptimize() {
  return gulp
    .src("source/images/**/*.+(png|jpg|gif|svg)'")
    .pipe(imagemin({ interlaced: true }))
    .pipe(gulp.dest("dist/images"));
}

//minify js
function js() {
  return gulp
    .src("source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/scripts"));
}

// export tasks
exports.js = js;
exports.imageOptimize = imageOptimize;
