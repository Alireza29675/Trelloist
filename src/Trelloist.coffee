class Trelloist

	GLOBAL_BOARD

	init: (data, startApp) ->

		data = appName: data, boardId: null if typeof data isnt "object"

		Trello.authorize

			name: data.appName

			scope:

				read: yes

				write: yes

				account: yes

			expiration: "never"

			success: =>
				
				@key = do Trello.key
				
				@token = do Trello.token
				
				if data.boardId is null

					startApp @

				else

					@loadBoard data.boardId, startApp
		
			error: (e)=> console.error "We have some problems to login"

window.Trelloist = new Trelloist()