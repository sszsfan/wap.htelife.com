function showWrapper(){
	var wraps = document.getElementsByClassName("js_wrapper");
	var masks = document.getElementsByClassName("js_mask");
	var btns = document.getElementsByClassName("js_control_btn001");
	var closes = document.getElementsByClassName("js_close_wrap");
	var ypos = -240;
	var timer1,timer2;
	btns[0].onclick = function(){
		//masks[0].style.visibility = "visible";
		//masks[0].style.opacity = 1;
		masks[0].setAttribute("class","js_mask mask_2");
		wraps[0].setAttribute("class","js_wrapper wrapper_2");
		/*
		function moveUp(){
			if(ypos < 0){
				ypos+=10;
				wraps[0].style.bottom = ypos + "px";
			}else if(ypos >= 0){
				clearInterval(timer1);
			}
		}
		var timer1 = setInterval(moveUp,1000);	
		*/
	};
	closes[0].onclick = function(){
		//masks[0].style.visibility = "hidden";
		//masks[0].style.opacity = 0;
		masks[0].setAttribute("class","js_mask mask_1");
		wraps[0].setAttribute("class","js_wrapper wrapper_1");
		/*
		function moveDown(){
			if(ypos>-240){
				ypos-=10;
				wraps[0].style.bottom = ypos + "px";
			}else if(ypos <= -240){
				clearInterval(timer2);
			}
		}
		var timer2 = setInterval(moveDown,1000);
		*/
	};
	masks[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
    wraps[0].setAttribute("class","js_wrapper wrapper_1");
	};
}

window.onload=showWrapper;
