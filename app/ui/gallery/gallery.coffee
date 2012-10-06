#<< app/ui/gallery/gallery_model

class Gallery

	GalleryModel = app.ui.gallery.GalleryModel

	_config:->
		@index = 0
		@data = []
		@current = null
		@next = null
		@bt_prev = @el.find(".left_arrow")
		@bt_next = @el.find(".right_arrow")
		@nav = @el.find("nav")

	constructor:(@el, @id)->
		@_config()
		GalleryModel.service_url = "http://codeman-admin.herokuapp.com/services/files/#{@id}"
		GalleryModel.clear()
		GalleryModel.load (data)=>
			@_config_data()
			@start()

	_config_data:->
		for item in GalleryModel.all()
			@data.push item.file_url

	_events:->
		@bt_next.bind("click",=>
			@gallery.next()
			@_check_bts()
		)

		@bt_prev.bind("click",=>
			@gallery.prev()
			@_check_bts()
		)

		@nav.find("li").bind("click", (e)=>
			@_reset_nav()
			index = $(e.target).attr "id"
			index = parseInt index
			@gallery.goto index
			$(e.target).addClass "selected"
			@_check_bts()
		)

		@_check_bts()

		@gallery.onChange = (id)=>
			@_reset_nav()
			index = @nav.find("##{id}").attr("id")
			index = parseInt index
			@nav.find("##{id}").addClass "selected"

	_reset_nav:->
		@nav.find("li").removeClass "selected"

	_check_bts:->

		if @gallery.hasNext()
			@bt_next.css("display","block") 
		else
			@bt_next.css("display","none") 

		if @gallery.hasPrev()
			@bt_prev.css("display","block") 
		else
			@bt_prev.css("display","none") 

	_build_nav:->
		width = 1000/@gallery.total()
		list = @nav.find("ul")
		list.empty()

		for item, i in @data
			list.append $("<li style='width:#{width}px' id='#{i}'></li>")

	start:->
		@gallery = @el.find("ul.gallery").gallery()
		@gallery.init @data
		@_build_nav()
		@bt_prev.css "display","none"
		$(@nav.find("li")[0]).addClass "selected"
		@_events()
