//  1
function dClickEventHandler(event) {
    nav1.style.color = "red";
    event.preventDefault();
};

nav1.addEventListener('dblclick', dClickEventHandler);
//  2
function copyEvent(event) {
    nav2.style.backgroundColor = "blue";
    event.preventDefault();
};

nav2.addEventListener ('copy', copyEvent);
//  3
function keyDownEvent(event) {
    main.style.backgroundColor = 'orange';
};

document.body.addEventListener('keydown', keyDownEvent);


//  4
const randomBgc = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
  
 document.addEventListener("wheel", randomBgc);
//  5
 function clickEventHandler(event) {
    alert("you clicked me");
    event.preventDefault();
};

nav3.addEventListener('click', clickEventHandler);
//  6
function dragEvent(event) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    main.style.backgroundColor = "#" + randomColor;
};

busImg.addEventListener("drag", dragEvent);
//  7
function mouseDownEvent(event) {
    alert("mouse down event");
};

funBus.addEventListener("mousedown", mouseDownEvent);
//  8
function touchDrag(event) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor; 
}
document.addEventListener("touchmove", touchDrag);
//  9
function keyUpEvent(event) {
    main.style.backgroundColor = 'white';
};
    
document.body.addEventListener('keyup', keyUpEvent);
//  10
function mouseUpEvent(event) {
    alert("mouse up event");
};

paragraph1.addEventListener("mouseup", mouseUpEvent);