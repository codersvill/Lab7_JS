function init() {
var entryText = document.getElementtById('entrybutton');
entryText.addEventListener('click',myAlert);
function myAlret(){
var inText = document.getElementById("entryinput");
var outText = document.getElementById("textoutput");
alert("Daniel: " + inText.Value);
outText.innerHTML = inText.value;
}
}
window.addEventListener('load',init);
