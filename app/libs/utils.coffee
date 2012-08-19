window.width = ->
	if typeof (window.innerWidth) is "number"

		#Non-IE 
		return window.innerWidth
	else if document.documentElement and (document.documentElement.clientWidth or document.documentElement.clientHeight)

		#IE 6+ in 'standards compliant mode' 
		return document.documentElement.clientWidth
	else if document.body and (document.body.clientWidth or document.body.clientHeight)

		#IE 4 compatible 
		return document.body.clientWidth

window.height = ->
	if typeof (window.innerHeight) is "number"

		#Non-IE 
		return window.innerHeight
	else if document.documentElement and (document.documentElement.clientWidth or document.documentElement.clientHeight)

		#IE 6+ in 'standards compliant mode' 
		return document.documentElement.clientHeight
	else if document.body and (document.body.clientWidth or document.body.clientHeight)

		#IE 4 compatible 
		return document.body.clientHeight