# svg-icon-workflow
An SVG icon workflow utilising Gulp as a build tool and providing fallbacks for older browsers

The idea behind this workflow is to show a way on how you can leverage all the awesome features that SVGs have to offer within an Icon system, whilst still providing fallbacks for older browsers.

I've wrote about this in more detail over on [my website](), give it a read if you have time.

## Usage

This repository has been setup to act as a demonstration on how you can use this proposed workflow in your projects. Please use the following guide to learn how to utilise the workflow, then feel free to modify this into your own projects.

#### Setup

1. Clone, fork or download this repository
2. Run `npm install` within the project to install all dependencies.
3. Run `gulp sprites` which will look at the SVGs within `assets/app/icons`, provide PNG fallbacks within `assets/dist/icons/png` and moerge all SVGs together into `assets/dist/icons/svg-sprites.svg`.
4. Load the website in your browser and see the SVGs present within the `index.php` appear. (Take a look in IE8 to see the fallback).

#### In your own projects

You'll need the following to utilise this workflow in your own projects:

- A build tool to merge all SVGs into a sprites file
- A build tool to provide PNG fallbacks
- The `assets/dist/icons/svg-sprites.svg` linked just after the opening `<body>` tag.
- The `assets/app/js/icon-fallback.js` file which should be linked to *after* all SVGs have loaded. Preferably just before the closing `</body>` tag.

## Feedback & Contributions

If you'd like to leave me feedback on the workflow or even better, would consider contributing to it, then please use the [Issues](https://github.com/lukewhitehouse/svg-icon-workflow/issues) or [Pull Requests](https://github.com/lukewhitehouse/svg-icon-workflow/pulls) to help consolidate everything for others to see.

## Credits

Heres a list of awesome people/project which made this workflow possible.

#### Packages
- [gulp](https://github.com/gulpjs/gulp): The build tool for this demonstration.
- [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols): Bundle all SVGs into a single file using the `<symbol>` tag.
- [gulp-svg2png](https://github.com/akoenig/gulp-svg2png): Create PNG fallbacks for each SVG.

#### Inspiration
- [SVG4Everybody](https://github.com/jonathantneal/svg4everybody): Inspiration for this type of workflow and an all around great resource.
- [CSS Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) and [Amelia Bellamy-Royds](https://css-tricks.com/a-complete-guide-to-svg-fallbacks/) - For their awesome blog posts on SVG icon systems and fallbacks.

#### Other
- [Batch Icons](http://adamwhitcroft.com/batch/): Created by Adam Whitcroft, these are used for this demo project and are subject to his own Licensing Agreement.
