import { Player } from "./Player";
import { Ability } from "./Ability";
import { Card } from "./Card";

export class GameManager {
	constructor() {
		this.players = [];
		this.deck = [];
		this.shop = [];
	}

	addPlayer(name) {
		const player = new Player(name);
		this.players.push(player);
	}

	createCard(name, ability) {
		const card = new Card(name, ability);
		this.deck.push(card);
	}

	fillShop() {

	}
}
