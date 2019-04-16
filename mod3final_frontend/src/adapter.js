const newPlayerUrl = "http://localhost:3000/api/v1/players"
const newGameUrl = "http://localhost:3000/api/v1/games"

const adapter = {
	createPlayer: playerName => {
		return fetch(newPlayerUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({ name: playerName })
		}).then(res => res.json())
	}, //end of the create Player 

	createGame: (gameData) => {
		return function newGame() {
			fetch(newGameUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(gameData)
			})
				.then(res => res.json())
				.then(console.log)
		}
	}//end of the createGame
}// end of the Adapter