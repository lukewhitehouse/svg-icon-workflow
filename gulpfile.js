/**
 * Require Gulp Packages
 */

var gulp       = require('gulp'),
    svg2png    = require('gulp-svg2png'),
    svgSymbols = require('gulp-svg-symbols');


/**
 * SVG -> PNG fallback task
 */

// Create new task
gulp.task('svg2png', function () {

    // Define source files
    return gulp.src( 'assets/app/icons/**/*.svg' )

        // Run the svg2png npm module on these source files
        .pipe( svg2png() )

        // Define where the response is distributed to
        .pipe( gulp.dest( 'assets/dist/icons/png/' ) )
});


/**
 * Sprites task
 */

// Create new task and make svg2png task run before it
gulp.task('sprites', ['svg2png'], function () {

    // Define source files
    return gulp.src( 'assets/app/icons/**/*.svg' )

        // Run the svg-symbols module, whilst prefixing the created classnames
        .pipe(
            plugins.svgSymbols({
                className: '.icon--%f',
                title: false
            })
        )

        // Define where the respond is distributed to
        .pipe( gulp.dest( 'assets/dist/icons/' ) )
});
