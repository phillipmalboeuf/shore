

$ ->
	console.log "I like this digital age."


	$(document).click "js-scroll_to", (e)->
		e.preventDefault()
		
		console.log e.currentTarget 
