#<< app/models/app_model

class AboutModel extends app.models.AppModel

	@service_url = "http://codeman-admin.herokuapp.com/services/profile/giuliandrimba"

	@after_load:(data)->
		@new data