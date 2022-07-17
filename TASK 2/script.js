
document.addEventListener('DOMContentLoaded', ()=>{

    // Card Option

    const cardArray = [
        {
            name : 'fries',
            img  : 'fries.png' },
        {
            name : 'fries',
            img  : 'fries.png'   },
        {
            name : 'cheeseburger',
            img  : 'cheeseburger.png'    },
        {
            name : 'cheeseburger',
            img  : 'cheeseburger.png'    },
        {
            name : 'hotdog',
            img  : 'hotdog.png'  },
        {
            name : 'hotdog',
            img  : 'hotdog.png'  },
        {
            name : 'ice-cream',
            img  : 'ice-cream.png'   },
        {
            name : 'ice-cream',
            img  : 'ice-cream.png'   },
        {
            name : 'milkshake',
            img  : 'milkshake.png'   },
        {
            name : 'milkshake',
            img  : 'milkshake.png'   },
        {
            name : 'pizza',
            img  : 'pizza.png'   },
        {
            name : 'pizza',
            img  : 'pizza.png'   }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    let result = document.getElementById("result");
    var cardChoosen = [];
    var cardChoosenId = [];
    var cardWon = [];

    // create board
    function createBoard() {
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }

    // check for maches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');

        var oneImg = cardChoosenId[0];
        var twoImg = cardChoosenId[1];

        if(cardChoosen[0] === cardChoosen[1]){
            alert("You found a match");
            cards[oneImg].setAttribute('src', 'white.png');
            cards[twoImg].setAttribute('src', 'white.png');
            cardWon.push(cardChoosen);
        }
        else{
            cards[oneImg].setAttribute('src', 'blank.png');
            cards[twoImg].setAttribute('src', 'blank.png');
            alert("Sorry Try Again");
        }

        cardChoosen = [];
        cardChoosenId = [];

        result.innerHTML = cardWon.length;

        if(cardWon.length == cardArray.length/2){
            alert("Congratulation! You Get All Match");
        }
    }
    
    // flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name);
        cardChoosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);

        if(cardChoosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }


    createBoard();
})