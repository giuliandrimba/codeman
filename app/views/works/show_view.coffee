#<< app/views/app_view
#<< app/ui/gallery/gallery

class ShowView extends app.views.AppView

	Gallery = app.ui.gallery.Gallery

	before_in:->
		gallery = new Gallery $(".works_gallery"), @data.data.id
		@el.css({opacity:0})

	in:(done)->
		super()
		@before_in()
		TweenLite.to @el, 0.5, {css:{opacity:1}, ease:Quad.easeOut, onComplete:=>
			done?()
		}

	out:(done)->
		done?()