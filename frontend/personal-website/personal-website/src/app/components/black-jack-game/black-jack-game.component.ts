import { Component, OnInit } from '@angular/core';
import { Deck } from './game-objects/deck';
import { Hand } from '../../common/hand';
import { Card } from '../../common/card';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-black-jack-game',
  templateUrl: './black-jack-game.component.html',
  styleUrl: './black-jack-game.component.css',
})
export class BlackJackGameComponent implements OnInit {
  deck!: Deck;
  dealerHand!: Hand;
  playerHand!: Hand;

  totalPickedCards: number = 0;

  isFirstGame = true;

  handThatWentBust!: Hand;

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame() {
    this.deck = new Deck();
    this.deck.shuffle();
    /*
      you are going to need to take prvious games into consideration
      for the Dealer and Player win counter (lines 31 & 32)
    */
    if (this.isFirstGame) {
      this.dealerHand = new Hand('Dealer');
      this.playerHand = new Hand('Player');
      this.isFirstGame = false;
    } else {
      this.dealerHand.emptyHand();
      this.playerHand.emptyHand();
    }

    //pick one card for the dealer
    this.addToDealerHand();

    //pick on card for the player
    this.addToPlayerHand();
  }

  addToDealerHand() {
    const newCard = this.pickCard();
    this.dealerHand.addCard(newCard);
    console.log(`dealer picked: [${newCard.suit}][${newCard.value}]`);
  }

  addToPlayerHand() {
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
    //needs logic to consider when the player has to many points to then go bust
    this.addToPlayerHand();
  }

  stay() {
    const playerScore = this.playerHand.handValue;
    let dealerScore = 0;
    do {
      dealerScore = this.dealerHand.handValue;
      if (!this.isDealerScoreMoreThanPlayerScore()) {
        if (dealerScore < 21) {
          this.addToDealerHand();
        } else if (dealerScore === 21) {
          //dealer reached best hand value
          break;
        } else if (dealerScore > 21) {
          //dealer goes bust
          this.Bust(this.dealerHand);
        }
      }
    } while (this.isDealerScoreMoreThanPlayerScore());

    if (dealerScore === playerScore) {
      //a draw between the player and the dealer
      this.startNewGame();
    } 
    else if (this.isDealerScoreMoreThanPlayerScore()) {
      //player loses
      this.Bust(this.playerHand)
    }
    else {
      //player wins
      this.Bust(this.dealerHand);
    }
  }

  isDealerScoreMoreThanPlayerScore(): boolean {
    return this.dealerHand.handValue < this.playerHand.handValue;
  }

  Bust(theHand: Hand) {
    if (theHand.handName === 'Dealer') {
      this.playerHand.wins += 1;
    } else {
      this.dealerHand.wins += 1;
    }
    this.handThatWentBust = theHand;
    this.startNewGame();
  }
}
