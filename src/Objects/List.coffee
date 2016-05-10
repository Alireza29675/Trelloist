Globe = require "./Globe"
Card = require "./Card"

module.exports = class List extends Globe

	constructor: (listData, @boardData)->

		super

		@id = listData.id
		
		@name = listData.name
		
		@cards = []
		
		@trelloObj = listData

		do @makeReadyCards

		@

	makeReadyCards: ->

		@cards.push new Card cardData for cardData in @boardData.cards when cardData.idList is @id