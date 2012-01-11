Templatie
=========

Templatie is a template for web project based around the LESS JS library heavily influenced by HTML 5 Boilerplate and Bootstrap Twitter as well a few of my own methods.

The main use case of Templatie is for large sites that want to use a single CSS file for less HTTP queries but still maintain a number of other files. By using the structure in Templatie along with a LESS compiler you can reduce queries for larger sites but also still make them very manageable. 


This doesn't include any major site layout options as I find these elements non-semantic and thus rather not include them but urge developers to develop their own style.

It's also worth noting that it's a good idea to look at all the source code when developing a project as chances are you won't need all the styles that are included.

Templatie is always in development, so it's worth checking regularly and choosing what you would like to update.

Feel free to use in the start of your projects; source of code should be pointed in code itself via comments.


"What? No Version Number?"
--------------------------

For this project, no. The idea is that you use the file in it's current state and look through the code to see what you need and don't need.


Changes
-------

** 11/01/12 **

I've alerted the way the LESS scaffold works so that what ever file is in root
will the the file should be what's compiled. Having the folder lib is reserved for LESS only code that shouldn't be directly compiled to CSS. I'll write better documentation for this in the future.

* Started logging changes
* Improved the Scaffold structure
* Started use of variable and function file to be include where needed (keeping it DRY)


Inspiration & Sources
---------------------
- [HTML 5 Boilerplate](http://html5boilerplate.com/)
- [Bootstrap](http://twitter.github.com/bootstrap/)
- [LESS CSS](http://lesscss.org/)
- [PXtoEM](http://pxtoem.com/)
- [Less Elements](http://lesselements.com/)


Useful Tools (for none node.js users)
-------------------------------------
- [CodeKit](http://incident57.com/codekit/) ( Mac )
- [Less.app](http://incident57.com/less/) ( Mac )
- [SimpLESS](http://wearekiss.com/simpless) ( Mac / Win / Linux )
- [lessc.exe](http://digitalpbk.com/less-css/less-css-compiler-windows-lesscexe) ( Win )
- [lessphp](http://leafo.net/lessphp/) ( PHP )

---

Templatie by [Neil Sweeney](http://wolfiezero.com/) is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).