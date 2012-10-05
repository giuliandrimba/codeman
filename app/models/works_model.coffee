#<< app/models/app_model

class WorksModel extends app.models.AppModel

	@service_url = "http://codeman-admin.herokuapp.com/services/works/giuliandrimba"

	load:=>
		super()
		$("#preloader").css "display", "block"