class Daniela.Views.SocialLinks extends Daniela.View


	links_template: templates["social_links"]


	initialize: (options={})->

		super()


	render: ->
		console.log window.social_links
		this.$el.html @links_template({links: window.social_links})

		super()