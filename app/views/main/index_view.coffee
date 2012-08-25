#<< app/views/app_view
#<< app/ui/header/header
#<< app/ui/menu/menu

class IndexView extends app.views.AppView

	Header = app.ui.header.Header
	Menu = app.ui.menu.Menu

	set_triggers:->
		@viewport = @wrapper.find(".viewport")
		@content = @wrapper.find(".content")
		@viewport.height(window.height())
		@_footer_pos()

		$(window).resize (=>
			@viewport.height(window.height())
			@wrapper.tinyscrollbar_update()
			@_footer_pos()
		)

	_footer_pos:->
		footer_height = @footer.height()

		if @content.height() < $(window).height()
			@footer.css("top",window.height() - footer_height)
		else
			@footer.css("top",@content.height() + footer_height)


	in:(done)=>
		@footer = $("footer")
		@header = new Header "header_canvas"
		@header.ready.add @on_header_ready
		@header.in()
		@wrapper = $('.wrapper');

		@menu = new Menu "#menu"

		@wrapper.tinyscrollbar()
		
		@menu.showed.add ()=>
			TweenLite.to(@footer,.5,{css:{opacity:1},delay:2})
			done?()

	on_header_ready:=>
		@menu.in()

	out:(done)->
		done?()