const who = document.getElementById("who");
const what = document.getElementById("what");
const where = document.getElementById("where");
const submit = document.getElementById("submit-button");
const answer = document.getElementById("answer-text");
const spidey = document.getElementById("spidey-gif");
var h1Elements = document.getElementsByTagName("h1");

submit.addEventListener("click", checkValidity);

function checkValidity () {
    if (who.value == 'Doug' && what.value == 'Kralle' && where.value == 'Keller') {
        console.log('You figured it out!');
        answer.innerHTML="Hurra!! Du hast das Rätsel geknackt! Gute Arbeit Sherlock. Dafür hast du dir dein letztes Geschenk für heute echt verdient. Du findest es hinter dem Fernseher.";
        answer.style.color="rgb(123, 255, 0)";
        who.style.backgroundColor = "rgb(123, 255, 0)";
        what.style.backgroundColor = "rgb(123, 255, 0)";
        where.style.backgroundColor = "rgb(123, 255, 0)";
        submit.style.backgroundColor = "rgb(123, 255, 0)";
        for(var i = 0; i < h1Elements.length; i++) {
            h1Elements[i].style.color = "rgb(123, 255, 0)";
         }
        spidey.style.display ="unset";
    } else {
        console.log('Your answer is wrong!')
        answer.innerHTML="Das ist leider nicht der Code Leo... Hast du die Schreibweise eingehalten?";
        answer.style.color="red";
    };
}
