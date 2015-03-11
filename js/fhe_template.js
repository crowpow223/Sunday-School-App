$( document ).ready(function() {
	$( ".add_continent-wrapper" ).hide();
	
	$( ".minus" ).click(function() {
		$( ".edti_add_ward_continent-wrapper" ).hide();
		$( ".add_continent-wrapper" ).hide();
		$( ".content" ).removeClass( "transpentent_background" );
	});
	
	$( ".add_content" ).click(function() {
		$( ".add_continent-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
	
});
