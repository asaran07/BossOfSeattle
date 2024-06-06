export class Player {
	constructor(name) {
		this.name = name;
		this.health = 10;
		this.attack = 0;
		this.energy = 0;
		this.victory_points = 0;
		this.hand = [];
	}

	attack(otherPlayer) {
		otherPlayer.health - this.attack;
	}
}
