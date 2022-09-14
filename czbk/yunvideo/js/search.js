$(function(){
	//头部搜索
$(".header .search_l").focus(function(){/*点击鼠标触发的事件，则执行里面的函数*/
	$(".search").css({"width":"180px","borderColor":"#fff"});
	$(".search_r").css("background-position-y","-29px");
	$(this).siblings("ul").slideDown("fast");	
	$(".serul>li>a").css("textDecoration","none");
})
$(".header .search_l").blur(function(){/*该事件仅适用于表单元素input*/
	$(".search").css({"width":"180px","borderColor":"#525867"});
	$(".search_r").css("background-position-y","5px");	
	$(this).siblings("ul").hide("slow");	
})

});
