window.onload = function() {
var i = 0;
var nav = document.getElementById("nav");
var nav1 = document.getElementById("nav1");
var presantation = document.getElementById("pres");
var type = document.getElementById("name");
var name = "Vincent Perier";

function topPage(){
    scrollTo(0, 0);
}
function block1(){
    presantation.scrollIntoView(true);
}
function printName(){
    if(i < name.length){
        type.innerHTML += name.charAt(i);
        i++;
        setTimeout(printName, 300);
    }
}
/* code start */
nav.addEventListener("click", topPage);
nav1.addEventListener("click", block1);
printName();
}