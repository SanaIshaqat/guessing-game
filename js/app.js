"use strict";
let userName = prompt ('What is you Name ?');
console.log (userName)
alert('Hello '+userName+' Welcome to my website! :)')

let q1 = prompt ('Does my Name start with s ?').toLocaleLowerCase();
console.log (q1)
switch (q1) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q2 = prompt ('Do I love animals ?').toLocaleLowerCase();
console.log (q2)
switch (q2) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q3 = prompt ('Did I graduate from JU?').toLocaleLowerCase();
console.log (q3)
switch (q3) {
    case 'no':
    alert ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q4 = prompt ('Did I Study Architecture?').toLocaleLowerCase();
console.log (q4)
switch (q4) {
    case 'yes':
    alert ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q5 = prompt ('Can I Speak Spanish ?').toLocaleLowerCase();
console.log (q5)
switch (q5) {
    case 'no':
    alert ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

alert('Thank you for your time '+ userName+' ,now you know a little bit more about me :) ')