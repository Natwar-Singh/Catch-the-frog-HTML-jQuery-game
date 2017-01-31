	var id;
    var time=2000;
	jQuery.fn.settimer=function(){
	    return setInterval(function(){
				time=time-30;
				jQuery("#tap").reposition();
				},time);
	}

	jQuery.fn.reposition=function(){
		var a=Math.random();
		var b=Math.random();
		this.css({"left":a*($(".tap_wrap").width()-100),
			"top":b*($(".tap_wrap").height()-100),"display":"inline-block"})
        clearInterval(id);
		id=this.settimer();
	}
	jQuery(document).ready(function(){$(".tap_wrap").height($(window).height());
		//alert($(window).height());
		setTimeout(function(){
			$("#countdown").fadeOut();
			$("#tap").fadeIn();
		var count=0;
		var timer=60;
		id=jQuery("#tap").settimer();
		jQuery("#tap").click(function(){
		count++;
		$("#tap").attr("src","../sources/dead.gif");clearInterval(id);
		setTimeout(function(){$("#tap").attr("src","../sources/frog.png");
	jQuery("#tap").reposition();},700)
		
		jQuery("#score").html("SCORE:"+count);
			})

      var timer_id=setInterval(function(){
        timer=timer-1;
        jQuery("#timer").html("00:"+("0" +timer).slice(-2));
      },1000);

	setTimeout(function(){ 
		jQuery("#timer").html("00:00");
		clearInterval(id);
		clearInterval(timer_id);
		count=0;
		jQuery("#tap").css({"display":"none"});
		jQuery(".gameover").fadeIn();
		}, 1000*60);
	/*jQuery("#quit").click(function(){
		window.top.close();
		console.log("jvhvhj")
			})*/

	jQuery("#restart").click(function(){
		location.reload();
			})
	

		},5000);
		setTimeout(function(){
            $("#messagge").fadeOut();
            $("#countdown").fadeIn();
		},1000);
		setTimeout(function(){
            $("#countdown").fadeOut();
            $("#countdown").html("2");
            $("#countdown").fadeIn();
		},2000);
		setTimeout(function(){
            $("#countdown").fadeOut();
            $("#countdown").html("1");
            $("#countdown").fadeIn();
		},3000);
		setTimeout(function(){
            $("#countdown").fadeOut();
            $("#countdown").html("START");
            $("#countdown").fadeIn();
		},4000);
		window.onresize = function() {
			$(".tap_wrap").height($(window).height());
        }
	});
