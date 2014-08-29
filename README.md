Yudish's MSSL site
===========

Styles for the page are generated with [SASS](http://sass-lang.com/) and compiled to the css folder. To edit the styles, you will need NodeJS and Grunt.

1. Install [Node](http://nodejs.org/)
2. Install Bower. In your terminal/Git Bash, CD to this project's root directory and type:

    npm install
    
3. You're good to go! To compile the SASS, type `grunt sass`, or to watch for changes to the SASS file and automatically recompile, type `grunt watch`.

If you'd like to add images, you can add 'grid' classes to sort them into a grid, or 'float' classes to make text content flow around the image.

To float:

    class="float-l" -> floats an element left
    class="float-r" -> floats an element right

To see grid classes, visit the [gridism](http://cobyism.com/gridism/) website.