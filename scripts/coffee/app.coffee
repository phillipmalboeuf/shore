

$ ->
	console.log "I like this digital age."


	$("[data-scroll-to]").click (e)->
		scroll_to = $("#"+e.currentTarget.getAttribute("data-scroll-to"))

		if scroll_to.length > 0
			e.preventDefault()
			e.stopImmediatePropagation()

			if scroll_to.css("visibility") == "hidden"
				scroll_to.addClass "overlay--show"

			else				
				scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" })
