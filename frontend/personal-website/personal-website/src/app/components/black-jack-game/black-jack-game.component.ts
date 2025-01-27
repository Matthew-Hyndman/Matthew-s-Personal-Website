import { Component, OnInit } from '@angular/core';
import { Deck } from './game-objects/deck';
import { Hand } from '../../common/hand';
import { Card } from '../../common/card';
import Swal from 'sweetalert2';

const MAX_HAND_VALUE = 21;

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

  pot: number = 0;
  bet: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.startNewGame();
  }

  async startNewGame() {
    this.deck = new Deck();
    this.deck.shuffle();

    if(this.pot <= 0){
      this.pot = 1000;
    }

    if (this.isFirstGame) {
      this.dealerHand = new Hand('Dealer');
      this.playerHand = new Hand('Player');
      this.isFirstGame = false;
    } else {
      this.dealerHand.emptyHand();
      this.playerHand.emptyHand();
    }

    let betDile = this.bet;

    await Swal.fire({
      title: 'How many tokens are you betting',
      allowOutsideClick: false,
      draggable: true,
      html: `
    <input
      type="number"
      value="${this.pot}"
      step="1"
      class="swal2-input"
      id="range-value">`,
      input: 'range',
      inputAttributes: {
        min: '0',
        max: String(this.pot),
        step: '1',
      },
      didOpen: () => {
        const inputRange = Swal.getInput()!;
        const inputNumber = Swal.getPopup()!.querySelector(
          '#range-value'
        ) as HTMLInputElement;

        // remove default output
        Swal.getPopup()!.querySelector('output')!.style.display = 'none';
        inputRange.style.width = '100%';

        // sync input[type=number] with input[type=range]
        inputRange.addEventListener('input', () => {
          inputNumber.value = inputRange.value;
          this.bet = Number(inputNumber.value);
        });

        // sync input[type=range] with input[type=number]
        inputNumber.addEventListener('change', () => {
          inputRange.value = inputNumber.value;
          this.bet = Number(inputNumber.value);
        });
      },
    });

    this.pot -= this.bet;

    this.totalPickedCards = 0;

    //pick one card for the dealer
    this.addToHand(this.dealerHand);

    //pick on card for the player
    this.addToHand(this.playerHand);
  }

  addToHand(theHand: Hand) {
    const newCard = this.pickCard();
    try {
      theHand.addCard(newCard);
      console.log(
        `${theHand.handName} picked: [${newCard.suit}][${newCard.value}][${newCard.imageUrl}]`
      );
    } catch (error) {
      const errorFound = `${theHand.handName} Data:\nthe new Card [${String(
        newCard.toString()
      )}], \nHand Data:\n ${String(
        theHand.toString()
      )}\nerror message:\n${error}`;
      console.log(errorFound);
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: errorFound,
      });
    }
  }

  pickCard(): Card {
    const theCard = this.deck.theDeck[this.totalPickedCards];
    this.totalPickedCards += 1;
    return theCard;
  }

  playerPickCard() {
    this.addToHand(this.playerHand);
    if (this.playerHand.handValue > 21) {
      this.Bust(this.playerHand);
    }
  }

  async stay() {
    const playerScore = this.playerHand.handValue;
    let dealerScore = this.dealerHand.handValue;
    do {
      this.addToHand(this.dealerHand);
      dealerScore = this.dealerHand.handValue;
      if (dealerScore > MAX_HAND_VALUE) {
        this.Bust(this.dealerHand);
        return;
      }
    } while (!this.isDealerScoreMoreThanPlayerScore());

    //final dealer score not assined

    if (dealerScore === playerScore) {
      //a draw between the player and the dealer

      await Swal.fire({
        title: 'Draw!',
        text: `you scored: ${this.playerHand.handValue} | dealer scored: ${this.dealerHand.handValue}`,
        draggable: true,
        didClose: () => {
          this.pot += this.bet;
        },
      });

      this.startNewGame();
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

  async Bust(theHand: Hand) {
    if (theHand.handName === 'Dealer') {
      this.playerHand.wins += 1;
      await Swal.fire({
        title: 'You Win!!!',
        text: `you scored: ${this.playerHand.handValue} | dealer scored: ${this.dealerHand.handValue}`,
        imageUrl: 'assets/images/trophy.png',
        draggable: true,
        didClose: () => {},
      });
      this.pot += (2 * this.bet);
    } else {
      this.dealerHand.wins += 1;
      let lossType = '';

      if (this.isDealerScoreMoreThanPlayerScore()) {
        lossType = 'You Lost';
      } else {
        lossType = 'Bust!';
      }

      await Swal.fire({
        title: lossType,
        text: `you scored: ${this.playerHand.handValue} | dealer scored: ${this.dealerHand.handValue}`,
        icon: 'error',
        draggable: true,
        didClose: () => {},
      });
    }
    this.handThatWentBust = theHand;
    this.startNewGame();
  }
}
