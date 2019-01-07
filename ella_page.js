/*var nameInput = prompt("\nHi! I\'m Chunklet. What's your name?");
alert("\nStart by choosing the colors for your page.\n\nClick the color buttons at the top");
var nameEl = document.getElementById("name");
nameEl.textContent = nameInput;*/


//BACKGROUND GRADIENT-----------------------------------------

//get the input buttons
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
console.log(color1)
var borders = document.getElementsByClassName("gameWindow");

//Define callback function
function setColor(){
    document.body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 
    console.log(color1.value)
}

function borderColor1(){
    for (let i=1; i<borders.length; i += 2) {
        borders[i].style.borderColor = color1.value;
    }
}

function borderColor2(){
    for (let i=0; i<borders.length; i += 2) {
        borders[i].style.borderColor = color2.value;
    }
}

//Add event listener
color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
color1.addEventListener("input", borderColor1);
color2.addEventListener("input", borderColor2);

//MAD LIBS---------------------------------------------------

//Get inputs
var noun = document.getElementById("noun");
var person = document.getElementById("person");
var adjective = document.getElementById("adjective");
var goButton = document.getElementById("goButton");
var story =  document.getElementById("story");

console.log(story)

//Define callback function
function addStory(){
    story.textContent = "The crazy " + person.value 
    + " ate the exloding " + adjective.value + " " + noun.value + ".";
}

//Set event listener 
goButton.addEventListener("click", addStory);

//MR. WHISKERS CALL-------------------------------------------------

//Get call button

var call = document.getElementById("call");
var catImg = document.getElementById("catImg");


function catGrow(){
    catImg.style.width = (parseFloat(catImg.style.width) + .5) + "px";
    catImg.style.marginLeft = (parseFloat(catImg.style.marginLeft) + .6) + "px";

    if (parseFloat(catImg.style.width) < 140){
        window.requestAnimationFrame(catGrow);
    } else {
        catImg.src="still_cat.jpg";    
    }
};

//Call .requestAnimationFrame

function callCat(){
    catImg.src="https://www.kasandbox.org/programming-images/misc/cat-walk.gif";
    catImg.style.width = "30px";
    catImg.style.marginLeft = "10px";
    window.requestAnimationFrame(catGrow);
}

call.addEventListener("click", callCat);

//MR. WHISKERS PET-------------------------------------------------

//Get pet button
var petButton = document.getElementById("pet");
//Define callback function
function petWhiskers(){
    catImg.src="https://media.giphy.com/media/11s7Ke7jcNxCHS/giphy.gif";
}
//Add event listener
petButton.addEventListener("click", petWhiskers);



// 8 BALL -----------------------------------------------------------

var fortune=["Maybe", "You wish!", "You have a better chance of getting struck by lighting"]
var ballDiv = document.getElementById("8ball");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");


//define call back function
function tellFortune(){
    var rand = fortune[Math.floor(Math.random() * fortune.length)];
    console.log(rand)
    answer.textContent = "";
    answer.textContent = rand;


}

//Add event listener
submit.addEventListener("click", tellFortune)


// Gymnastics Flipper Whipper ---------------

const q1 = document.getElementById("q1");
const sendButton= document.getElementById("sendButton");
const gymPic = document.getElementById("gymPic");
console.log(sendButton)

//Define function
function showPicture(){
    if (q1.value === "Yes" || q1.value === "yes") {
        gymPic.src="https://media.giphy.com/media/3oz8xyJHXtVUD4PRRe/giphy.gif";  
    } else { 
        gymPic.src="https://media.giphy.com/media/7S7epzXLUaw80/giphy.gif";
     }
}
//Add event listener
sendButton.addEventListener("click", showPicture);

