

$ ->
	console.log "I like this digital age."


	$("[data-scroll-to]").click (e)->
		scroll_to = $("#"+e.currentTarget.getAttribute("data-scroll-to"))

		if scroll_to.length > 0
			console.log scroll_to.css("visibility")
			if scroll_to.hasClass("biography")

			else
				e.preventDefault()
				scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" })
