

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


	video_options = "api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0"

	if window.header_video_id?
		header_video = $("#header_video")
		if header_video.length > 0
			header_video.attr "src", "https://player.vimeo.com/video/"+window.header_video_id+"?"+video_options
			header_video.removeClass "fade_out"


	$("[data-video-src]").each ->
		$(this).attr "src", "https://player.vimeo.com/video/"+$(this).attr("data-video-src").split("//vimeo.com/")[1]+"?"+video_options
		$(this).removeClass "fade_out"

