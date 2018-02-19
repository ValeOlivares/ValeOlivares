$(document).ready(function(){
	$('#meP').hide();
	$('#contactP').hide();
	$('#workP').hide();

    $("#work").click(function(){
        $("#workP").show(1000);
        $("#homeP").hide(1000);
    });
});