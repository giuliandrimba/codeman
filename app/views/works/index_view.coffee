#<< app/views/app_view

class IndexView extends app.views.AppView

	before_in:->
		@thumbs = $(@el).find(".thumb_list li .project_thumb")
		@_total_thumbs = @thumbs.length
		@_thumbs_loaded = 0

		for thumb in @thumbs
			rndTop = (Math.random() * 100) + 100
			$(thumb).css "top", "#{rndTop}px"

		@preloader.show()


	load:(done)->
		@thumbs.find("img").load (=>
			@_thumbs_loaded++

			done?() if @_thumbs_loaded >= @_total_thumbs
		)

	in:(done)->
		@update_scroll()
		@before_in()

		@load =>
			@preloader.hide()
			delay = 0
			time = 0.5
			for thumb, i in @thumbs
				# rndTime = (Math.random() * 1) + .5
				delay += .05
				time += .06
				# TweenLite.to $(thumb), .5, {css:{opacity:1}}
				TweenLite.to $(thumb), time, {css:{opacity:1,top:0,left:0},delay:delay,ease:Quad.easeOut}

			done?()