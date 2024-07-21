const cards = document.querySelectorAll('.card-square');

let cardIsFlipped = false;
let gameIsBlocked = false;
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
    // se gameIsBlocked è true, il resto della funzione non viene eseguito 
    if(gameIsBlocked) return;
    this.classList.toggle('clicked');
    //console.log('I was clicked');
    //console.log(this);

    // al primo click (cardIsFlipped è false) 
    if(!cardIsFlipped){
        // cardIsFlipped diventa true e firstCard è la carta cliccata
        cardIsFlipped = true;
        firstCard = this;
    }
    // al secondo click  cardIsFlipped è true, (la prima carta è stata cliccata)
    else{ 
        // cardIsFlipped diventa false
        cardIsFlipped = false;
        // la carta cliccata è secondCard
        secondCard = this;
       
        checkIfMatching();
    }
}; 

// funzione che controlla se le due carte girate sono uguali
function checkIfMatching(){
    // se le 2 carte sono uguali rimuovo l'addEventListener dalle carte
    if(firstCard.dataset.image == secondCard.dataset.image) {
        disableCardClick();
    }else { // altrimenti se le 2 carte sono diverse rigiro entrambe le carte dopo 1 secondo
        unflipCards();
    }
};


// Funzione che disabilita il click delle carte
function disableCardClick(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
};

// Funzione che rigira le carte mostrando la parte dietro
function unflipCards(){
    gameIsBlocked = true;
    setTimeout(() => {
        firstCard.classList.remove('clicked');
        secondCard.classList.remove('clicked');

        gameIsBlocked = false;
    }, "1000");

};