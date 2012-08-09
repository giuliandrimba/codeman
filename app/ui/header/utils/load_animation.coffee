class LoadAnimation

	constructor:(url, callback)->
		load_json url, (data)=>
			spritesheet = new SpriteSheet data
			callback?(data,spritesheet)