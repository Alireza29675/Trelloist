List = require "./List"
Member = require "./Member"
Label = require "./Label"

module.exports = class Board

	constructor: (boardData, onReady)->

		@id = boardData.id

		@name = boardData.name

		@lists = []

		@members = []

		@labels = []

		@trelloObj = boardData

		@members.push new Member memberData for memberData in boardData.members

		@labels.push new Label labelData for labelData in boardData.label

		@makeReadyLists =>

			onReady @

		@

	makeReadyLists: (onReady)->

		@lists.push new List listData, @trelloObj for listData in @trelloObj.lists

		do onReady

	getList: (id)->

		if typeof id is "string"

			return list for list in @lists when list.name is id

			return undefined;

		return this.lists[id]