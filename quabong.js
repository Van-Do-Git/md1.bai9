let imgOjec = null;
imgOjec = document.getElementById("image");
function init(){
    imgOjec = document.getElementById("image");
    imgOjec.style.position = "relative";
    imgOjec.style.top = "0px";
    imgOjec.style.left  = "0px";
}
function moveright() {
    imgOjec.style.left = parseInt(imgOjec.style.left) + 10 + "px";
}
function moveleft() {
    imgOjec.style.left = parseInt(imgOjec.style.left) - 10 + "px";
}
function moveup() {
    imgOjec.style.top = parseInt(imgOjec.style.top) + 10 + "px";
}
function movedown() {
    imgOjec.style.top = parseInt(imgOjec.style.top) - 10 + "px";
}
window.onload = init;