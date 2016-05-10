module.exports = class Card

	constructor: (cardData)->

		@id = cardData.id
		
		@name = @text = cardData.name
		
		@desc = cardData.desc
		
		@members = []
		
		@labels = []
		
		@trelloObj = cardData