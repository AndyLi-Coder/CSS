$(function(){
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
});

