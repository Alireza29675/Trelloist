api = require "./Utilites/trelloAPI"

self.Trello = {}

self.lastDate

self.lastDateSet = no

getUpdateActions = ->

	postParams =

		filter: "all"

		fields: "all"

		limit: 50

	postParams.since = self.lastDate if self.lastDateSet

	API = new api "/boards/#{self.boardId}/actions", postParams

	API.run "GET", (actionsData) =>

		if actionsData.length isnt 0

			if self.lastDateSet then self.postMessage(actionsData) else self.lastDateSet = yes

			self.lastDate = actionsData[0].date

	setTimeout((-> getUpdateActions()), 1000)

self.addEventListener 'message', (e)->

	switch e.data.cmd

		when "start"

			Trello.token = -> e.data.token

			Trello.key = -> e.data.key

			self.boardId = e.data.boardId

			do getUpdateActions
	
, false