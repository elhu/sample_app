$(document).ready(function()
		  {
		      $("#micropost_content").keyup(function()
					     {
						 var box=$(this).val();
						 var main = box.length *100;
						 var value= (main / 140);
						 var count= 140 - box.length;

						 if(box.length <= 140)
						     {
							 $('#count').html(count);
						     }
						 return false;
					     });

		  });