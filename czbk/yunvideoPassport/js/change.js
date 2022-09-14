//登陆框切换
$(".hdbox h2").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	$(".cha_box").children(".cha_list").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	// $(".cha_box .cha_list").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
})