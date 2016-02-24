

$ ->
	console.log "I like this digital age."


	$("[data-scroll-to]").click (e)->
		scroll_to = $("#"+e.currentTarget.getAttribute("data-scroll-to"))

		if scroll_to.length > 0 and !scroll_to.hasClass("biography")
			e.preventDefault()
			scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" })
