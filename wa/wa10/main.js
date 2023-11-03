const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit in the house because Boulder doesn't condone AC, so :insertx: took all of they're clothes off. When they had nothing but :inserty: on, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Arnold Schwarzenegger", "Stacy's Mom", "Winnie the Pooh"];
const insertY = ["socks","a hat","glasses"];
const insertZ = ["danced","somersaulted away","cried"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    newStory = newStory.replaceAll(":insertx:",xItem);

    var yItem = randomValueFromArray(insertY);
    newStory = newStory.replace(":inserty:",yItem);

    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertz:",zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);
}

  if(document.getElementById("uk").checked) {
    const weight = ((Math.round(300/14)) + (" stone"));
    newStory = newStory.replace("300 pounds", weight);

    const temperature =  ((Math.round((94-32)*5/9))+ (" centigrade"));
    newStory = newStory.replace("94 fahrenheit",temperature);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';

}