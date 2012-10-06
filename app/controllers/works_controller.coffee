#<< app/controllers/app_controller
#<< app/models/works_model

class WorksController extends app.controllers.AppController

	WorksModel = app.models.WorksModel

	index:->
		window.preloader.show()
		
		WorksModel.load =>
			@render "index", data:WorksModel.all()

	show:(id)->
		WorksModel.load =>
			@render "show", data:WorksModel.find id