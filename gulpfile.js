"use strict";

const { dest, parallel, series, src, watch } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const { deleteAsync } = require("del");
const gulpSass = require("gulp-sass");
const dartSass = require("sass");

const sass = gulpSass(dartSass);

const paths = {
  scss: "docs/assets/scss/**/*.scss",
  scssEntry: "docs/assets/scss/site.scss",
  js: "docs/assets/js/**/*.js",
  images: "docs/assets/images/**/*",
  cssDest: "docs/assets",
  jsDest: "docs/assets/js",
  imagesDest: "docs/assets/images",
};

function clean() {
  return deleteAsync(["docs/assets/site.css", "docs/assets/site.css.map"]);
}

function styles() {
  return src(paths.scssEntry)
    .pipe(
      sass({
        includePaths: ["docs/assets/scss"],
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(paths.cssDest));
}

function scripts() {
  return src(paths.js).pipe(dest(paths.jsDest));
}

function images() {
  return src(paths.images, { encoding: false }).pipe(dest(paths.imagesDest));
}

function watchAssets() {
  watch(paths.scss, styles);
  watch(paths.js, scripts);
  watch(paths.images, images);
}

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = series(clean, parallel(styles, scripts, images));
exports.watch = series(exports.build, watchAssets);
exports.default = exports.build;
