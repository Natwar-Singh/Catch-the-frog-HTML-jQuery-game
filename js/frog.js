var id;
var time=2000;
jQuery.fn.settimer=function()
{
  return setInterval(function(){
  time=time-30;
  jQuery("#tap").reposition();
  },time);
}

jQuery.fn.reposition=function()
{
  var a=Math.random();
  var b=Math.random();
  var x=a*($(".tap_wrap").width()-150);
  var y=b*($(".tap_wrap").height()-150);
  if (y<50)
    {
      y=50;
    }
  this.css({"left":x,"top":y,"display":"inline-block"})
  $('#frogaudio')[0].play();
  clearInterval(id);
  id=this.settimer();
}
jQuery(document).ready(function(){
  $(".tap_wrap").height($(window).height());
  setTimeout(function(){
    $("#countdown").fadeOut();
    $("#tap").fadeIn();
    var count=0;
    var timer=60;
    id=jQuery("#tap").settimer();
    jQuery("#tap").click(function()
    {
      count++;
      $("#tap").attr("src","/frog/sources/dead.png");
      $(".tap_wrap").css("cursor","url('/frog/sources/punchclick.png'),auto");
      $("#tap").css("cursor","url('/frog/sources/punchclick.png'),auto");
      clearInterval(id);
      $('#chatAudio')[0].play();
      setTimeout(function(){
        $("#tap").attr("src","/frog/sources/frog.png");
        $(".tap_wrap").css("cursor","url('/frog/sources/punch.png'),auto");
        $("#tap").css("cursor","url('/frog/sources/punch.png'),auto");
        jQuery("#tap").reposition();},300)
		
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
      $(".gameover").css("cursor","default");
      jQuery("#tap").css({"display":"none"});
      jQuery(".gameover").fadeIn();
      }, 1000*60);
    jQuery("#restart").click(function()
    {
      location.reload();
    })
	$('.tap_wrap').click(function(e) 
	{
      var offset = $(this).offset();
      var x=(e.pageX - offset.left);
      var y=(e.pageY - offset.top);
      $("#opps").css({"left":x,"top":y,"display":"inline-block"})
      setTimeout(function()
        {
      	  $("#opps").css("display","none");
		},300)
    
    });
  },5000);
  setTimeout(function()
  {
    $("#messagge").fadeOut();
    $("#countdown").fadeIn();
  },1000);
  setTimeout(function()
  {
    $("#countdown").fadeOut();
    $("#countdown").html("2");
    $("#countdown").fadeIn();
  },2000);
  setTimeout(function()
  {
    $("#countdown").fadeOut();
    $("#countdown").html("1");
    $("#countdown").fadeIn();
  },3000);
  setTimeout(function()
  {
    $("#countdown").fadeOut();
    $("#countdown").html("START");
    $("#countdown").fadeIn();
  },4000);
  window.onresize = function()
  {
    $(".tap_wrap").height($(window).height());
  }
});
