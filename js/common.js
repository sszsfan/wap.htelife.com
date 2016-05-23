jQuery(document).ready(function($){
	//open
	$('.js_button_001').on('click', function(event){
		
		$('.js_modal_001').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
	});
	//close
	$('.js_modal_001').on('click', function(event){
		if( $(event.target).is('.js_drop_001') || $(event.target).is('.js_modal_001') ) {
			$('.js_modal_001').removeClass('is_visible');
			$('.js_modal_open').removeClass('modal_open');
		}
	});
	
	//open ok
	$('.js_button_ok').on('click', function(event){
		
		$('.js_modal_ok').addClass('is_visible');
		$('.js_modal_open').addClass('modal_open');
	});
	//close ok
	$('.js_modal_ok').on('click', function(event){
		if( $(event.target).is('.js_drop_ok') || $(event.target).is('.js_modal_ok') ) {
			$('.js_modal_ok').removeClass('is_visible');
			$('.js_modal_open').removeClass('modal_open');
		}
	});
	//农行支付
	$('.abc_btn').on('click', function(){
		$(".abc_btn").attr("src","images/abc_btn002.jpg");
	});
	//四个参数分别表示：打开按钮(.class)、背景层(.class)、弹出层(.class)、弹出层切换样式名(class)、关闭按钮的Class名(.class)或者id名（#id）
	function showWrapper(btn,mask,wrap,wrapper,close){
		var wraps = $(wrap);
		var masks = $(mask);
		var btn = $(btn);
		var closes = $(close);

		function fun(e){
			e.preventDefault();
	   	    e.stopPropagation();
	   	    /*return ;*/
		}

		btn.bind("click",function(){
			if(!masks.hasClass("mask_2")){
				masks.addClass("mask_2");
			}
			wraps.addClass(wrapper);
			$(document).bind("touchmove",fun);
		});

		if(closes.length > 1){
			closes.each(function(){
				$(this).bind("click",function(){
					masks.removeClass("mask_2");
					wraps.removeClass(wrapper);
					$(document).unbind("touchmove",fun);
				});
			});
		}else{
			closes.bind("click",function(){
				masks.removeClass("mask_2");
				wraps.removeClass(wrapper);
				$(document).unbind("touchmove",fun);
			});
		}

		masks.bind("click",function(){
			masks.removeClass("mask_2");
			wraps.removeClass(wrapper);
			$(document).unbind("touchmove",fun);
		});
	}
	showWrapper(".jq_btn_001",".jq_mask_001",".jq_wrapper_001","wrapper_2",".jq_close_001");
	showWrapper(".jq_btn_002",".jq_mask_002",".jq_wrapper_002","wrapper_2",".jq_close_002");
	showWrapper(".jq_btn_003",".jq_mask_003",".jq_wrapper_003","wrapper_4",".jq_close_003");
	showWrapper(".jq_dbbtn_001",".jq_mask_003",".jq_dbwrapper_001","wrapper_4",".jq_close_004");
	showWrapper(".jq_dbbtn_002",".jq_mask_003",".jq_dbwrapper_002","wrapper_4",".jq_close_005");

	showWrapper(".jq_btn_005",".jq_mask_005",".jq_wrapper_005","wrapper_6",".jq_close_005");
/*	showWrapper(".jq_btn_007",".jq_mask_007",".jq_wrapper_007","wrapper_8",".jq_close_007");*/

	//评价选择星级thisObj为id或者class(注意不要用.star)
	function starLight(thisObj,num){
		if(!$(thisObj).hasClass("star")){
			$(thisObj).addClass("star");
		}
		if($(thisObj).children("li").length !== 5){
			$(thisObj).html("<li>★</li><li>★</li><li>★</li><li>★</li><li>★</li>");
		}
		var star_li = $(thisObj).find("li");
		var len = star_li.length;
		for(var i=0; i<len; i++){
			if(typeof num == "number" && num<=5 && num>=1){
				for(var k=0; k<num; k++){
					star_li.eq(k).addClass("active");
				}
			}else{
				star_li.eq(i).bind("click",function(){
					star_li.removeClass("active");
					for(var j=0; j<=$(this).index(); j++){
						star_li.eq(j).addClass("active");
					}
				});
			}	
		}
	}
	starLight(".star1",4);
	starLight(".star2",3);
	starLight(".star3",3);

	//菜单选菜
	function cookMenu(){
		$(".cm_icon").bind("click",function(){
			if($(this).hasClass("choose")){
				$(this).removeClass("choose");
			}else{
				$(this).addClass("choose");
			}
			var num = $(".cm_icon.choose").length;
			$("#cook_mun").html(num);
		});
	}
	cookMenu();
});