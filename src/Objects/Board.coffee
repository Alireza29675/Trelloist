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

		@labels.push new Label labelData for labelData in boardData.labels

		@makeReadyLists =>

			onReady @

		@

	makeReadyLists: (onReady)->

		@lists.push new List listData, @ for listData in @trelloObj.lists

		do onReady

	getList: (id)->

		if typeof id is "string"

			return list for list in @lists when list.name is id

			return undefined

		return this.lists[id]

	getMember: (id)->

		if typeof id is "string"

			return member for member in @members when member.id is id

			return undefined

		return this.members[id]

	getMemberByUsername: (username)->

		return member for member in @members when member.username is username

		return undefined

	getLabel: (id)->

		if typeof id is "string"

			return label for label in @labels when label.id is id

			return undefined

		return this.labels[id]

	getLabelByColor: (color)->

		return label for label in @labels when label.color is color

		return undefined

	getLabelByName: (name)->

		return label for label in @labels when label.name is name

		return undefined