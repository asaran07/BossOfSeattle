import { Player } from '../src/Player.js';
import { describe, it, expect } from 'vitest';

describe('Player class', () => {
	it('should damage the other player when attackPlayer is called', () => {
		const player1 = new Player('Alice', 10, 3, 0, 0);
		const player2 = new Player('Bob', 10, 2, 0, 0);

		player1.attack(player2);

		expect(player2.health).toBe(7); // Player2 should have 7 health after being attacked by player1
	});
});
