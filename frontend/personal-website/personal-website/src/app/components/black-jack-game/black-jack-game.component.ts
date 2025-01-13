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
    const newCard = this.pickCard();
    this.dealerHand.addCard(newCard);
    console.log(`dealer picked: [${newCard.suit}][${newCard.value}]`);
  }

  addToPlayerHand(){
    const newCard = this.pickCard();
    this.playerHand.addCard(newCard);
    console.log(`player picked: [${newCard.suit}][${newCard.value}]`);
  }

  pickCard(): Card {
    const theCard = this.deck.theDeck[this.totalPickedCards];
    this.totalPickedCards += 1;
    return theCard;
  }

  playerPickCard() {
    this.addToPlayerHand()
  }

  stay() {
    const playerScore = this.playerHand.handValue;
    let dealerScore = 0;
    let didPlayerWin = false;
    do{

      dealerScore = this.dealerHand.handValue;
      if (!this.isDealerScoreMoreThanPlayerScore()) {
        
        if (dealerScore < 21) {
          
          this.addToDealerHand();

        } else if (dealerScore === 21){
          
          break;

        } else {
          
          this.Bust();

        }
        
      } else {
        //set up loose behaviour and reaction
      }
       

    }while(this.isDealerScoreMoreThanPlayerScore())
  }

  isDealerScoreMoreThanPlayerScore(): boolean{
    return this.dealerHand.handValue < this.playerHand.handValue;
  }

  Bust(){

  }
}
