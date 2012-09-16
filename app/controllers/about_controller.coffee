#<< app/controllers/app_controller
#<< app/models/about_model

class AboutController extends app.controllers.AppController

	AboutModel = app.models.AboutModel

	index:->
		AboutModel.load =>
			@render "index", data:AboutModel.first()