const cards = document.querySelectorAll('.card-square');

let cardIsFlipped = false;
let firstCard;
let secondCard;

//console.log(cards);

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', flipCard);
}


// FUNCTION

//Funzione che gira la carta
function flipCard(){
    this.classList.toggle('clicked');
    //console.log('I was clicked');
    //console.log(this);

    // al primo click (cardIsFlipped è false) 
    if(!cardIsFlipped){
        // cardIsFlipped diventa true e firstCard è la carta cliccata
        cardIsFlipped = true;
        firstCard = this;
        /* console.log(cardIsFlipped);
        console.log(firstCard);
        console.log(firstCard.dataset.image); */
    }
    // al secondo click  cardIsFlipped è true, (la prima carta è stata cliccata)
    else{ 
        // cardIsFlipped diventa false
        cardIsFlipped = false;
        // la carta cliccata è secondCard
        secondCard = this;
        /* console.log(cardIsFlipped);
        console.log(secondCard);
        console.log(secondCard.dataset.image); */
       
        cardsAreMatching();
    }
}; 

// funzione che controlla se le due carte girate sono uguali
function cardsAreMatching(){
    // se le 2 carte sono uguali rimuovo l'addEventListener dalle carte
    if(firstCard.dataset.image == secondCard.dataset.image) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    }else { // altrimenti se le 2 carte sono diverse rigiro entrambe le carte dopo 1 secondo
        setTimeout(() => {
            firstCard.classList.remove('clicked');
            secondCard.classList.remove('clicked');
          }, "1000");
    }
};