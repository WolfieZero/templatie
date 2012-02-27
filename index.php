<?php
	
/**
 * email developer
 */
if (isset($_POST['contact'])) {

	$sendMail = false;

	if ($_POST['name']) {
		$msgContact = 'No name given';

	} elseif ($_POST['email']) {
		$msgContact = 'No email given';

	} elseif ($_POST['subject']) {
		$msgContact = 'No subject chosen';

	} elseif (!$_POST['message']) {
		$msgContact = 'No message given';

	} else {
		$sendMail = true;
	}

	if ($sendMail === true) {

		require('mailer.php');

		$mail = new PHPMailer();

		$body = $_POST['message'].'
				<p>---</p>
				<p>
					'.$_POST['name'].' ('.$_POST['email'].')<br />
					'.$_POST['web'].'
				</p>';

		$mail->Subject = '[Templatie] '.$_POST['subject'];
		$mail->AddAddress('templatie@wolfiezero.com', 'Templatie');
		$mail->SetFrom($_POST['email'], $_POST['name']);
		$mail->MsgHTML($body);

	}

	if($sendMail === true && !$mail->Send()) {
		$contactAlert = 'Mail fail: '.$mail->ErrorInfo;
	} else {
		$contactSuccess = 'Message sent!';
	}
}

?><!doctype html>
<!--[if lt IE 7]> <html class="no-js ie lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie lt-ie10 lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie lt-ie10 lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	
	<link rel="dns-prefetch" href="//ajax.googleapis.com" />

	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Templatie - HTML/CSS boilerplate with LESS</title>
	
	<meta name="description" content="HTML/CSS boilerplate for LESS" />
	<meta name="author" content="Neil Sweeney" />

	<!--[if lt IE 9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<link href='http://fonts.googleapis.com/css?family=Ubuntu+Condensed|Gudea:400,700|Ubuntu+Mono|Droid+Serif:400,700' rel='stylesheet' type='text/css'>
	<link rel="author" type="text/plain" href="/humans.txt" />

	<!--[if ! lte IE 6]><!-->
	<?php
		if(!isset($_GET['basic'])) {
			echo '<link rel="stylesheet" type="text/css" href="style/css/main.css" media="screen, projection" />';
			echo '<link rel="stylesheet" href="style/css/typographical.css" media="print" />';
		} else {
			echo '<link rel="stylesheet" href="style/css/typographical.css" />';
		}
	?>
	<!--<![endif]-->

	<!--[if lte IE 6]>
		<link rel="stylesheet" href="style/css/typographical.css" />
	<![endif]-->

</head>
<body>

	
	<header role="banner" id="site-header" class="hproduct">
		<div class="pad">

			<hgroup>
				<h1 id="site-title"><span class="fn">Templatie</span> <small>HTML/CSS boilerplate with LESS</small></h1>
				<h2 class="description">A boilerplate for HTML and CSS using LESS that includes a number of variables and functions that will allow for quicker development of projects and introduce structure to your LESS files.</h2>
			</hgroup>

			<p class="buttons">
				<a href="https://github.com/WolfieZero/templatie/zipball/master" class="btn primary">Download Now</a>
				<a href="https://github.com/WolfieZero/templatie" class="btn">View on Github</a>
			</p>

			<p><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Templatie</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://templatie.info/" property="cc:attributionName" rel="cc:attributionURL">Neil Sweeney</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/wolfiezero/templatie" rel="dct:source">github.com</a>.</p>

		</div>
	</header>

	<div id="main" role="main">
		
		<article class="content" id="about-templatie">
			<div class="pad">

				<h1>About Templatie</h1>

				<p>Templatie is a boilerplate for HTML and CSS using <a href="http://lesscss.org/" rel="externa">LESS</a> that will allow for quicker development of projects. Using LESS along with <em>various varibles</em> and functions you can create to look however you want with minimal setup time; just pick the colours. It also introduces a structure to your LESS files to keep the development file in order so it's easier to manage what goes where.</p>

				<h2>Development &amp; Rendering Speed</h2>

				<p>The main focus with Templatie is speed; so the speed to create a project and the speed to render a page.</p>

				<p>LESS compiles CSS into a single file, but also it only compiles the pages you included and adds only the variables and functions to use; so it doesn't matter how many variables or functions there are in the <code>style/less/lib</code> folder, they are only shown in the CSS file if called (that's why the <code>lib</code> folder is for LESS specific code only). This makes Templatie very quick to develop a site with as you have a number of functions and variables already made and thus able to use with minimal configeration. When it comes to re-aligning a site all you need do is change a few of these variables and edit some of the deeper CSS. </p>

				<p>Templatie encourages the non-essental use of certain classes and <abbr title="Don't Repeat Yourself">DRY</abbr> code, so by using the idea behind <a href="http://necolas.github.com/normalize.css/">normalize.css</a>, Templatie has some base styling done already that interacts with the varibles (but also easily pointed out so you can change them). This will mean that rather than calling, say the <code>p</code> tag to reset it to 0, then calling it again later in the script to apply a style, we call it once to define the default look.</p>

				<p>Although Templatie can be used for rapid production developement, it doens't need to be used like that, it can be used as a guide where you are able to edit the files as you so wish. Thanks to preprocessing, comments are left in the code and can be left there; also, you are able to add rules to the exsiting LESS functions without worry of code having to work out too much as the final CSS doesn't have any calculations in it.</p>

				<h2>Old Browsers &amp; Mobile Support</h2>

				<p>There is no direct support for older browser or mobile devices (the idea of Templatie is to be used as a boilerplate) but it does include a typographical stylesheet, <code>typographical.less</code>, that IE6 and lower uses to style the content (it ignores the <code>~/style/less/scaffold/</code> folder). It could also be used on mobiles if you wish to quickly support those devices, though making a correctly responsive site would be an ideal option.</p>

				<h2>What Isn't Included</h2>

				<p>There is no grid system as people should be prociant in creating a site to their needs; it maybe added at a later date depending on need.</p>

				<p>CSS resets aren't used but rather the idea behind <a href="http://necolas.github.com/normalize.css/">normalize.css</a>, and by providing select groups of HTML elements in each file, you can remove those resets for elements you don't want with ease and add them in easily at a later date.</p>

				<p>There is a lack of style options for Templatie that frameworks may have; this is because although there pre-defined styles included, this is due to the way Templatie uses normalise.css and thus needs styles preset. Also, Templatie is a boilerplate template with a framework for LESS to speed up development, it's not a style framework such as Twitter's bootstrap.</p>

				<h2>Why Use Templatie</h2>

				<p>If you want a style framework with grids and lots of support for making web apps then Bootstrap is an excellent choice. If you want a low down option with no LESS support but plenty of speed opitimisation and best practices included but then HTML5 Boilerplate couldn't be better. But if you are looking to apply a custom style to your site with LESS that makes building said style quickly without any major overhead then Templatie is you dream boat.</p>

				<h2>Out In The Wild</h2>

				<p>The following sites are using a version of Templatie as their boilerplate.</p>

				<ul>
					<li><a href="http://www.petrolprices.com/" rel="external">PetrolPrices.com</a> uses an pre-versioned release of Templatie</li>
				</ul>

			</div>
		</article>

		<article class="content" id="communicate">
			<div class="pad">

				<h1>Communicate</h1>

				<p>You there with the opinions, got something to say? Well now you can with Templatie! If you are using Templatie on your site, spotted a bug or think something should be added or generally wanted to be more friendly to a random stranger then here are your options.</p>

				<form method="post" id="contact-form" action="<?php echo $_SERVER['PHP_SELF']; ?>#contact-form">
					<h2>Email</h2>

					<?php
						if (isset($contactSuccess)) {
							echo '<p class="msgbox success">Success! '.$contactSuccess.'<span class="close">✖</span></p>';
						} elseif (isset($contactAlert)) {
							echo '<p class="msgbox alert">'.$msgContact.'<span class="close">✖</span></p>';
						}
					?>

					<p id="field-contact-name">
						<label for="contact-name">Name*</label>
						<input type="text" name="name" id="contact-name" aria-required="true" required />
					</p>
					<p id="field-contact-email">
						<label for="contact-email">Email*</label>
						<input type="email" name="email" id="contact-email" aria-required="true" required />
					</p>
					<p id="field-contact-web">
						<label for="contact-web">Website</label>
						<input type="text" name="web" id="contact-web" />
					</p>
					<p id="field-contact-subject">
						<label for="contact-subject" class="inline">Subject*</label>
						<select name="subject" id="contact-subject" aria-required="true" required>
							<option></option>
							<option>Issues</option>
							<option>Bug report</option>
							<option>Suggestion</option>
							<option>Praise</option>
							<option>Other</option>
						</select>
					</p>
					<p id="field-contact-message">
						<label for="contact-message">Message*</label>
						<textarea name="message" id="contact-message" rows="5" cols="60" aria-required="true" required></textarea>
					</p>
					<p id="field-contact-btn">
						<small> * denotes required field</small><br />
						<input type="submit" value="Submit" name="contact" class="btn primary" />
						<input type="reset" value="Clear" class="btn"/>
					</p>
				</form>

				<h2>Networks</h2>

				<p class="networks">
					<a href="https://twitter.com/intent/tweet?screen_name=Templatie" class="btn twitter" data-size="large" data-related="WolfieZero,Templatie">
						<span></span> Tweet @Templatie
					</a>
					<a href="https://github.com/WolfieZero/templatie/issues/new" rel="external" class="btn github">
						<span></span> Create Github Issue
					</a>
				</p>

			</div>
		</article>

		<article class="content" id="more-info">
			<div class="pad">

				<h1>More Info</h1>

				<h2>Resources</h2>

				<p>A number of resources have made this project possible; from ideas to "borrowing" code. Please check them out to learn more.</p>

				<ul>
					<li><a href="http://twitter.github.com/bootstrap" rel="external">Bootstrap by Twitter</a></li>
					<li><a href="http://html5boilerplate.com/" rel="external">HTML5 Boilerplate</a></li>
					<li><a href="http://lesscss.org/" rel="external">LESS CSS</a></li>
					<li><a href="http://pxtoem.com/" rel="external">PXtoEM</a></li>
					<li><a href="http://lesselements.com/" rel="external">LESS Elements</a></li>
					<li><a href="http://www.gridlover.net/" rel="external">Gridlover</a></li>
				</ul>

				<section>
					<h2>Developer</h2>

					<article class="vcard">
						<p class="developer"><img src="http://www.gravatar.com/avatar/52c8f3855bd70cec14ec5a356308a0d4" alt="WolfieZero" class="photo" /><span class="fn"><span class="given-name">Neil</span> <span class="family-name">Sweeney</span></span> is commonly known on the interwebs as <a href="http://wolfiezero.com/" rel="external" class="url nickname">WolfieZero</a> is a full-time <span class="role">front-end and UX developer</span> for <a href="http://www.fubra.com/" rel="external" class="org">Fubra</a>. When he's not angryly bashing together pixels you'll find him either playing video games or taming an un-tameable Chinchilla. If funds permit him to, he can also be seen on the slopes snowboarding.</p>
						<ul>
							<li><a href="http://twitter.com/wolfiezero" rel="external" class="twitter">Twitter</a></li>
							<li><a href="http://github.com/wolfiezero" rel="external" class="github">Github</a></li>
							<li><a href="http://dribbble.com/WolfieZero" rel="external" class="dribbble">Dribbble</a></li>
						</ul>
					</article>
				</section>

			</div>
		</article>

	</div>

	<footer id="site-footer">
		<div class="pad">
			<p>&copy; copyright, all rights reserved - hosted by the sexy folk at <a href="http://catn.com/" rel="external">CatN; the cluster hosting company</a><br />
			this content uses <a rel="profile" href="http://microformats.org/profile/hcard">hCard</a> - view the <a href="https://github.com/WolfieZero/templatie/tree/gh-pages" rel="external">full source code</a></p>
		</div>
	</footer>

	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

	<script>
		var debugging = true; // used to called console.log function
	</script>

	<!-- Define jQuery Plugins -->

	<!-- Define our JS libaries -->
	<script src="script/lib/functions.js"></script>

	<!-- Define our CTA script -->
	<script src="script/main.js"></script>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

	<script type="text/javascript">

		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-29530602-1']);
		_gaq.push(['_setDomainName', 'templatie.info']);
		_gaq.push(['_trackPageview']);

		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();

	</script>

</body>
</html>                                                                                                                  