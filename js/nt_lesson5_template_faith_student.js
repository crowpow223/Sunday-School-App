$( document ).ready(function() {
	$( ".change_module-wrapper" ).hide();
	$( ".change_section-wrapper" ).hide();
	$( ".add_module-wrapper" ).hide();
	
	
	$( ".add_content" ).click(function() {
		$( ".add_module-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
	
	$( ".section" ).click(function() {
		$( ".change_module-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});

	$( ".change_section" ).click(function() {
		$( ".change_section-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});

	$( ".minus" ).click(function() {
		$( ".change_module-wrapper" ).hide();
		$( ".change_section-wrapper" ).hide();
		$( ".add_module-wrapper" ).hide();
		$( ".content" ).removeClass( "transpentent_background" );
	});
	
});
