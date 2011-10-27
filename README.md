Templatie
=========

Templatie is a template for web project based around the LESS JS library
heavily influenced by HTML 5 Boilerplate and Bootstrap Twitter as well a few of
my own methods.

The main use case of Templatie is for large sites that want to use a single CSS
file for less HTTP queries but still maintain a number of other files. By using
the structure in Templatie along with a LESS compiler you can reduce queries
for larger sites but also still make them very managable.

This doesn't include any major site layout options as I find these elements
non-semantic and thus rather not include them but urge developers to develop
their own style.

It's also worth noting that it's a good idea to look at all the source code
when developing a project as chances are you won't need all the styles that are
included.

Templatie is always in devleopment, so it's worth checking regulary and chosing
what you would like to update.

Feel free to use in the start of your projects; source of code should be
pointed in code itself via comments.





Compiling LESS CSS
------------------

I personally use {LESS}.app to compile my LESS files on the fly; of course you
need to have some sort of local access to the files via working locally or
using Transmit to mount a remote drive (or simmilar app) and be on a mac. If
you don't have local access then simply include these lines in the <head>
portion of the page:

	<link rel="stylesheet/less" type="text/css" href="style/less/base.less">
	<script src="http://lesscss.googlecode.com/files/less-1.1.3.min.js" type="text/javascript"></script>

Although I wouldn't recommend going live with this as it could take some time
to render all the files. There is of course the original method of using
node.js, but I'm not 100% how it affects load times. There is also a PHP method
that I'll add support for later, but it would be worth while to cache the
compiled LESS files when a site is live (though live rendering is fine in
development).





"What? No Version Number?"
--------------------------

For this project, no. The idea is that you use the file in it's current state
and look through the code to see what you need and don't need.





Inspiration & Sources
---------------------
- [HTML 5 Boilerplate](http://html5boilerplate.com/)
- [Bootstrap](http://twitter.github.com/bootstrap/)
- [LESS CSS](http://lesscss.org/)
- [PXtoEM](http://pxtoem.com/)
- [Less Elements](http://lesselements.com/)





---

Templatie by [Neil Sweeney](http://wolfiezero.com/) is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).