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


