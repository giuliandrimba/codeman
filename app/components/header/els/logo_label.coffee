class LogoLabel extends Bitmap

	constructor:(img)->
		@initialize img

		@x = 209
		@y = 100

	in:(callback)->
		callback?()

