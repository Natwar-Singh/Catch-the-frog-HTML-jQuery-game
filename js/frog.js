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
		this.css({"left":a*1000,"top":b*600,"display":"inline-block"})
        clearInterval(id);
		id=this.settimer();
	}
	jQuery(document).ready(function(){
		var count=0;
		var timer=60;
		id=jQuery("#tap").settimer();
		jQuery("#tap").click(function(){
		count++;
		// jQuery("#tap").css({"display":"none"});
		jQuery("#tap").reposition();
		jQuery("#score").html(count);
			})

      var timer_id=setInterval(function(){
        timer=timer-1;
        jQuery("#timer").html("Remaining time is:"+timer);
      },1000);

	setTimeout(function(){ 
		clearInterval(id);
		clearInterval(timer_id);
		count=0;
		jQuery("#tap").css({"display":"none"});
		jQuery("#restart").fadeIn();
		}, 1000*60);

	jQuery("#restart").click(function(){
		location.reload();
			})
		});
