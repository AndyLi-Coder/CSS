/*
 * 创建一个简单的执行动画的函数
 * 		obj 要移动的对象
 * 		attr 要执行的动画样式 比如 width height top left
 * 		target 执行动画的目标位置
 * 		speed 移动的速度（正数向右移动，负数向左移动）
 * 		callback  回调函数：动画执行完毕以后执行
 */
//var timer;

function move(obj, attr,target, speed,callback) {

	//10.开启一个定时器之前关闭一个定时器
	clearInterval(obj.timer);
	//5.获取box1当前的值
	var current = parseInt(getStyle(obj, attr));
	
	//判断速度的正负值
	//如果从0 向 800移动，则speed为正
	//如果从800向0移动，则speed为负
	if(current > target){
		speed = -speed;
	}

	//4.开启一个定时器，来执行动画效果
	//向执行动画中添加一个timer属性，来保存自己的动画标识
	obj.timer = setInterval(function() {
		
		
		//5.获取box1原来的left值
		var oldValue = parseInt(getStyle(obj, attr));

		//6.改变box1的left值
		var newValue = oldValue + speed;

		//7.判断新的left值是否大于800 					
		//向左移动时，需要判断newValue是否小于target
		//向右移动时，需要判断newValue是否大于target
		if((speed < 0 && newValue < target)  || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		//8.将newValue设置给left
		obj.style[attr] = newValue + "px";
		
		//9.关闭定时器
		if(newValue === target) {
			//关闭定时器
			clearInterval(obj.timer);
			//动画执行完毕
			callback && callback();
		}
	}, 30);				
}

/*
 * 定义一个函数来获取元素的样式
 * 		obj--要获取的元素
 * 		name--元素的样式名
 */
function getStyle(obj, name) {
	if(window.getComputedStyle) {
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}
}