class Menu

	constructor:(menu_id)->
		@menu = $ menu_id

	in:->
		TweenLite.to @menu, 0.5, {css:{opacity:1}, ease:Quad.easeOut, delay:3}