#<< app/views/app_view
#<< app/ui/header/header

class IndexView extends app.views.AppView

	Header = app.ui.header.Header

	config:->
		@header = new Header "header_canvas"

	before_in:->
		

	in:(done)->
		@config()
		done?()

	out:(done)->
		done?()