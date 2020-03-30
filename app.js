import isYes from './isYes.js';

const myButton = document.getElementById('myButton');
const result = document.getElementById('result');


// hey there, you awake?
// wanna take a quiz?
// ok questions:

function launchQuiz() {
    let numYes = 0;
    let name = '';

    alert('Hey you there... wake up...');

    const confirmed = confirm('I got a quiz for you!');
    if (confirmed === false) {
        return; // return BREAKS a function's execution
    }

    const firstName = prompt("What's your first name?");
    name = firstName;

    const lastName = prompt('Now your last?');
    name = name + ' ' + lastName;


    const questoin1 = prompt("You're going bungee jumping for the first time. Since it's scary you decide to test the rope with a doll...The bungee cord snaps! Do you still try to make the jump? (y/n)");
    if (isYes(questoin1) === true) {
        numYes++;
    }

    const questoin2 = prompt('Do you think you are cool? Be honest. (y/n)');
    if (isYes(questoin2) === true) {
        numYes++;
    }

    const questoin3 = prompt('When the going gets tough, do you get going? (y/n)');
    if (isYes(questoin3) === true) {
        numYes++;
    }

    let response = 'Ok ' + name + ', the results of the quiz are in... the Pokemon you would be is: ';

    if (numYes === 3) {
        response += 'Charmander!';
    } else if (numYes === 2) {
        response += 'Squirtle!';
    } else if (numYes === 1) {
        response += 'Pikachu!';
    } else {
        response += 'Bulbasaur!';
    }

    result.textContent = response;
}


myButton.addEventListener('click', launchQuiz);



