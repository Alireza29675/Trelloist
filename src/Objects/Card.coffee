module.exports = class Card

	constructor: (cardData, @board)->

		@id = cardData.id
		
		@name = @text = cardData.name
		
		@desc = cardData.desc
		
		@members = []
		
		@labels = []
		
		@trelloObj = cardData

		@members.push @board.getMember memberId for memberId in cardData.idMembers

		@labels.push @board.getLabel labelId for labelId in cardData.idLabels

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