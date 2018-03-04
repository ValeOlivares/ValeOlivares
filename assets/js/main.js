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
        $("#contactP").hide(1000);
    });

    $("#work").click(function(){
        $("#workP").show(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
        $("#contactP").hide(1000);
    });

    $("#contact").click(function(){
        $("#contactP").show(1000);
        $("#workP").hide(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
    });
    // Wrap every letter in a span
    $('.ml12').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: function(el, i) {
          return 100 + 30 * i;
        }
      });


});



