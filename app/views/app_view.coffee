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

	in:->
		@content = $(".wrapper").find(".content")
		@content.height(window.height()) if @content.height() < window.height()

		@footer = $("footer")
		footer_height = @footer.height()

		if @content.height() < $(window).height()
			@footer.css("top",window.height() - footer_height)
		else
			@footer.css("top",@content.height() + footer_height)