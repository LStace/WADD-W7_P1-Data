class Card{
    value;
    suit;
    #imgSrc;

    constructor(value, suit, imgSrc){
        this.value = value;
        this.suit = suit;
        this.#imgSrc = imgSrc;
    }

    getImage(){
        return this.#imgSrc;
    }
}

document.getElementById("shuffle").addEventListener("click", shuffle);
document.getElementById("value").addEventListener("click", sortValue);
document.getElementById("suit").addEventListener("click", sortSuit);

const cardHolder = document.getElementById("card-holder");
const suits = ["hearts", "diamonds", "clubs", "spades"]

const cards = []

for (let v = 1; v <= 13; v++){
    for (let s of suits){
        cards.push(new Card(v, s, `/images/${v}_of_${s}.png`));
    }
}

displayCards();

function displayCards(){
    cardHolder.innerHTML = '';
    
    for (let c of cards){
        let newImage = document.createElement("img");
        newImage.src = c.getImage();
        newImage.className = "card"
        cardHolder.appendChild(newImage);
    }
}

function shuffle(){

    // Start from the last element and swap 
    // one by one. We don't need to run for 
    // the first element that's why i > 0 
    for (let i = cards.length - 1; i > 0; i--)
    {
    
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1)); 

        // Swap cards[i] with the element 
        // at random index 
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    displayCards();
} 

function sortValue(){
    cards.sort((a, b)=>{
        if (a.value > b.value){
            return 1;
        }

        else if (a.value === b.value){
            return 0;
        }

        else{
            return -1;
        }
    })
    displayCards()
}

function sortSuit(){

}


