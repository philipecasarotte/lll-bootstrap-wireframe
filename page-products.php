<?php
/*
Template Name: Products Page
*/
?>

<?php get_header(); ?>
	<header class="breadcrumb-nav-mobile">
		<a href="javascript:history.back();">&laquo; Back</a>
		<h4><?php the_title(); ?></h4>
	</header>
			
	<div id="content" class="clearfix row">

		<div id="main" class="col col-lg-12 clearfix" role="main">
			<?php the_content(); ?>
			
			<div class="row">
				<div class="col col-lg-1 col-md-1 col-sm-1 empty"></div>
				<div class="col col-lg-2 col-md-2 col-sm-6">
					<a href="<?php echo site_url("product/case-maker"); ?>" rel="slide-01">
						<img src="<?php echo get_template_directory_uri(); ?>/images/products/thumb/case-maker.png" alt="Case Maker"/>
						<span>CASE MAKER</span>
					</a>
				</div>
				<div class="col col-lg-2 col-md-2 col-sm-6">                                                                                                
					<a href="<?php echo site_url("product/spin-art"); ?>" rel="slide-02">
						<img src="<?php echo get_template_directory_uri(); ?>/images/products/thumb/spin-art.png" alt="Case Maker"/>
						<span>SPIN ART</span>
					</a>
				</div>	
				<div class="col col-lg-2 col-md-2 col-sm-6">                                                                                                
					<a href="<?php echo site_url("product/decor-tape"); ?>" rel="slide-03">
						<img src="<?php echo get_template_directory_uri(); ?>/images/products/thumb/decor-tape.png" alt="Case Maker"/>
						<span>DÉCOR TAPE</span>
					</a>
				</div>
				<div class="col col-lg-2 col-md-2 col-sm-6">
					<a href="<?php echo site_url("product/needlepoint"); ?>" rel="slide-04">
						<img src="<?php echo get_template_directory_uri(); ?>/images/products/thumb/needlepoint.png" alt="Case Maker"/>
						<span>NEEDLEPOINT</span>
					</a>
				</div>	
				<div class="col col-lg-2 col-md-2 col-sm-6">
					<a href="<?php echo site_url("product/case-maker-refill"); ?>" rel="slide-05">
						<img src="<?php echo get_template_directory_uri(); ?>/images/products/thumb/case-maker-refil.png" alt="Case Maker"/>
						<span><small>CASE MAKER</small> REFILL</span>
					</a>
				</div>
				<div class="col col-lg-1 col-md-1 col-sm-1 empty"></div>					
			</div>
		</div> <!-- end #main -->
	</div> <!-- end #content -->

<?php get_footer(); ?>