# MAIN
match "/main"
	to: "main/index"
	at: null
	el: "body"

match "/works"
	to: "works/index"
	at: "/main"
	el: "#page_content"

match "/works/:id"
	to: "works/show"
	at: "/main"
	el: "#page_content"

match "/about"
	to: "about/index"
	at: "/main"
	el: "#page_content"

match "/contact"
	to: "contact/index"
	at: "/main"
	el: "#page_content"

# DEFAULT ROUTE
root "/works"