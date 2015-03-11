$( document ).ready(function() {
	$( ".modal_question-wrapper" ).hide();
	
	$( ".group_button" ).click(function() {
		$( ".modal_question-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
	
	$( ".minus" ).click(function() {
		$( ".modal_question-wrapper" ).toggle();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
});
