//This will set up two variables and link them to the ID in the HTML
const clickBox = document.getElementById("box");
const clickText = document.getElementById("text");

//Now the two lines below will set up an event listener which will look for a click and then pass in a function
clickBox.addEventListener("click", changeColor);

clickText.addEventListener("click", changeText);

//The functions are defined below the first will select the variable clickBox and then change it's background property to red
function changeColor () {
        clickBox.style.backgroundColor = "red"
};
//The second will select the clickText variable and textContent will represent the text of the associated HTML node.
function changeText () {
    clickText.textContent = "This text has been changed"
};
//Set up a variable for the button using querySelector
const btn = document.querySelector('button');

//Now set up a seperate functiion to forfill a task
function random(number) {
//The function will return a random number
    return Math.floor(Math.random()*(number+1));
}

//Now set up an event listener which will look for a click event on the button
btn.addEventListener('click', function() {
    //Above will pass in the function of random(number) on every click event
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    //This will then set the backgroundcolor of the body to the above variable
    document.body.style.backgroundColor = rndCol;
});
//The recommended mechanism for adding event handlers in web pages is the addEventListener() method
//The function could also be changed to be outside of the addEventListener just like the function random it just needs to be defined with a name and then called:
//syntax: btn.addEventListener('click', function name);




