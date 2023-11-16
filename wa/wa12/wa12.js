const newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

const endpoint = 'https://api.punkapi.com/v2/beers';

async function getQuote() {
     try {
         const response = await fetch(endpoint);
         if (!response.ok) {
             throw Error(response.statusText);
         }
         const json = await response.json();
        
         var index = Math.floor(Math.random() * 25)
         displayQuote(json[index].name);

         answer = json[index].description;
         answerTxt.textContent = '';
    }

     
     catch(err) {
         console.log(err);
         alert('Quote fetch failure');
     }
 }

 function displayQuote(name) {
    questionTxt.textContent = name;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();