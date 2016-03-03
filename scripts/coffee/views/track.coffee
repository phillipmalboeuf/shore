class Daniela.Views.Track extends Daniela.View


	events: {
		"click [data-show-fullscreen]": "show_fullscreen"
		"click .js-hide_fullscreen": "hide_fullscreen"
	}



	initialize: (options={})->

		super()



	render: ->

		video = this.$el.find("[data-video-src]")[0]
		if $(video).attr("data-video-src")?
			this.setup_video(video, $(video).attr("data-video-src").split("//vimeo.com/")[1], video.id)

		super()



	show_fullscreen: (e)->
		e.preventDefault()
		e.stopImmediatePropagation()

		if document.documentElement.requestFullscreen
			document.documentElement.requestFullscreen()
		else if document.documentElement.msRequestFullscreen
			document.documentElement.msRequestFullscreen()
		else if document.documentElement.mozRequestFullScreen
			document.documentElement.mozRequestFullScreen()
		else if document.documentElement.webkitRequestFullscreen
			document.documentElement.webkitRequestFullscreen()

		this.$el.find(".js-fullscreen").addClass "overlay--show"
		this.$el.find(".js-fullscreen_iframe").attr "src", e.currentTarget.getAttribute("data-show-fullscreen")+"?autoplay=1&color=white"


	hide_fullscreen: (e)->
		if document.documentElement.exitFullscreen
			document.documentElement.exitFullscreen()
		else if document.documentElement.msExitFullscreen
			document.documentElement.msExitFullscreen()
		else if document.documentElement.mozCancelFullScreen
			document.documentElement.mozCancelFullScreen()
		else if document.documentElement.webkitExitFullscreen
			document.documentElement.webkitExitFullscreen()

		this.$el.find(".js-fullscreen").removeClass "overlay--show"
		setTimeout =>
			this.$el.find(".js-fullscreen_iframe").attr "src", ""
		, 666





	# HELPERS
	setup_video: (frame, video_id, player_id)->
		$(frame).attr "src", "https://player.vimeo.com/video/"+video_id+"?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id="+player_id

		player = $f(frame)
		player.addEvent "ready", ->
			player.addEvent "play", ->
				$(frame).removeClass "fade_out"




