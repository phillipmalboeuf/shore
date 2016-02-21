

$ ->
	console.log "I like this digital age."


	$("[data-scroll-to]").click (e)->
		e.preventDefault()

		console.log e.currentTarget.getAttribute("data-scroll-to")
		console.log $("#"+e.currentTarget.getAttribute("data-scroll-to"))
