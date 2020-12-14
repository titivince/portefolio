window.onload = function() {
var i = 0;
var nav = document.getElementById("nav");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var type = document.getElementById("name");
var name = "Vincent Perier";
var presantation = document.getElementById("pres");
var suivant = document.getElementById("suivant");
var skills = document.getElementById("skills")
var suivant1 = document.getElementById("suivant1");
var projets = document.getElementById("projets");
/* create function */
function topPage(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function block1(){
    presantation.scrollIntoView({behavior: 'smooth'});
}
function block2(){
    skills.scrollIntoView({behavior: 'smooth'});
}
function block3(){
    projets.scrollIntoView({behavior: 'smooth'});
}
function printName(){ /* create the typing effect */
    if(i < name.length){
        type.innerHTML += name.charAt(i);
        i++;
        setTimeout(printName, 300);
    }
}
/* code start */
printName();
nav.addEventListener("click", topPage);
nav1.addEventListener("click", block1);
nav2.addEventListener("click", block2);
suivant.addEventListener("click", block2);
nav3.addEventListener("click", block3);
suivant1.addEventListener("click", block3);

}