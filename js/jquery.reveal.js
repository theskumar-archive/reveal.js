/* Author:
	Saurabh Kumar /@saurabh_world
*/

var bg_overlay_url = "img/bg-overlay.jpg";   //edit this.

var debug = true;

$(document).ready(function(){	
	
	var box_size = 40;	
	
	var box_width = box_size;	
	var box_height = box_size;

	$('body').append('<div id=box-container></div>')

	var eheight = $(document).height();
	var ewidth = $(document).width();
	

	var nrows = (eheight/box_height)+1;
	var ncols = (ewidth/box_width)+1;
	
	var front_box_no = 0;
	var is_clearing = false;
	var repeating_timer;
	var max_boxn0 = nrows*ncols;
	
	nrows = nrows - nrows%1;
	ncols = ncols - ncols%1;
	
	//fill the screen with boxes
	for(i=0;i<nrows;i++)
	{	
		var top = i*box_height;
	
		for(j=0;j<ncols;j++)
		{
			var left = j*box_width;
			var boxid = i*ncols +j;
			
			var $el = $('<div boxno="'+boxid+'" id="'+boxid+'prebox" style="left:'+left+'px; top:'+top+'px; background-position: -'+left+'px -'+top+'px; background-color: #000;"></div>');
			
			$el.css('height',box_height+'px');
			$el.css('width',box_width+'px');
			$el.css('position','absolute');
			$el.css('z-index','1000');			
			$el.css('backgroundImage','url('+bg_overlay_url+')');			


			$el.addClass('preloader_single_box');
			$('#box-container').append($el);
			//if (debug) {$el.append('<div id="countbox-inner">'+boxid+'</div>');};

		}
	
	}


	$('.preloader_single_box').each(function () {		

		var box = $(this);
		box.mouseenter(function  () {		

			hide_box(box, "slow");
		});
		
	});

	
	function hide_box(box, speed){		

		var no = box.attr('boxno');

		
		neigh1no = no - ncols;
		neigh2no = no -0 + 1;
		neigh3no = no -0 + ncols;
		neigh4no = no - 1;

		//alert(no+","+neigh1no+","+neigh2no+","+neigh3no+","+neigh4no);
		
		box_id_1 = $("#"+neigh1no+"prebox");
		box_id_2 = $("#"+neigh2no+"prebox");
		box_id_3 = $("#"+neigh3no+"prebox");
		box_id_4 = $("#"+neigh4no+"prebox");

		box.fadeOut(speed);
		
		box_id_1.fadeOut(speed);		
		box_id_2.fadeOut(speed);		
		box_id_3.fadeOut(speed);		
		box_id_4.fadeOut(speed);		
	}
});