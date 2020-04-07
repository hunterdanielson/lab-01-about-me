import isYes from './isYes.js';

// getting from the DOM
const myButton = document.getElementById('myButton');
const result = document.getElementById('result');
const resultPercent = document.getElementById('result-percent');

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
        result.style.color = '#E15554';
        resultPercent.style.color = '#E15554';
        const img = document.createElement('img'); 
        img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'; 
        document.getElementById('result-pic').appendChild(img);

    } else if (numYes === 2) {
        response += 'Squirtle!';
        result.style.color = '#4D9DE0';
        resultPercent.style.color = '#4D9DE0';
        const img = document.createElement('img'); 
        img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'; 
        document.getElementById('result-pic').appendChild(img);

    } else if (numYes === 1) {
        response += 'Pikachu!';
        result.style.color = '#E1BC29';
        resultPercent.style.color = '#E1BC29';
        const img = document.createElement('img'); 
        img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'; 
        document.getElementById('result-pic').appendChild(img);

    } else {
        response += 'Bulbasaur!';
        result.style.color = '#3BB273';
        resultPercent.style.color = '#3BB273';
        const img = document.createElement('img'); 
        img.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'; 
        document.getElementById('result-pic').appendChild(img);

    }

    result.textContent = response;

    let responsePercent = numYes / 3 * 100;
    responsePercent = Math.trunc(responsePercent);
    
    resultPercent.textContent = 'You answered: ' + responsePercent + '% Yes.';

    alert('The quiz is now complete. See results at the bottom of the page!');
}

myButton.addEventListener('click', launchQuiz);