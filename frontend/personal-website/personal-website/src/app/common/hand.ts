import { Card } from "./card";

export class Hand {
    constructor(
        public handName: string,
        public handValue: number = 0,
        public cards: Card[] = [],
        public wins: number = 0
    ){}

    addCard(theCard: Card){
        this.handValue += theCard.value;
        this.cards.push(theCard);
    }

    emptyHand(){
        this.cards = [];
        this.handValue = 0;
    }

    toString(): string{
        let cardsStr = '';
        if(this.cards.length === 0){
            return `${this.handName}, ${this.handValue}, Hand: Empty, ${this.wins}`;
        } else {
            return `${this.handName}, ${this.handValue}, \nHand:` + String(this.cards.forEach(card => '[' + card.toString() + ']\n')) + this.wins;
        }
    }
}
