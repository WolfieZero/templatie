Templatie
===============================================================================

Boilerplate for web projects using intelligent styles and Javascript loading.

The project is written to speed up the way I work with websites by providing
the defaults I use regulary.

Uses:

 - [Sass]
 - [Compass]
 - [Grunt]
 - [Normalize] ([normalize.css Compass Plugin])

Out of the box supports:

 - [Bower]
 - [jsmin-sourcemaps]


Install
-------------------------------------------------------------------------------

The install is relatively simple but only needs to be done once for a machine.
All of this should be done in the terminal and prosume you have [Ruby] 
installed and [Node.js].

1. `$ sudo gem update --system`
2. `$ sudo gem install sass compass compass-normalize-plugin`
3. `$ sudo npm install -g grunt-cli`

If you've installed all those already then start from here.

1. `$ cd your/projects/front-end/directory/`
2. `$ git clone https://github.com/WolfieZero/templatie.git ./`
3. `$ npm install`
4. `$ mv -i README.md readme-templatie.md`


Style Methodology - `/style/`
-------------------------------------------------------------------------------

Templatie uses Sass and Compass to create a framework that is easly to develop
and maintain with little work needed by you... well, you still have to code the
bloody thing!

There are there three main directories to need to look to

`sass/lib` is reserved for Sass mixins, variables and other none CSS stuff.
There are some mixins already avaliable to use globally and a config file, but
if you require more mixins then this is the place to put them. 

`sass/scaffold` is for more common elements that are shared in a number of 
areas. You will typically have HTML style elements such at form stuffs, links
and typography.

`sass/module` is where you place these unique elements more relative to class
variables. So if we have the class `.box` with different attributes and such
then we would put that here. They are modal styles.



Script Methodology - `script`
-------------------------------------------------------------------------------

Scripts within Templatie are made fairly open and up to the developer to chose
how they with to use them, but it makes use of various helpers such as Bower
and jsmin-sourcemaps to make development easier, but these aren't requirements
but simply there to make life easier for starting a distrubutable project.

This project is designed to make use of [Bower], a package manager for browser
scripts. This can handle all your additional vendor libraries, be it Javascript
or CSS. Worth checking out if you use external libraries alot (like jQuery).

There is an easy search site to see what's avaliable, [Bower Components].

To use Bowser, make sure you have [Node.js] installed along with [NPM] and in
terminal run:

    $ sudo npm install -g bower

This will allow you to use Bower in any directory on your machine, but for now
`cd` to the root of your Templatie folder and you will be able to install
packages with ease. For example, if you want jQuery just do the following:

    $ bower install jquery

That will run a script to grab and download the latest version of jQuery to
your components folder.

You don't need to keep files in there, you can move them to a more logical area
of your workspace, or you can change where Bower places files by editing the
`.bowerrc` file (it might be hidden) in the Templatie directory.


### jsmin-sourcemap

I keep reading aobut various asynconious Javascript loaders and such like but 
to no avliable I have found any really benificial to me, so I stick with the
minify and concatinate to manage my scripts. Using Grunt and jsmin-sourcemaps,
this process is made easier and allows for more accurate debugging with
sourcemaps.

To use jsmin-sourcemaps you can follow the following code within 
`grunt.initConfig()`:

    'jsmin-sourcemap': {
        'script/dist/main.js': [ // output file 
            'script/one.js', // first file to add to concat
            'script/two.js' // second file to add to concat
        ]
    }

You can create as many of these as you need, so if you want to add a single
file:

    'jsmin-sourcemap': {
        'script/dist/main.js': [
            'script/one.js', 
            'script/two.js'
        ],
        'script/dist/other.js': 'script/three.js'
    }

Then it will create two new files.

This will also automatically create a source map file within the same location
and name as the output file with '.map' appended to the file suffix.

So all you need to do is add the output file to your HTML and the source maps
will be automatically included.


### jQuery

There is a odd thing with jQuery now, there are two version that have the same
syntax but varing support. To understand better check out the jQuery blog
"[jQuery 1.9 final, jQuery 2.0 beta, Migrate final released]". 

If you want to use jQuery then prosuming you have bower installed, run this in
the Templatie directory:

    $ bower install jquery

Then add this line to your HTML document footer:

    <!--[if lt IE 9]><script src="http://code.jquery.com/jquery-1.9.0.min.js"></script><![endif]-->
    <!--[if gte IE 9]><!--><script src="http://code.jquery.com/jquery-2.0.0b1.min.js"></script><!--[endif]-->
    <script>window.jQuery || document.write('<script src="components/jquery/jquery.min.js"><\/script>')</script>

Basically we load the smallest file and most efficiant for supported browsers,
which is version 2, but if it's an un supported browser then we load in 1.9
that isn't most efficiant version but works on the most browser. As a fallback
though, if none of the CDN versions work then we load in 1.9.



Don't Support Older Browsers? (Like IE7 and Less)
-------------------------------------------------------------------------------

A handy little snippet from [HTML5 Boilerplate] if you don't wish to support 
those more suspect browsers.

    <!--[if lt IE 7]>
        <p class="outdated">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
    <![endif]-->



Issues With IE6-8?
-------------------------------------------------------------------------------

As good practice and only using what is required, the conditional HTML
statements aren't include by default as they can sometimes be rarely required.
Instead, I've provided a quick use case here to use if you so need it.

First off add the following to the HTML

    <!--[if lt IE 9]><html class="lt-eie8"><![endif]-->
    <!--[if gt IE 8]><!--><html><!--<![endif]-->

Add in any additional classes you may want to both.

Then follow the following CSS rules to affect the required browsers

    .foo {
        color: black;
    }

    .lte-ie8 .foo {
        color: green;   /* IE8 and older */
        *color: blue;   /* IE7 and older */
        _color: red;    /* IE6 and older */
    }

This way we minimise the number of issues that may occure from using
conditionals high-up in the markup.

For more info read [Mathias Bynens] "[In defense of CSS hacks]"


Links
-------------------------------------------------------------------------------

### Tech
- [Ruby]
- [Node.js]
- [Sass]
- [Grunt]

### Package Managers
- [NPM]
- [Grunt]
- [Bower] / [Bower Components]

### Plugins
- [normalize.css Compass Plugin]
- [grunt-jsmin-sourcemap]

### Blog Posts
- [jQuery 1.9 final, jQuery 2.0 beta, Migrate final released]
- [In defense of CSS hacks]


[Ruby]: http://www.ruby-lang.org/
[Node.js]: http://nodejs.org/
[Sass]: sass-lang.com
[Compass]: http://compass-style.org/
[Normalize]: http://necolas.github.com/normalize.css/
[grunt-jsmin-sourcemap]: https://github.com/twolfson/grunt-jsmin-sourcemap
[Grunt]: http://gruntjs.com/
[normalize.css Compass Plugin]: https://github.com/jzorn/compass-normalize-plugin
[Bower]: http://twitter.github.com/bower/
[Bower Components]: http://sindresorhus.com/bower-components/
[NPM]: https://npmjs.org/
[jQuery 1.9 final, jQuery 2.0 beta, Migrate final released]: http://blog.jquery.com/2013/01/15/jquery-1-9-final-jquery-2-0-beta-migrate-final-released/
[HTML5 Boilerplate]: http://html5boilerplate.com/
[In defense of CSS hacks]: http://mathiasbynens.be/notes/safe-css-hacks
[Mathias Bynens]: http://mathiasbynens.be/