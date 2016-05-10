Card = require "./Card"

module.exports = class List

	constructor: (listData, @board)->

		@id = listData.id
		
		@name = listData.name
		
		@cards = []
		
		@trelloObj = listData

		do @makeReadyCards

		@

	makeReadyCards: ->

		@cards.push new Card cardData, @board for cardData in @board.trelloObj.cards when cardData.idList is @id

	getCard: (id)->

		if typeof id is "string"

			return card for card in @cards when card.id is id

			return undefined

		return this.cards[id]