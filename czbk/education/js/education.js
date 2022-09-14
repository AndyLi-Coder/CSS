
//导航栏的下拉菜单
$(function() {
	//1.下拉菜单开始
	var navind = $(".nav_con ul .navcon_on").index();
	$(".fdnav").hover(function(){
		$(this).stop().animate({"height":"153px"},300);
	},function(){
		$(this).stop().animate({"height":"0"},300);
		setTimeout(function(){
			var navh0 = $(".fdnav").eq(0).height();
			var navh1 = $(".fdnav").eq(1).height();
			var navh2 = $(".fdnav").eq(2).height();
			if(navh0 == 0&&navh1 == 0&&navh2 == 0){
				if(navind>-1){
					$(".nav_con ul li").eq(navind).addClass("navcon_on").siblings().removeClass("navcon_on");
				}else{
					$(".nav_con ul li").removeClass("navcon_on");
				}
			}
		},400);
	});
	$(".xygk").hover(function() {
		$("#xygk").stop().animate({
			"height": "153px"
		}, 300);
	}, function() {
		$("#xygk").stop().animate({
			"height": "0"
		}, 300);
	});
	$(".jyjx").hover(function() {
		$("#jyjx").stop().animate({
			"height": "153px"
		}, 300);
	}, function() {
		$("#jyjx").stop().animate({
			"height": "0"
		}, 300);
	});
	$(".xsfw").hover(function() {
		$("#xsfw").stop().animate({
			"height": "153px"
		}, 300);
	}, function() {
		$("#xsfw").stop().animate({
			"height": "0"
		}, 300);
	});
	//下拉菜单结束
	
});