(function($)
{
	$.fn.gallery = function()
	{
		var list = $(this);
		list.css("position","relative");
		
		var IMAGE_WIDTH = 1000;
		var totalImages = 0;
		var hasVideo = false;
		var currentImage = 0;

		var api = {}

		var isImg = /.*(jpg|png|gif)/
		var isYoutube = /(youtube).*v=(.*)\&?.*/
		var isVimeo = /(vimeo).*\/(.*)/

		function stopVideos()
		{
			if(hasVideo)
			{
				var iframes = list.find("iframe");

				for(var i = 0; i < iframes.length; i++)
				{
					var oldSRC = $(iframes[i]).attr("src");
					$(iframes[i]).attr("src","");
					$(iframes[i]).attr("src",oldSRC);
				}
			}
		}

		function appendResource(data)
		{
			if(isImg.test(data))
			{
				return imgTag(data)
			}

			if(isYoutube.test(data))
			{
				return youtubeEmbed(isYoutube.exec(data)[2])
			}

			if(isVimeo.test(data))
			{
				return vimeoEmbed(isVimeo.exec(data)[2])
			}
		}

		function imgTag(img)
		{
			return "<img style='width:" + IMAGE_WIDTH + "px' src='" + img + "' />"
		}

		function youtubeEmbed(id)
		{
			hasVideo = true;
			return "<iframe width=\"1000\" height=\"554\" src=\"http://www.youtube.com/embed/" + id + "\" frameborder=\"0\" allowfullscreen></iframe>"
		}

		function vimeoEmbed(id)
		{
			hasVideo = true;
			return "<iframe src=\"http://player.vimeo.com/video/" + id + "\" width=\"1000\" height=\"554\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
		}
			
		api.init = function(data)
		{
			list.empty();
			
			for(var i = 0; i < data.length; i++)
			{
				list.append("<li>" + appendResource(data[i]) + "</li>");
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
				stopVideos();
				currentImage++;
				list.animate({"left":"-="+IMAGE_WIDTH},{duration:750});
				api.onChange(currentImage);
			}
		}
		
		api.prev = function()
		{
			if(currentImage > 0)
			{
				stopVideos();
				currentImage--;
				list.animate({"left":"+="+IMAGE_WIDTH},{duration:750});	
				api.onChange(currentImage);
			}
		}
		
		api.goto = function(num)
		{
			stopVideos();
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