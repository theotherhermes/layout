var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0;

	ships: [{ location: ['', '', ''], hits: ['', '', ''] },
	{ location: ['', '', ''], hits: ['', '', ''] },
	{ location: ['', '', ''], hits: ['', '', ''] }]
}

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = ducument.getElementById("location");
		cell.setAttribute("class", "hit");
	},

	diplatMiss: function(location) {
		var cell = document.getElementById("location");
		cell.setAttribute("class", "miss");
	}
};
