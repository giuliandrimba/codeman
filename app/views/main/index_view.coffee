#<< app/views/app_view
#<< app/ui/header/header
#<< app/ui/menu/menu

class IndexView extends app.views.AppView

	Header = app.ui.header.Header
	Menu = app.ui.menu.Menu

	set_triggers:->

		$(window).resize (=>
			$(".wrapper").find(".viewport").height(window.height())
			$(".wrapper").tinyscrollbar_update()
		)

	in:(done)=>
		@header = new Header "header_canvas"
		@header.ready.add @on_header_ready
		@header.in()

		@menu = new Menu "#menu"

		$('.wrapper').tinyscrollbar()
		
		@menu.showed.add ()=>
			done?()

	on_header_ready:=>
		@menu.in()

	out:(done)->
		done?()