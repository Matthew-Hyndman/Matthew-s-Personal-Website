import { Card } from "../../../common/card";

export class Deck {
    public theDeck: Card[] = undefined!;

    public placeHolderCard: Card = new Card('n/a', 'n/a', 0, 'public/assets/images/cards/Default_Deck/EmptySpace.jpg');

    constructor(){
        //Clubs
        this.theDeck.push(new Card('2', 'Clubs', 2, 'public/assets/images/cards/Default_Deck/Clubs2.jpg'));
        this.theDeck.push(new Card('3', 'Clubs', 3, 'public/assets/images/cards/Default_Deck/Clubs3.jpg'));
        this.theDeck.push(new Card('4', 'Clubs', 4, 'public/assets/images/cards/Default_Deck/Clubs4.jpg'));
        this.theDeck.push(new Card('5', 'Clubs', 5, 'public/assets/images/cards/Default_Deck/Clubs5.jpg'));
        this.theDeck.push(new Card('6', 'Clubs', 6, 'public/assets/images/cards/Default_Deck/Clubs6.jpg'));
        this.theDeck.push(new Card('7', 'Clubs', 7, 'public/assets/images/cards/Default_Deck/Clubs7.jpg'));
        this.theDeck.push(new Card('8', 'Clubs', 8, 'public/assets/images/cards/Default_Deck/Clubs8.jpg'));
        this.theDeck.push(new Card('9', 'Clubs', 9, 'public/assets/images/cards/Default_Deck/Clubs9.jpg'));
        this.theDeck.push(new Card('10', 'Clubs', 10, 'public/assets/images/cards/Default_Deck/Clubs10.jpg'));
        this.theDeck.push(new Card('Jack', 'Clubs', 10, 'public/assets/images/cards/Default_Deck/JackofClubs.jpg'));
        this.theDeck.push(new Card('Queen', 'Clubs', 10, 'public/assets/images/cards/Default_Deck/QueenofClubs.jpg'));
        this.theDeck.push(new Card('King', 'Clubs', 10, 'public/assets/images/cards/Default_Deck/KingofClubs.jpg'));
        this.theDeck.push(new Card('Ace', 'Clubs', 11, 'public/assets/images/cards/Default_Deck/ClubsAce.jpg'));

        //Dims
        this.theDeck.push(new Card('2', 'Dim', 2, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('3', 'Dim', 3, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('4', 'Dim', 4, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('5', 'Dim', 5, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('6', 'Dim', 6, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('7', 'Dim', 7, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('8', 'Dim', 8, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('9', 'Dim', 9, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('10', 'Dim', 10, 'public/assets/images/cards/Default_Deck/Dim2.jpg'));
        this.theDeck.push(new Card('Jack', 'Dim', 10, 'public/assets/images/cards/Default_Deck/JackofDim.jpg'));
        this.theDeck.push(new Card('Queen', 'Dim', 10, 'public/assets/images/cards/Default_Deck/QueenofDim.jpg'));
        this.theDeck.push(new Card('King', 'Dim', 10, 'public/assets/images/cards/Default_Deck/KingofDim.jpg'));
        this.theDeck.push(new Card('Ace', 'Dim', 11, 'public/assets/images/cards/Default_Deck/DimAce.jpg'));

        //Hearts
        this.theDeck.push(new Card('2', 'Hearts', 2, 'public/assets/images/cards/Default_Deck/Hearts2.jpg'));
        this.theDeck.push(new Card('3', 'Hearts', 3, 'public/assets/images/cards/Default_Deck/Hearts3.jpg'));
        this.theDeck.push(new Card('4', 'Hearts', 4, 'public/assets/images/cards/Default_Deck/Hearts4.jpg'));
        this.theDeck.push(new Card('5', 'Hearts', 5, 'public/assets/images/cards/Default_Deck/Hearts5.jpg'));
        this.theDeck.push(new Card('6', 'Hearts', 6, 'public/assets/images/cards/Default_Deck/Hearts6.jpg'));
        this.theDeck.push(new Card('7', 'Hearts', 7, 'public/assets/images/cards/Default_Deck/Hearts7.jpg'));
        this.theDeck.push(new Card('8', 'Hearts', 8, 'public/assets/images/cards/Default_Deck/Hearts8.jpg'));
        this.theDeck.push(new Card('9', 'Hearts', 9, 'public/assets/images/cards/Default_Deck/Hearts9.jpg'));
        this.theDeck.push(new Card('10', 'Hearts', 10, 'public/assets/images/cards/Default_Deck/Hearts10.jpg'));
        this.theDeck.push(new Card('Jack', 'Hearts', 10, 'public/assets/images/cards/Default_Deck/JackofHearts.jpg'));
        this.theDeck.push(new Card('Queen', 'Hearts', 10, 'public/assets/images/cards/Default_Deck/QueenofHearts.jpg'));
        this.theDeck.push(new Card('King', 'Hearts', 10, 'public/assets/images/cards/Default_Deck/KingofHearts.jpg'));
        this.theDeck.push(new Card('Ace', 'Hearts', 11, 'public/assets/images/cards/Default_Deck/HeartsAce.jpg'));

        //Spaeds
        this.theDeck.push(new Card('2', 'Spaeds', 2, 'public/assets/images/cards/Default_Deck/Spaeds2.jpg'));
        this.theDeck.push(new Card('3', 'Spaeds', 3, 'public/assets/images/cards/Default_Deck/Spaeds3.jpg'));
        this.theDeck.push(new Card('4', 'Spaeds', 4, 'public/assets/images/cards/Default_Deck/Spaeds4.jpg'));
        this.theDeck.push(new Card('5', 'Spaeds', 5, 'public/assets/images/cards/Default_Deck/Spaeds5.jpg'));
        this.theDeck.push(new Card('6', 'Spaeds', 6, 'public/assets/images/cards/Default_Deck/Spaeds6.jpg'));
        this.theDeck.push(new Card('7', 'Spaeds', 7, 'public/assets/images/cards/Default_Deck/Spaeds7.jpg'));
        this.theDeck.push(new Card('8', 'Spaeds', 8, 'public/assets/images/cards/Default_Deck/Spaeds8.jpg'));
        this.theDeck.push(new Card('9', 'Spaeds', 9, 'public/assets/images/cards/Default_Deck/Spaeds9.jpg'));
        this.theDeck.push(new Card('10', 'Spaeds', 10, 'public/assets/images/cards/Default_Deck/Spaeds10.jpg'));
        this.theDeck.push(new Card('Jack', 'Spaeds', 10, 'public/assets/images/cards/Default_Deck/JackofSpaeds.jpg'));
        this.theDeck.push(new Card('Queen', 'Spaeds', 10, 'public/assets/images/cards/Default_Deck/QueenofSpaeds.jpg'));
        this.theDeck.push(new Card('King', 'Spaeds', 10, 'public/assets/images/cards/Default_Deck/KingofSpaeds.jpg'));
        this.theDeck.push(new Card('Ace', 'Spaeds', 11, 'public/assets/images/cards/Default_Deck/SpaedsAce.jpg'));
    }
}
