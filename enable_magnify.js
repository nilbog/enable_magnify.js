$.fn.enable_magnify=function(lg_img_src, lg_container_id){
	var $sm_img_container = this,
		$sm_img = this.find('img'),
		lg_container_id = lg_container_id || 'magnify',
		$lg_container,
		$lg_img;
	$sm_img_container.after('<div id="'+lg_container_id+'"><img src="'+lg_img_src+'" style="position:relative;"/></div>');
		$lg_container=$('#'+lg_container_id);
		$lg_img = $('#'+lg_container_id+' img');
	$lg_container.hide();
	$sm_img.on('mousemove',function(e){
		$lg_container.show();
		var sm_left = e.pageX - $sm_img.offset().left,
			sm_top = e.pageY - $sm_img.offset().top,
			lg_mult_left = $lg_img.width()/$sm_img.width(),
			lg_mult_top = $lg_img.height()/$sm_img.height();
		$lg_img.css({
			'left':(-1*(lg_mult_left*sm_left))+($lg_container.height()/2),
			'top':(-1*(lg_mult_top*sm_top))+($lg_container.width()/2)
		});
	}).on('mouseout',function(){
		$lg_container.hide();
	});
}