import { Card } from "./card";

export class Hand {
    constructor(
        public handName: string,
        public handValue: number = 0,
        public cards: Card[] = []
    ){}

    addCard(theCard: Card){
        this.handValue += theCard.value;
        this.cards.push(theCard);
    }
}
