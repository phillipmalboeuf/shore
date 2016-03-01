

$ ->
	console.log "I like this digital age."


	header = $(".js-header")
	previous_offset = 0

	$(window).scroll (e)->
		console.log window.pageYOffset
		if window.pageYOffset > previous_offset+500 and not header.hasClass "header--hide"
			header.addClass "header--hide"

		else if header.hasClass "header--hide"
			header.removeClass "header--hide"			


		previous_offset = window.pageYOffset



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
			

	$("[data-video-src]").each ->
		window.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1], this.id)



window.setup_video = (frame, video_id, player_id)->
	$(frame).attr "src", "https://player.vimeo.com/video/"+video_id+"?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id="+player_id

	player = $f(frame)
	player.addEvent "ready", ->
		player.addEvent "play", ->
			$(frame).removeClass "fade_out"





