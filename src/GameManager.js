import { Player } from "./Player.js";
import { Ability } from "./Ability.js";
import { Card } from "./Card.js";

export class GameManager {
	constructor() {
		this.players = [];
		this.deck = [];
		this.shop = [];
		this.dice = [];
		this.currentPlayer = null;
	}

	getCurrentPlayer() {
		let player = new Player();
		player = this.currentPlayer;
		return player;
	}

	addPlayer(name) {
		let player = new Player(name);
		this.players.push(player);
		if (this.currentPlayer === null) {
			this.currentPlayer = player;
		}
	}

	createCard(name, ability) {
		const card = new Card(name, ability);
		this.deck.push(card);
	}

	fillShop() {

	}

	nextPlayer() {
		const currentPlayerIndex = this.players.findIndex(player => player.name === this.currentPlayer.name);
		this.currentPlayer = this.players[currentPlayerIndex + 1];
	}

	toString() {
		const playerStrings = this.players.map(player => player.toString());
		return `Players: ${playerStrings} \nCurrent Player: ${this.currentPlayer.name}`;
	}
}
