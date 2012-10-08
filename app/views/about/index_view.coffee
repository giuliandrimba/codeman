#<< app/views/app_view

class IndexView extends app.views.AppView

	before_in:->
		@el.find(".description").html(@data.data.description)

	in:(done)->
		@before_in()
		done?()

	out:(done)->
		done?()