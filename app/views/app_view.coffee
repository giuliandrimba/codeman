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

	constructor:->
		super()
		window.preloader = @preloader

	in:->

		@content = $(".wrapper").find(".content")
		@page_content = $("#page_content");

		@footer = $("footer")
		footer_height = @footer.height()

		content_height = @page_content.height() + $("header").height() + footer_height

		if content_height < window.height()
			@content.height(window.height() - footer_height) 
		else
			@content.height(content_height + footer_height)


		if content_height < $(window).height()
			@footer.css("top",window.height() - footer_height)
		else
			@footer.css("top",@content.height() - footer_height)

		@update_scroll()