#<< app/views/app_view
#<< app/components/header/header

class IndexView extends app.views.AppView

	Header = app.components.header.Header

	config:->
		@header = new Header "header_canvas"

	before_in:->
		

	in:(done)->
		@config()
		done?()

	out:(done)->
		done?()