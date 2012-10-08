#<< app/views/app_view

class IndexView extends app.views.AppView

	before_in:->
		@thumbs = $(@el).find(".thumb_list li .project_thumb")
		@_total_thumbs = @thumbs.length
		@_thumbs_loaded = 0
		@el.css({opacity:1})

		for thumb in @thumbs
			rndTop = (Math.random() * 100) + 100
			$(thumb).css "top", "#{rndTop}px"

		@preloader.show()

	set_triggers:->
		@el.find( "a" ).click ( ev )=>
			@navigate $( ev.currentTarget ).attr "href"
			ev.preventDefault() unless @the.config.no_push_state


	load:(done)->
		@thumbs.find("img").load (=>
			@_thumbs_loaded++

			done?() if @_thumbs_loaded >= @_total_thumbs
		)

	in:(done)->
		super()
		@update_scroll()
		@before_in()

		@load =>
			@preloader.hide()
			delay = 0
			time = 0.5
			for thumb, i in @thumbs
				delay += .05
				time += .06
				TweenLite.to $(thumb), time, {css:{opacity:1,top:0,left:0},delay:delay,ease:Quad.easeOut}

			done?()

	out:(done)->

		delay = 0
		time = 0.5

		for thumb, i in @thumbs
				delay += .05
				time += .06
				TweenLite.to $(thumb), time, {css:{opacity:0,top:150,left:0},delay:delay,ease:Quad.easeOut}

		setTimeout ( =>
			done?()
		), (time * 1000)
