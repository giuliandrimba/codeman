(function($)
{
	$.fn.gallery = function()
	{
		var list = $(this);
		list.css("position","relative");
		
		var IMAGE_WIDTH = 1000;
		var totalImages = 0;
		
		var currentImage = 0;

		var api = {}
			
		api.init = function(data)
		{
			list.empty();
			
			for(var i = 0; i < data.length; i++)
			{
				list.append("<li><img style='width:" + IMAGE_WIDTH + "px' src='" + data[i] + "' /></li>");
			}
							
			totalImages = list.find("li").length;
			currentImage = 0;
			list.width((totalImages * IMAGE_WIDTH) * 2);
			list.css("left",0);
		}

		api.onChange = function()
		{

		}
		
		api.reset = function()
		{
			goto(0);
		}
		
		api.next = function()
		{
			if(currentImage < totalImages - 1)
			{
				currentImage++;
				list.animate({"left":"-="+IMAGE_WIDTH},{duration:750});
				api.onChange(currentImage);
			}
		}
		
		api.prev = function()
		{
			if(currentImage > 0)
			{
				currentImage--;
				list.animate({"left":"+="+IMAGE_WIDTH},{duration:750});	
				api.onChange(currentImage);
			}
		}
		
		api.goto = function(num)
		{
			currentImage = num;
			list.animate({"left":-IMAGE_WIDTH * currentImage},{duration:750});
			api.onChange(currentImage);
		}
		
		api.hasNext = function()
		{
			if(currentImage < totalImages - 1)
			{
				return true;
			}
			
			return false;
		}
		
		api.hasPrev = function()
		{
			if(currentImage > 0)
			{
				return true;
			}
			return false;
		}
		
		api.total = function()
		{
			return totalImages;
		}
		
		api.current = function()
		{
			return currentImage + 1;
		}

		return api;
	}
	
})(jQuery)