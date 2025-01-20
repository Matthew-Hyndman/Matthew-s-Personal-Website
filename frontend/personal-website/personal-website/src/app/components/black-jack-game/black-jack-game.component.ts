import { Component, OnInit } from '@angular/core';
import { Deck } from './game-objects/deck';
import { Hand } from '../../common/hand';
import { Card } from '../../common/card';
import Swal from 'sweetalert2';

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

  constructor() {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame() {
    this.deck = new Deck();
    this.deck.shuffle();

    if (this.isFirstGame) {
      this.dealerHand = new Hand('Dealer');
      this.playerHand = new Hand('Player');
      this.isFirstGame = false;
    } else {
      this.dealerHand.emptyHand();
      this.playerHand.emptyHand();
    }
    
    this.totalPickedCards = 0;
    
    //pick one card for the dealer
    this.addToDealerHand();

    //pick on card for the player
    this.addToPlayerHand();

    
  }

  addToDealerHand() {
    const newCard = this.pickCard();
    this.dealerHand.addCard(newCard);
    console.log(
      `dealer picked: [${newCard.suit}][${newCard.value}][${newCard.imageUrl}]`
    );
  }

  addToPlayerHand() {
    const newCard = this.pickCard();
    this.playerHand.addCard(newCard);
    console.log(
      `player picked: [${newCard.suit}][${newCard.value}][${newCard.imageUrl}]`
    );
  }

  pickCard(): Card {
    const theCard = this.deck.theDeck[this.totalPickedCards];
    this.totalPickedCards += 1;
    return theCard;
  }

  playerPickCard() {
    //needs logic to consider when the player has to many points to then go bust
    this.addToPlayerHand();
    if (this.playerHand.handValue > 21) {
      this.Bust(this.playerHand);
    }
  }

  stay() {
    const playerScore = this.playerHand.handValue;
    let dealerScore = this.dealerHand.handValue;
    do {
      if (dealerScore < 21) {
        this.addToDealerHand();
        if (this.dealerHand.handValue > 21) {
          this.Bust(this.dealerHand);
          return;
        }
      } else if (dealerScore === 21) {
        //dealer reached best hand value
        break;
      } else if (dealerScore > 21) {
        //dealer goes bust
        this.Bust(this.dealerHand);
        return;
      }
      dealerScore = this.dealerHand.handValue;
    } while (!this.isDealerScoreMoreThanPlayerScore());

    //final dealer score not assined

    if (dealerScore === playerScore) {
      //a draw between the player and the dealer
      this.startNewGame();
      Swal.fire({
        title: 'Draw!',
        text: `you scored: ${this.playerHand.handValue} | dealer scored: ${this.dealerHand.handValue}`,
        draggable: true,
      });
    } else if (this.isDealerScoreMoreThanPlayerScore()) {
      //player loses
      this.Bust(this.playerHand);
    } else {
      //player wins
      this.Bust(this.dealerHand);
    }
  }

  isDealerScoreMoreThanPlayerScore(): boolean {
    return this.dealerHand.handValue > this.playerHand.handValue;
  }

  Bust(theHand: Hand) {
    if (theHand.handName === 'Dealer') {
      this.playerHand.wins += 1;
      Swal.fire({
      title: 'You Win!!!',
      text: `you scored: ${ this.playerHand.handValue } | dealer scored: ${this.dealerHand.handValue}`,
      imageUrl: 'assets/images/trophy.png',
      draggable: true
      });
    } else {
      this.dealerHand.wins += 1;
      Swal.fire({
      title:'You Lost',
      text:`you scored: ${ this.playerHand.handValue } | dealer scored: ${this.dealerHand.handValue}`,
      icon: 'error',
      draggable: true
      });
    }
    this.handThatWentBust = theHand;
    this.startNewGame();
  }
}
