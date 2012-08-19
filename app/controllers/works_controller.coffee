#<< app/controllers/app_controller

class WorksController extends app.controllers.AppController

	index:->

		@data = [1,2,3,4,5,6,7,8]

		@render "index", data:@data