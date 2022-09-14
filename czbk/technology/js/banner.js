window.onload = function(){		
	//1.设置ul的宽度
	//获取id为imgList的元素
	var imgList = document.getElementById("imgList");
	//获取img标签
	var imgArr = document.getElementsByTagName("img");
	//设置ul的宽度
	imgList.style.width  = 770*imgArr.length + "px";
	
	
	//2.设置导航按钮的居中
	//获取id为outer的元素
	var outer  = document.getElementById("outer");
	//获取id为navDiv的元素
	var navDiv = document.getElementById("navDiv");
	//设置navDiv的left值
	navDiv.style.left = (banner_l.offsetWidth - navDiv.offsetWidth)/2 + "px";
	//获取所有的a
	var allA = document.getElementById("navDiv").getElementsByTagName("a");
	//设置图片的默认索引
	var index = 0;
	//设置默认选中的效果
	allA[index].style.backgroundColor = "black";
	
	/*
	 * 点击超链接切换到指定的图片
	 * 		点击第一个超链接，显示第一个图片
	 * 		点击第二个超链接，显示第二个图片
	 */
	//3.遍历所有的a
	for(var i = 0; i < allA.length; i++){
		//4.为每一个超链接设置一个num属性
		allA[i].num = i;
		//5.为所有的a绑定单击响应函数
		allA[i].onclick  = function(){						
			//关闭定时器
			clearInterval(timer);
			
			//6.获取点击超链接的索引，并将其赋值给index
			index  = this.num;
			/*
			 * 第一张  0 0
			 * 第二张  1 -520
			 * 第三张  2 -1040
			 */
			//7.切换图片
			//imgList.style.left  = -520 * index +"px"; 
			//9.设置选中的a
			setA();
			//10.使用move函数来切换图片
			move(imgList,"left",-770*index,20,function(){
				//动画执行完毕以后，开启自动切换
				autoChange();
			});
		};
	}				
	//10，开启自动切换
	autoChange();				
	//8.创建一个函数，设置a的颜色
	function setA() {
		//判断当前的索引是否是图片最后一张
		if(index >= imgArr.length-1){
			//将index设置为0
			index  = 0;
			//此时显示的最后一张图片，而最后一张图片和第一张是一摸一样
			//通过CSS将最后一张切换成第一张
			imgList.style.left = 0+"px";
			
		}
		for(var i = 0; i < allA.length; i++) {
			//9.将选中之前的颜色设置为空
			allA[i].style.backgroundColor = "";
		}
		//allA[index].style.backgroundColor = "black";
	}				
	//创建一个定时器的表示
	var timer;
	//9.创建一个函数自动切换图片
	function autoChange(){
		//开启一个定时器来切换图片
		timer = setInterval(function(){
			//是索引自增
			index++;
			//index的值不能一直自增，所以判断index的值
			index %= imgArr.length;
			//执行动画，自动切换图片
			move(imgList,"left",-770*index,20,function(){
				//修改导航栏的按钮
				setA();
			});
		},3000);
	}
};