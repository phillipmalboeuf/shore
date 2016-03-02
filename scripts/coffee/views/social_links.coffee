class Daniela.Views.SocialLinks extends Daniela.View


	links_template: templates["social_links"]


	initialize: (options={})->

		super()


	render: ->
		this.$el.html @links_template({links: window.social_links})

		super()