

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


	video_options = 

	if window.header_video_id?
		video_header = $("#video_header")
		if video_header.length > 0
			window.setup_video(video_header[0], window.header_video_id, "video_header")
			

	# $("[data-video-src]").each ->
	# 	window.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1])



window.setup_video = (frame, video_id, player_id)->
	$(frame).attr "src", "https://player.vimeo.com/video/"+video_id+"?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&player_id="+player_id

	player = $f(frame)
	player.addEvent "ready", ->
		player.addEvent "play", ->
			$(frame).removeClass "fade_out"



