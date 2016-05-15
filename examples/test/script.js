Trelloist.init({

	appName: "Tester",
	boardId: "572ed3b95456d589fa46d855",
	workerFile: "../../test/TrelloistWorker.js"

}, function( board ){

	board.getActions(function(actions){
		console.log(actions);
	});

})