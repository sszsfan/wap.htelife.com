
function showWrapper(){

	var wraps = document.getElementsByClassName("js_wrapper");
	var masks = document.getElementsByClassName("js_mask");
	var btns = document.getElementsByClassName("js_control_btn001");
	var closes = document.getElementsByClassName("js_close_wrap");
	if(!btns[0]) return false;
	var ypos = -240;
	var timer1,timer2;
	btns[0].onclick = function(){

		masks[0].setAttribute("class","js_mask mask_2");
		wraps[0].setAttribute("class","js_wrapper wrapper_2");

	};
	closes[0].onclick = function(){

		masks[0].setAttribute("class","js_mask mask_1");
		wraps[0].setAttribute("class","js_wrapper wrapper_1");

	};
	masks[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
    wraps[0].setAttribute("class","js_wrapper wrapper_1");
	};
}

function showWrapper2(){
	if(!document.getElementById("js_control_btn001")) return false;
	var wraps = document.getElementsByClassName("js_wrapper");
	var masks = document.getElementsByClassName("js_mask");
	var btn = document.getElementById("js_control_btn001");
	var btn2 = document.getElementById("js_control_btn002");
	var closes = document.getElementsByClassName("js_close_wrap");
	var closes2 = document.getElementById("js_close_wrap2");
	function fun(e){
		e.preventDefault();
   	    e.stopPropagation();
	}
	btn.onclick = function(){
		masks[0].setAttribute("class","js_mask mask_2");
		wraps[0].setAttribute("class","js_wrapper wrapper_2");
		document.addEventListener("touchmove",fun,false);
	};
	closes[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
		wraps[0].setAttribute("class","js_wrapper wrapper_1");
		document.removeEventListener("touchmove",fun,false);
	};
	masks[0].onclick = function(){
		masks[0].setAttribute("class","js_mask mask_1");
    	wraps[0].setAttribute("class","js_wrapper wrapper_1");
    	document.removeEventListener("touchmove",fun,false);
	};
	if(document.getElementById("js_close_wrap2")){
		closes2.onclick = function(){
			masks[0].setAttribute("class","js_mask mask_1");
			wraps[0].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
	}
	if(document.getElementById("js_control_btn002")){
		btn2.onclick = function(){
			masks[1].setAttribute("class","js_mask mask_2");
			wraps[1].setAttribute("class","js_wrapper wrapper_2");
			document.addEventListener("touchmove",fun,false);
		};
		closes[1].onclick = function(){
			masks[1].setAttribute("class","js_mask mask_1");
			wraps[1].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
		masks[1].onclick = function(){
			masks[1].setAttribute("class","js_mask mask_1");
			wraps[1].setAttribute("class","js_wrapper wrapper_1");
			document.removeEventListener("touchmove",fun,false);
		};
	}
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function inputValue(){
	if(!document.getElementById("inputval")) return false;
	var val = document.getElementById("inputval");
	var reg = /^\d+(\.\d)?$/; 
	var reg2 = /^\d+$/;	
	val.onblur = function(){
		if(!reg.test(val.value)&&!reg2.test(val.value)){
			val.value = "";
		}
	}
}
addLoadEvent(showWrapper);
addLoadEvent(showWrapper2);
//addLoadEvent(inputValue);




