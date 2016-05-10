Globe = require "./Globe"

module.exports = class Card extends Globe

	constructor: (cardData)->

		@id = cardData.id
		
		@name = @text = cardData.name
		
		@desc = cardData.desc
		
		@members = []
		
		@labels = []
		
		@trelloObj = cardData