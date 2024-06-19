export class Die {
	constructor() {
		this.sides = [
			'1 Victory Point',
			'2 Victory Points',
			'3 Victory Points',
			'Energy',
			'Health',
			'Attack'
		]
		this.currentSide = null;
	}

	roll() {
		const randomSide = Math.floor(Math.random() * this.sides.length);
		this.currentSide = this.sides[randomSide];
	}

	toString() {
		return this.currentSide;
	}
}
