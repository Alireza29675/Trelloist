# 
# Trelloist.
# @author Alireza Sheikholmolouki / @alireza29675
# 

api = require "./trelloAPI"
Board = require "./Objects/Board"

class Trelloist

	init: (data, startApp) ->

		@GLOBAL_BOARD = null;

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

	loadBoard: (boardId, onSuccess) ->

		API = new api "/boards/#{boardId}",

			lists: "open"

			members: "all"

			member_fields: "all"

			list_fields: "all"

			fields: "name"

			labels: "all"

			label_fields: "all"

			cards: "all"

			card_fields: "all"

		API.run "GET", (boardData) =>

			@GLOBAL_BOARD = new Board boardData, (board)=>

				onSuccess board

		@

window.Trelloist = new Trelloist()