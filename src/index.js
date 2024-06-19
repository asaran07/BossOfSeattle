"use strict"
import { Die } from './Die.js';
import { GameManager } from './GameManager.js';
import { Player } from './Player.js';


const gameManager = new GameManager();
gameManager.addPlayer("Player1");
gameManager.addPlayer("Player2");

// console.log(gameManager.toString());

gameManager.getCurrentPlayer().attackNum = 2;
let player2 = new Player("player2");
gameManager.getCurrentPlayer().attack(player2);

let die1 = new Die();
let die2 = new Die();
let die3 = new Die();
let die4 = new Die();
let die5 = new Die();
let die6 = new Die();
die1.roll();
die2.roll();
die3.roll();
die4.roll();
die5.roll();
die6.roll();
const diceSet = [die1, die2, die3, die4, die5, die6];

player2.holdDice(diceSet);
player2.printUnkeptDice();
