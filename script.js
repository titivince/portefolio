window.onload = function() {
var i = 0;
var nav = document.getElementById("nav");
var nav1 = document.getElementById("nav1");
var presantation = document.getElementById("pres");
var suivant = document.getElementById("suivant");
var skill = document.getElementById("skills")
var type = document.getElementById("name");
var name = "Vincent Perier";

function topPage(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function block1(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function block2(){
    window.scrollTo({top: 650, behavior: 'smooth'});
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
suivant.addEventListener("click", block2);
printName();
}