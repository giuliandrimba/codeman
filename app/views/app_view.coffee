#<< theoricus/mvc/view

class AppView extends theoricus.mvc.View

	preloader:
		show:->
			$("#preloader").css "display", "block"
		hide:->
			$("#preloader").css "display", "none"

	update_scroll:->
		$(".wrapper").find(".viewport").height(window.height())
		$(".wrapper").tinyscrollbar_update()