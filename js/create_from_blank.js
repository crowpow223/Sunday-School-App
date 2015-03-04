$( document ).ready(function() {
	$( ".modal_question-wrapper" ).hide();
	$( ".modal_module-wrapper" ).hide();
	$( "#john32" ).hide();
	$( "#overcome_discouragement" ).hide();
	$( "#born_again" ).hide();

	$( ".minus" ).click(function() {
		$( ".modal_question-wrapper" ).hide();
		$( ".modal_module-wrapper" ).hide();
		$( ".content" ).toggleClass( "transpentent_background" );
	});
});

function addSection(){
	$( ".modal_question-wrapper" ).toggle();
	$( ".content" ).toggleClass( "transpentent_background" );
}

function addModule(){
	$( ".modal_question-wrapper" ).hide();
	$( ".modal_module-wrapper" ).show();
}

function john32(){
	$( "#john32" ).show();
	$( ".modal_module-wrapper" ).hide();
	$( ".content" ).toggleClass( "transpentent_background" );
}

function overcome_discouragement(){
	$( "#overcome_discouragement" ).show();
	$( ".modal_module-wrapper" ).hide();
	$( ".content" ).toggleClass( "transpentent_background" );
}

function born_again(){
	$( "#born_again" ).show();
	$( ".modal_module-wrapper" ).hide();
	$( ".content" ).toggleClass( "transpentent_background" );
}