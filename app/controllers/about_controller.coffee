#<< app/controllers/app_controller
#<< app/models/about_model

class AboutController extends app.controllers.AppController

	AboutModel = app.models.AboutModel

	index:->
		window.preloader.show()
		AboutModel.load =>
			window.preloader.hide()
			@render "index", data:AboutModel.first()