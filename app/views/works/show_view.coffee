#<< app/views/app_view
#<< app/ui/gallery/gallery

class ShowView extends app.views.AppView

	Gallery = app.ui.gallery.Gallery

	set_triggers:->
		@mark_menu "bt_work"
		@el.find( ".back" ).click ( ev )=>
			@navigate $( ev.currentTarget ).attr "href"
			ev.preventDefault() unless @the.config.no_push_state

	before_in:->
		_gaq.push ["_trackEvent", "works", "enter", "work_#{@data.data.id}"]
		gallery = new Gallery $(".works_gallery"), @data.data.id
		@el.css({opacity:0})

	in:(done)->
		@el.find(".description").html @data.data.description
		@update_scroll()
		super()
		@before_in()
		TweenLite.to @el, 0.5, {css:{opacity:1}, ease:Quad.easeOut, onComplete:=>
			done?()
		}

	out:(done)->
		TweenLite.to @el, 0.5, {css:{opacity:0}, ease:Quad.easeOut, onComplete:=>
			done?()
		}