import { Component, OnInit } from '@angular/core';
import { Deck } from './game-objects/deck';
import { Hand } from '../../common/hand';
import { Card } from '../../common/card';

@Component({
  selector: 'app-black-jack-game',
  templateUrl: './black-jack-game.component.html',
  styleUrl: './black-jack-game.component.css'
})
export class BlackJackGameComponent implements OnInit {
  
  deck!: Deck;
  dealerHand!: Hand;
  playerHand!: Hand;

  totalPickedCards: number = 0;

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(){
    this.deck = new Deck();
    this.dealerHand = new Hand('Dealer');
    this.playerHand = new Hand('Player');
    this.deck.shuffle();

    //pick one card for the dealer
    this.addToDealerHand();

    //pick on card for the player
    this.addToPlayerHand();
  }

  addToDealerHand(){
    this.dealerHand.addCard(this.pickCard());
  }

  addToPlayerHand(){
    this.playerHand.addCard(this.pickCard());
  }

  pickCard(): Card {
    const theCard = this.deck.theDeck[this.totalPickedCards];
    this.totalPickedCards += 1;
    return theCard;
  }

}
