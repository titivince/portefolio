window.onload = function() {
var i = 0;
var nav = document.getElementById("nav");
var nav1 = document.getElementById("nav1");
var presantation = document.getElementById("pres");
var skill = document.getElementById("skills")
var type = document.getElementById("name");
var name = "Vincent Perier";

function topPage(){
    scrollTo(0, 0);
}
function block1(){
    presantation.scrollIntoView(true);
}
function block2(){
    skill.scrollIntoView(true)
}
function printName(){ /* create the typing effect */
    if(i < name.length){
        type.innerHTML += name.charAt(i);
        i++;
        setTimeout(printName, 300);
    }
}
/* code start */
nav.addEventListener("click", topPage);
nav1.addEventListener("click", block1);
nav2.addEventListener("click", block2);
printName();
}