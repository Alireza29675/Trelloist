Trelloist.init({

	appName: "Tester",
	boardId: "572ed3b95456d589fa46d855"

}, function( board ){

	console.log(board);

	var Card = board.getList(0).getCard(0);

	var Alireza = board.getMember(0);

	Card.removeMember( Alireza );

	Card.moveTo( board.getList(1) );

})