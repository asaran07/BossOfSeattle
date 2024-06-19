export class Player {
	constructor(name) {
		this.name = name;
		this.health = 10;
		this.attackNum = 0;
		this.energy = 0;
		this.victory_points = 0;
		this.hand = [];
		this.keptDice = [];
		this.unkeptDice = [];
	}

	attack(otherPlayer) {
		otherPlayer.health = otherPlayer.health - this.attackNum;
	}

	rollDiceSet(diceSet) {
		// probably should add a check to make sure dice set isn't empty
		for (let i = 0; i < diceSet.length(); i++) {
			const die = diceSet[i];
			this.keptDice.push(die);
		}
	}

	holdDice(diceSet) {
		this.unkeptDice = diceSet;
	}

	toString() {
		return `\nName: ${this.name} \nHealth: ${this.health} \nAttack: ${this.attackNum} \nEnergy: ${this.energy} \nVictory Points: ${this.victory_points}`;
	}

	printUnkeptDice() {
		for (let i = 0; i < this.unkeptDice.length; i++) {
			console.log(this.unkeptDice[i].toString());
		}
	}

	printKeptDice() {
		for (let i = 0; i < this.keptDice.length; i++) {
			console.log(this.keptDice[i].toString());
		}
	}

}

