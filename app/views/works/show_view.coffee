#<< app/views/app_view
#<< app/ui/gallery/gallery

class ShowView extends app.views.AppView

	Gallery = app.ui.gallery.Gallery

	before_in:->
		gallery = new Gallery $(".works_gallery"), @data.data.id

	in:(done)->
		super()
		@before_in()
		done?()

	out:(done)->
		done?()