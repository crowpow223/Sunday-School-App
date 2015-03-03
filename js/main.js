$( document ).ready(function() {
	$( ".modal_home-wrapper" ).hide();

});

function show_menu(){
	$( ".modal_home-wrapper" ).toggle();
}

function goBack() {
    window.history.back()
}