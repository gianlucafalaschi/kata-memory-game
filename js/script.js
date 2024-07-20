const cards = document.querySelectorAll('.card-square');

//console.log(cards);

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', flipCard);
}


// FUNCTION

//Funzione che gira la carta
function flipCard(){
    this.firstElementChild.classList.toggle('clicked');
    this.firstElementChild.nextElementSibling.classList.toggle('clicked');
    console.log('I was clicked');
    console.log(this);
} 