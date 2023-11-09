const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'pic1.jpg' : "overlook of edinburgh",
    'pic2.jpg' : "old castle",
    'pic3.jpg' : "train",
    'pic4.jpg' : "winter house",
    'pic5.jpg' : "Inveraray Castle",
}
/* Looping through images */
for (img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src',`images/${img}`)
    newImage.setAttribute('alt',altDict[img])
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {   
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}


/* Wiring up the Darken/Lighten button */

function darkening(){
    if (btn.className === "dark") {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else if (btn.className == 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
};

btn.addEventListener("click",darkening);
