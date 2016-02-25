

$ ->
	console.log "I like this digital age."


	$("[data-scroll-to]").click (e)->
		scroll_to = $("#"+e.currentTarget.getAttribute("data-scroll-to"))

		if scroll_to.length > 0
			e.preventDefault()
			e.stopImmediatePropagation()

			if scroll_to.hasClass("overlay")
				scroll_to.addClass "overlay--show"

			else				
				scroll_to.velocity("scroll", { duration: 2000, easing: "easeOutQuart" })


	$("[data-hide-overlay]").click (e)->
		$("#"+e.currentTarget.getAttribute("data-hide-overlay")).removeClass "overlay--show"



	$("[data-video-src]").each ->
		$(this).attr "src", "//www.youtube.com/embed/"+$(this).attr("data-video-src").split("//youtu.be/")[1]+"?wmode=opaque&enablejsapi=1&showinfo=0&autoplay=1&loop=1&controls=0"


