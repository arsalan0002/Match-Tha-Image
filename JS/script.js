let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'https://pngfre.com/wp-content/uploads/apple-43-1024x1015.png',
    },
    {
        'name': 'jQuery',
        'img': 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-red-heart-icon-isolated-png-image_1726594.jpg',
    },
    {
        'name': 'Strawberry',
        'img': 'https://freepngimg.com/save/7769-strawberry-png-images/1000x1000',
    },
    {
        'name': 'Node',
        'img': 'https://w7.pngwing.com/pngs/493/735/png-transparent-node-js-javascript-express-js-mongodb-github-github-angle-text-logo-thumbnail.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];


// const ParentDiv = document.querySelector('#card_sec');

// // step 2 to duplicate each card.
//     const gameCard = cardsArray.concat(cardsArray)
//     console.log(gameCard)

// // steps 3
//     // Note that this method creates a new shuffled array instead of modifying the original one.
//     // const myNumbers = (array) => {
//     //     for (let i = array.length - 1; i > 0; i--) {
//     //         let j = Math.floor(Math.random() * (i + 1))
//     //         // console.log(i, j)
//     //         let temp = array[i]
//     //         array[i] = array[j]
//     //         array[j] = temp
//     //     }
//     //     return array
//     // }
//     // const shuffledChild = myNumbers(gameCard)

//     let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// // Step no 4.


// for(let i=0; i<shuffledChild.length; i++) {
//     const ChildDiv = document.createElement('div');
//     ChildDiv.classList.add('card');
//     ChildDiv.dataset.name = shuffledChild[i].name;
//     ChildDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    
//     ParentDiv.appendChild(ChildDiv);
    
// }

// let clickCount = 0;
// let firstCard = "";
// let secondCard = "";


// // styling the match card
// const card_matches = () => {
//     let card_selected = document.querySelectorAll('.card_selected');

//     card_selected.forEach((curElem) => {
//         curElem.classList.add('card_match')
//     })
// }


// const resetGame = () => {
//     firstCard = "";
//     secondCard = "";
//     clickCount = 0;

//     let card_selected = document.querySelectorAll('.card_selected');

//     card_selected.forEach((curElem) => {
//         curElem.classList.remove('card_selected')
//     })

// }


// ParentDiv.addEventListener('click', (event) => {
//     let currentCard = event.target;
//     if(currentCard.id === "card_sec"){return false }

//     clickCount ++;

//     if( clickCount < 3) {
//         // currentCard .classList.add('card_selected');

//         if(clickCount === 1){
//             firstCard = currentCard.parentNode.dataset.name;
//             currentCard.parentNode.classList.add('card_selected');
//         }else{
//             secondCard = currentCard.parentNode.dataset.name;
//             currentCard.parentNode.classList.add('card_selected');
//         }

//         if(firstCard !== "" && secondCard !== ""){
//             if(firstCard === secondCard){
//                 // curCard.classList.add('card_match')
//                 setTimeout(() => {
//                     card_matches()
//                     resetGame()
//                 }, 1000)

//             }else{
//                 setTimeout(() => {
//                     resetGame()
//                 }, 1000)
//             }
//         }

//     }

// })

const parentDiv = document.querySelector('#card_sec');

// duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

    // Note that this method creates a new shuffled array instead of modifying the original one.
    // const myNumbers = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1))
    //         // console.log(i, j)
    //         let temp = array[i]
    //         array[i] = array[j]
    //         array[j] = temp
    //     }
    //     return array
    // }
    //
    // const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// Add the Cards/
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;


    //Create Divs In ChildDiv
    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')
    
    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

    parentDiv.appendChild(childDiv)

}

let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

parentDiv.addEventListener('click', (event) => {
    let currentCard = event.target;

    if(currentCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){    

        if(clickCount === 1){
            firstCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

        }else{
            setTimeout(() => {
                resetGame()
        }, 1000)
        }
        }

    }

})





