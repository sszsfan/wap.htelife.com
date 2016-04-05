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
});