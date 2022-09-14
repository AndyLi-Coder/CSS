//cookie是浏览器 提供的一种机制，它将document 对象的cookie属性提JavaScript。
//可以由JavaScript对其进行控制，而并不是JavaScript本身的性质。
//escape() 函数可对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
function addCookie(objName,objValue,objHours){
	var str = objName + "=" + escape(objValue);
	 //判断是否设置过期时间
	if(objHours > 0){
		var date = new Date();
		var ms = objHours;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
	}
	document.cookie = str;
}
//该函数返回名称为name的cookie值，如果不存在则返回空
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
//该函数可以删除指定名称的cookie
function delCookie(name){
	var date = new Date();
	date.setTime(date.getTime() - 10000);
	document.cookie = name + "=a  ; expires=" + date.toGMTString();
}

//广告banner
//首页特效
//banner特效
var jiange = 4000; //间隔时间				
var nowimg = 0;
var mytimer = null;

//设置定时器的
mytimer = window.setInterval(dongdong,jiange);
//$("#czrightbut").click(dongdong);

//设置鼠标进入离开定时器开关的
$(".ban").mouseenter(function(){window.clearInterval(mytimer);});
$(".ban").mouseleave(function(){mytimer = window.setInterval(dongdong,jiange);});

function dongdong(){
	if(nowimg < $(".ban_in ul li").length - 1){
		nowimg = nowimg + 1;
	}else{
		nowimg = 0;
	}
	$(".ban_in ul li").eq(nowimg - 1).fadeOut("fast");
	$(".ban_in ul li").eq(nowimg).fadeIn("fast");
	$(".czxinxi ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
}				
$(".czxinxi ul li").mouseenter(function(){
	$(".ban_in ul li").stop().eq(nowimg).hide();
	nowimg = $(this).index();
	$(".ban_in ul li").eq(nowimg).show();
	$(".czxinxi ul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
});	
