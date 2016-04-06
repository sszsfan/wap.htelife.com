function showWrapper(){
	var wraps = document.getElementsByClassName("js_wrapper");
	var masks = document.getElementsByClassName("js_mask");
	var btns = document.getElementsByClassName("js_purchase_methods");
	var closes = document.getElementsByClassName("js_close_wrap");
	var ypos = -240;
	var timer1,timer2;
	btns[0].onclick = function(){
		//masks[0].style.visibility = "visible";
		//masks[0].style.opacity = 1;
		masks[0].setAttribute("class","js_mask mask_2");
		moveElement("js_wrap",0,20);
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
		moveElement("js_wrap",-260,20);
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
		moveElement("js_wrap",-260,20);
	};
}

function moveElement(elementID,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.bottom) {
    elem.style.bottom = "-260px";
  }
  var ypos = parseInt(elem.style.bottom);
  if (ypos == final_y) {
    return true;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.bottom = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}

window.onload=showWrapper;
