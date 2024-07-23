const cards = document.querySelectorAll('.card-square');
let errorsCounter = document.getElementById('errors-counter');

let cardIsFlipped = false;
let gameIsBlocked = false;
let firstCard;
let secondCard;
let errorsCount = 0;


errorsCounter.innerHTML = errorsCount;

// array di numeri casuali per l'ordine delle cards
let randomNumberArray = [];

randomNumberArray = getIntegerArray(0, 12, cards.length);

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // assegna ad ogni card un ordine casuale
    card.style.order = randomNumberArray[i];
    card.addEventListener('click', flipCard);
}


// FUNCTION

//Funzione che gira la carta
function flipCard(){
    // se gameIsBlocked è true, il resto della funzione non viene eseguito 
    if(gameIsBlocked) return;
    this.classList.toggle('clicked');

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
        errorsCounter.innerHTML = errorsCount;
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
    // aumenta di uno il contatore degli errori
    errorsCount++;
};

// Funzione che crea un numero intero tra min e max (max escluso)  
// e lo pusha in un array se il numero non e' gia' presente

function getIntegerArray(min, max, numberOfCards) {
    let randomNumberArray = [];
    // fino a che l'array non contiene 12 elementi 
    let i = 1;
    while(i < numberOfCards){
        // creo un numero random compreso tra min e max(max non incluso)
        let randomNumber = Math.floor(Math.random() * (max - min) ) + min;
        // se il numero random non e' gia contenuto nell'array allora lo pusho nell'array
        if(!randomNumberArray.includes(randomNumber)){
            randomNumberArray.push(randomNumber);
            i++;
        };
        
    }

    return randomNumberArray;
}