// ====================JS CLASS 5======================//



// =====While Loops=====//
// While loop works same as for loop.
// ====Example====//
// var i = 0;
// while (i < 0) {
//     i++;
//     console.log(i);
// }


// =====Do While Loop=====//
// Do While loop print the statement then check the condition.
//====Example====//
// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 0);


// =====Events=====//
// Links
// Buttons
// Mouse
// Fields

//====Example(Event:Button)====//
function handleClick(age) {
    alert("You are" + age);
}
//====Example1(Event:onmouseout)====//
var container = document.getElementById("box");
function blueToRed() {
    container.style.backgroundColor = "red"
}
//====Example1(Event:onmouseover)====//
var container = document.getElementById("box");
function redToBlue() {
    container.style.backgroundColor = "blue"
}
//====Example2(Event:onmouseout)====//
var img = document.getElementById("image");
function out() {
    img.style.border = "3px solid green"
}
//====Example2(Event:onmouseover)====//
var img = document.getElementById("image");
function over() {
    img.style.border = "3px solid black"
}

