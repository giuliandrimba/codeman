class Drop

	config:->
		@drop
		@drop_bg
		@x = 0
		@y = 0
		@scale = 1

	constructor:(x, y, scale)->
		@config()
		@x = x
		@y = y
		@scale = scale

	in:(callback)->

	add_bg:(img)->
		@drop_bg = new Bitmap img
		@drop_bg.x = @x + 5
		@drop_bg.y = @y + 5
		@drop_bg.scaleX = @drop_bg.scaleY = @scale

	add_drop:(img)->
		@drop = new Bitmap img
		@drop.x = @x
		@drop.y = @y
		@drop.scaleX = @drop.scaleY = @scale

	add_at:(stage)->
		stage.addChild @drop_bg
		stage.addChild @drop
		stage.update()