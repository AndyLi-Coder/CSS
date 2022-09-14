window.onload = function() {
	var navObj = document.getElementsByClassName("nav")[0];
	var ulObj = navObj.children[1];
	var liObjs = ulObj.children;
	var fpNav = document.getElementById("fp-nav");

	var ulObj = fpNav.children[0];

	var dotliObjs = ulObj.children;

	for(var i = 0; i < liObjs.length; i++) {
		liObjs[i].onmouseover = function() {
			this.children[1].className = "show";

			this.classList.add("cur2");

		}
		//当点击ul中的li的时候，给当前的li链接添加cur，其他的li移除cur
		liObjs[i].onclick = function() {
			for(var j = 0; j < liObjs.length; j++) {
				liObjs[j].classList.remove("cur");
			}
			this.classList.add("cur");

		}
		liObjs[i].onmouseout = function() {
			this.classList.remove("cur2");
			this.children[1].className = "";
		}
	}
};