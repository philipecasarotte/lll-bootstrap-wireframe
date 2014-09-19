<?php
/*
$Id$

osCommerce, Open Source E-Commerce Solutions
http://www.oscommerce.com

Copyright (c) 2010 osCommerce

Released under the GNU General Public License
*/

require('includes/application_top.php');

require(DIR_WS_LANGUAGES . $language . '/' . FILENAME_CONTACT_US);

require(DIR_WS_INCLUDES . 'template_top.php');

?>

<link rel="stylesheet" type="text/css" href="<?= TEMPLATE_URI ?>css/jquery.mCustomScrollbar.css" />
<script type="text/javascript" src="<?= TEMPLATE_URI ?>js/jquery.ui.1.8.js"></script>
<script type="text/javascript" src="<?= TEMPLATE_URI ?>js/jquery.easing.js"></script>
<script type="text/javascript" src="<?= TEMPLATE_URI ?>js/jquery.mousewheel.js"></script>
<script src="<?= TEMPLATE_URI ?>js/jquery.mCustomScrollbar.js"></script>
<div class="h5"></div>
<div class="w782 centered">
	<div id="mcs_container">
		<div class="customScrollBox">
			<div class="container">
				<div class="content">
					<ul class="showcaseUl"><?php include DIR_WS_MODULES.'neoteric_showcase.php' ?></ul>
					<div class="clearL"></div>
				</div>
			</div>
			<div class="dragger_container">
				<div class="dragger"></div>
			</div>
		</div>
		<a href="#" class="scrollUpBtn"></a> <a href="#" class="scrollDownBtn"></a>
	</div>
</div>
<script type="text/javascript">
$(window).load(function() {
	$("#mcs_container").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);
});
</script>

<div class="center">
	<div class="showcaseInfo w782 centered cFFF ffVerdana fs14">
		<h1 class="center" style="height:auto;position:relative;text-transform:uppercase;top:0"><?= $categoryTitle ?></h1>
		<div style="height:48px"></div>
		<div style="text-align:center"><?= $categoryDescription ?></div>
	</div>
</div>

<?php

require(DIR_WS_INCLUDES . 'template_bottom.php');

require(DIR_WS_INCLUDES . 'application_bottom.php');

?>