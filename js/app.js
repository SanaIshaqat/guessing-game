"use strict";
let userName = prompt('What is you Name ?');
console.log(userName)
alert('Hello ' + userName + ' Welcome to my website! :)')

let counter = 0;

function nameAns (){
let q1 = prompt('Does my Name start with s ?').toLocaleLowerCase();

switch (q1) {
    case 'yes': case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter);
        break;
    
    default:
        alert('Your answer is wrong :(');
        break;
}
}
nameAns();


function animAns () {
let q2 = prompt('Do I love animals ?').toLocaleLowerCase();

switch (q2) {
    case 'yes': case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter);
        break;
    
    default:
        alert('Your answer is wrong :(');
        break;
}
}
animAns();

function gradAns(){
let q3 = prompt('Did I graduate from JU?').toLocaleLowerCase();

switch (q3) {
    case 'no': case 'n':
        alert('Your answer is correct!'); counter++; console.log(counter);
        break;
    
    default:
        alert('Your answer is wrong :(');
        break;
}
}
gradAns();

function archAnsw (){
let q4 = prompt('Did I Study Architecture?').toLocaleLowerCase();

switch (q4) {
    case 'yes': case 'y':
        alert('Your answer is correct!'); counter++; console.log(counter);
        break;
    
    default:
        alert('Your answer is wrong :(');
        break;
}
}
archAnsw();

function langAnsw (){
let q5 = prompt('Can I Speak Spanish ?').toLocaleLowerCase();

switch (q5) {
    case 'no': case 'n':
        alert('Your answer is correct!'); counter++; console.log(counter);
        break;
    
    default:
        alert('Your answer is wrong :(');
        break;
}
}
langAnsw ();

function numAnsw () {
let q6 = Number(prompt('Can you guess What my favorite number between 1-15 is ?'));

for (let i = 0; i < 4; i++) {
    if (q6 === 11) {
        alert('You guessed the right number!'); counter++; console.log(counter);
        break;
    }

    else if (q6 > 11) {
        q6 = Number(prompt('Your answer is too high :'))
    }

    else {
        q6 = Number(prompt('Your answer is too low:'))
    }

};

alert('The correct answer is 11 :) !');
}
numAnsw();



function favAnsw (){
let favArch = ['classic', 'neoclassic', 'modern', 'greek', 'contemprary']

let q7 = prompt('My Favorite architectural style is ?').toLocaleLowerCase();
let test = false



for (let x = 0; x < 6; x++) {

    for (let z = 0; z < favArch.length; z++) {
        console.log(favArch[z]);
        if (q7 === favArch[z]) {
            alert('Your Answer is Correct :)');
            counter++;
            console.log(counter);
            test = true;
            break;
        }
    }
    if (test == true) {
        break;
    }
    q7=prompt('Your answer is incorrect!, Please Try again:')
}
}
favAnsw();


alert(' My Fav architectural styles are : (classic, neoclassic, modern, greek, contemprary)!');

alert('Your final score out of 7 is : ' + counter);

alert('Thank you for your time ' + userName + ' ,now you know a little bit more about me :) ');
