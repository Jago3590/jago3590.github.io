const newBtn = document.querySelector('#js-new-quote');
newBtn.addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet');
answerBtn.addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
     try {
         const response = await fetch(endpoint);
         if (!response.ok) {
             throw Error(response.statusText);
         }
         const json = await response.json();

         displayQuote(json['question']);
         answer = json['answer'];
         answerTxt.textContent = '';
     }
     catch(err) {
         console.log(err);
         alert('Quote fetch failure');
     }
 }

 function displayQuote(question) {
    questionTxt.textContent = question;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();