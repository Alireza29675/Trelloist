Globe = require "./Globe"
List = require "./List"

module.exports = class Board extends Globe

	constructor: (boardData, onReady)->

		super

		@id = boardData.id

		@name = boardData.name

		@lists = []

		@members = []

		@labels = []

		@trelloObj = boardData

		@makeReadyLists =>

			onReady @

		@

	makeReadyLists: (onReady)->

		@lists.push new List listData, @trelloObj for listData in @trelloObj.lists

		do onReady