(function(){
	// ----------city----------
	$(".city").hover(function(){
		$(".city_con").fadeIn(100);
	},function(){
		$(".city_con").hide();
	});
	
	$(".hjpkc").hover(function(){
		$(".fdnav").stop().animate({"height":"145px"},300);
	},function(){
		$(".fdnav").stop().animate({"height":"0"},300);
	});
	
	// banner
	//banner����Ч
//	var banli = $(".slideban .bd ul li");
//	var banli = parseInt(banli.length) - 1;
//	var ban_html = "";
//	for(i=0;i<banli;i++){
//		ban_html += "<li></li>";
//	}
//	var boxli=$(".slideban .hd ul").html();
//	$(".slideban .hd ul").html(boxli+ban_html);
	$(".nav_txt li").mouseenter(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".course_kind").show();
		$(".course_kind").find(".icon_fuli").eq($(this).index()).show().siblings().hide();
	});
	$(".sub_nav").mouseleave(function(){
		$(this).find(".nav_li").removeClass("cur");
		$(".course_kind").stop().hide("fast");
	});
//	jQuery(".banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime : 4000,delayTime:700});
//	jQuery(".ban").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,interTime : 4000,delayTime:700});
//	jQuery(".slide_tu").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,interTime : 3000,delayTime:500});
})();