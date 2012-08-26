#<< app/controllers/app_controller
#<< app/models/works_model

class WorksController extends app.controllers.AppController

	WorksModel = app.models.WorksModel

	index:->

		@data = [1,2,3,4,5,6,7,8]

		WorksModel.load =>
			console.log WorksModel.all()
			@render "index", data:WorksModel.all()

	show:->

		@render "show", {}