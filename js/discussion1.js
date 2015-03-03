$( document ).ready(function() {
	$( ".modal_question-wrapper" ).hide();
	
	$( ".add" ).click(function() {
		$( ".modal_question-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
	
	$( ".minus" ).click(function() {
		$( ".modal_question-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
});
