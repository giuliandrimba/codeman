/*!
 * jQuery Vimeo Plugin
 *
 * Author: Giulian Drimba (@giuliandrimba / giuliandrimba@gmail.com)
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html 
 */

;(function($)
{
		
	var iframe;
    var url;

	if (window.addEventListener)
	{
	    window.addEventListener('message', onMessageReceived, false);
	}
	else {
	    window.attachEvent('onmessage', onMessageReceived, false);
	}

	$.fn.vimeoplayer = function()
	{
		iframe = this;
		url = iframe.attr('src').split('?')[0]
	}

	$.fn.vimeoplayer.play = function()
	{
		 post("play");
	}

	$.fn.vimeoplayer.pause = function()
	{
		 post("pause");
	}

	$.fn.vimeoplayer.onPause = function()
	{

	}

	$.fn.vimeoplayer.onReady = function()
	{
		
	}

	$.fn.vimeoplayer.onFinish = function()
	{
		
	}

	$.fn.vimeoplayer.onPlayProgress = function()
	{
		
	}

	function onMessageReceived(e) 
	{
	    var data = JSON.parse(e.data);
	    
	    switch (data.event) 
	    {
	        case 'ready':
	            $.fn.vimeoplayer.onReady();
	            break;
	           
	        case 'playProgress':
	            $.fn.vimeoplayer.onPlayProgress();
	            break;
	            
	        case 'pause':
	            $.fn.vimeoplayer.onPause();
	            break;
	           
	        case 'finish':
	            $.fn.vimeoplayer.onFinish();
	            break;
	    }
	}

	function post(action, value) 
	{
	    var data = { method: action };
	    
	    if (value) {
	        data.value = value;
	    }
	    
	    iframe[0].contentWindow.postMessage(JSON.stringify(data), url);
	}

})(jQuery);