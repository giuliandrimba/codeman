#<< app/ui/header/els/base/basic_el

class Line extends app.ui.header.els.base.BasicEl

	constructor:(x,y,size,color, put_shadow = true)->
		super()
		@easing = size / 10
		@final_x = x + size
		@final_y = y + size
		@init_x = x
		@init_y = y
		@current_x = @init_x
		@size = 0
		@color = color
		@shadow = new Shadow "#878787", -5, 1, 2

		@graphic = new Graphics
		@graphic.beginStroke @color
		@graphic.setStrokeStyle 1
		@graphic.moveTo x,y
		@shape = new Shape @graphic
		@shape.shadow = @shadow if put_shadow

	in:()->
		@stage.addChild @shape
		Ticker.addListener @drawLine

	drawLine:=>
		@size += @easing
		@easing -= (@easing / 10)

		@easing = 0 if @easing <= 0

		@finished() if @current_x >= (@final_x - 0.1)
		@current_x = @init_x + @size
		@graphic.lineTo (@init_x + @size), (@init_y + @size)

	finished:->
		Ticker.removeListener @drawLine
		@_done()