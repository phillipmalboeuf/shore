class Daniela.Views.Track extends Daniela.View


	events: {
		"click [data-show-fullscreen]": "show_fullscreen"
		"click .js-hide_fullscreen": "hide_fullscreen"
	}



	initialize: (options={})->

		super()



	render: ->

		this.$el.find("[data-video-src]").each =>
			this.setup_video(this, $(this).attr("data-video-src").split("//vimeo.com/")[1], this.id)

		super()



	show_fullscreen: (e)->
		e.preventDefault()
		e.stopImmediatePropagation()

		this.$el.find(".js-fullscreen").addClass "overlay--show"
		this.$el.find(".js-fullscreen_iframe").attr "src", e.currentTarget.getAttribute("data-show-fullscreen")+"?autoplay=1&color=white"


	hide_fullscreen: (e)->
		this.$el.find(".js-fullscreen").removeClass "overlay--show"

		setTimeout =>
			this.$el.find(".js-fullscreen_iframe").attr "src", ""
		, 666



	# HELPERS
	setup_video = (frame, video_id, player_id)->
		$(frame).attr "src", "https://player.vimeo.com/video/"+video_id+"?api=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&autopause=0&background=1&player_id="+player_id

		player = $f(frame)
		player.addEvent "ready", ->
			player.addEvent "play", ->
				$(frame).removeClass "fade_out"




