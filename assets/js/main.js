$(document).ready(function(){
	$('#meP').hide();
	$('#contactP').hide();
	$('#workP').hide();

	$("#home").click(function(){
		$("#homeP").show(1000);
        $("#workP").hide(1000);
        $("#meP").hide(1000);
    });

    $("#me").click(function(){
    	$("#meP").show(1000);
		$("#workP").hide(1000);
        $("#homeP").hide(1000);
    });

    $("#work").click(function(){
        $("#workP").show(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
    });


});



