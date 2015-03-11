$( document ).ready(function() {
	$( ".modal_home-wrapper" ).hide();
	$(".modal_home-wrapper").html('<form action="settings.html"><input type="submit" value="Settings" class="test-button btn"></form><form action="../index.html"><input type="submit" value="Sign Out" class="test-button btn"></form><form action="create_account2.html"><input type="submit" value="Add Group" class="test-button btn"></form><form action="create_group.html"><input type="submit" value="Create Group" class="test-button btn"></form><form action="create_lesson1.html"><input type="submit" value="Create Lesson" class="test-button btn"></form><form action="find_lesson.html"><input type="submit" value="Find Lesson" class="test-button btn"></form>'); 
});

function show_menu(){
	$( ".modal_home-wrapper" ).toggle();
}

function goBack() {
    window.history.back()
}