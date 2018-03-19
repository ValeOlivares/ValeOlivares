$(document).ready(function(){
	$('#meP').hide();
	$('#contactP').hide();
	$('#workP').hide();
  $('#skillsP').hide();
  $("#work2P").hide();
  $("#work3P").hide();
  $("#work4P").hide();
  $("#work5P").hide();


	$("#home").click(function(){
		$("#homeP").show(1000);
        $("#workP").hide(1000);
        $("#meP").hide(1000);
        $("#skillsP").hide(1000);
    });

    $("#me").click(function(){
    	$("#meP").show(1000);
		$("#workP").hide(1000);
        $("#homeP").hide(1000);
        $("#contactP").hide(1000);
        $("#skillsP").hide(1000);
    });

    $("#skills").click(function(){
        $("#skillsP").show(1000);
        $("#workP").hide(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
        $("#contactP").hide(1000);
    });

    $("#work").click(function(){
        $("#workP").show(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
        $("#contactP").hide(1000);
        $("#skillsP").hide(1000);
    });


    $("#contact").click(function(){
        $("#contactP").show(1000);
        $("#workP").hide(1000);
        $("#homeP").hide(1000);
        $("#meP").hide(1000);
        $("#skillsP").hide(1000);
    });

    $("#work1").click(function(){
        $("#work1P").show();
        $("#work2P").hide();
        $("#work3P").hide();
        $("#work4P").hide();
        $("#work5P").hide();

    });

    $("#work2").click(function(){
        $("#work2P").show();
        $("#work1P").hide();
        $("#work3P").hide();
        $("#work4P").hide();
        $("#work5P").hide();
    });

    $("#work3").click(function(){
        $("#work3P").show();
        $("#work1P").hide();
        $("#work2P").hide();
        $("#work4P").hide();
        $("#work5P").hide();
    });

    $("#work4").click(function(){
        $("#work4P").show();
        $("#work1P").hide();
        $("#work2P").hide();
        $("#work3P").hide();
        $("#work5P").hide();
    });
     $("#work5").click(function(){
        $("#work4P").hide();
        $("#work1P").hide();
        $("#work2P").hide();
        $("#work3P").hide();
        $("#work5P").show();
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

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
$("#carousel").carousel();