#<< app/views/app_view

class IndexView extends app.views.AppView

	before_in:->
		_gaq.push ["_trackEvent", "about", "enter", "about"]
		@mark_menu "bt_about"
		@el.find(".description").html(@data.data.description)
		@el.css({opacity:0})

	in:(done)->
		super()
		@before_in()
		TweenLite.to @el, 0.5, {css:{opacity:1}, ease:Quad.easeOut, onComplete:=>
			done?()
		}

	out:(done)->
		TweenLite.to @el, 0.5, {css:{opacity:0}, ease:Quad.easeOut, onComplete:=>
			done?()
		}