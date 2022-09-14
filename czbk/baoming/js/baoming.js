$(function() {
	/*给北京中心设置鼠标浮动事件*/
	$(".city").hover(function() {
		$(".city_con").fadeIn(100);
	}, function() {
		$(".city_con").hide();
	});

	/*给精品课程设置鼠标浮动事件*/
	$(".hjpkc").hover(function() {
		$(".fdnav").stop().animate({
			"height": "145px"
		}, 300);
	}, function() {
		$(".fdnav").stop().animate({
			"height": "0"
		}, 300);
	});

	/*给下拉菜单设置鼠标浮动事件*/
	$(".fdnav").hover(function() {
		$(".fdnav").stop().animate({
			"height": "145px"
		}, 300);
	}, function() {
		$(".fdnav").stop().animate({
			"height": "0"
		}, 300);
	});

	/*左侧导航栏的点击事件*/
	$(".nav_left ul li").click(function() {
		$(this).addClass("cur").siblings().removeClass("cur");
		$("html,body").animate({
			"scrollTop": $(".box_flow").eq($(this).index()).offset().top - 50
		}, 500);
	});
	$(window).scroll(function() {
		var B = $(window).scrollTop();
		if(B <= 300) {
			$(".nav_left").fadeOut();
		} else {
			$(".nav_left").fadeIn();
		}
	});
});