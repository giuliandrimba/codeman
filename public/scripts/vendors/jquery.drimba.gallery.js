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

		var youtubeVideos = [];
		var vimeoVideos = [];

		function stopVideos()
		{
			if(hasVideo)
			{
				if($(".youtube_video"))
					$(".youtube_video").tubeplayer("pause");

				if($(".vimeo_video"))
					stopVimeo();
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
			var el = "<div id='youtube_" + youtubeVideos.length  + "' class='youtube_video'></div>";
			youtubeVideos.push(id);
			return el;
		}

		function startYoutubeVideos(id)
		{
			for(var i = 0; i < youtubeVideos.length; i++)
			{
				$("#youtube_" + i).tubeplayer({
					width: IMAGE_WIDTH, // the width of the player
					height: 554, // the height of the player
					allowFullScreen: "true", // true by default, allow user to go full screen
					initialVideo: youtubeVideos[i], // the video that is loaded into the player
					preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
					onPlay: function(id){}, // after the play method is called
					onPause: function(){}, // after the pause method is called
					onStop: function(){}, // after the player is stopped
					onSeek: function(time){}, // after the video has been seeked to a defined point
					onMute: function(){}, // after the player is muted
					onUnMute: function(){} // after the player is unmuted
				});
			}
		}

		function startVimeoVideos(id)
		{
			for(var i = 0; i < vimeoVideos.length; i++)
			{
				$("#vimeo_" + vimeoVideos[i]).vimeoplayer()
			}
		}

		function stopVimeo()
		{
			for(var i = 0; i < vimeoVideos.length; i++)
			{
				$("#vimeo_" + vimeoVideos[i]).vimeoplayer.pause();
			}
		}

		function vimeoEmbed(id)
		{
			hasVideo = true;
			vimeoVideos.push(id);
			return "<iframe id='vimeo_" + id + "' class='vimeo_video' src=\"http://player.vimeo.com/video/" + id + "?api=1\" width=\"1000\" height=\"554\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"
		}
			
		api.init = function(data)
		{
			list.empty();
			
			for(var i = 0; i < data.length; i++)
			{
				list.append("<li>" + appendResource(data[i]) + "</li>");
			}

			startYoutubeVideos();
			startVimeoVideos();
							
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