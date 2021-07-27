"use strict";
let userName = prompt ('What is you Name ?');
console.log (userName)
alert('Hello '+userName+' Welcome to my website! :)')

let counter=0;

let q1 = prompt ('Does my Name start with s ?').toLocaleLowerCase();
//console.log (q1)
switch (q1) {
    case 'yes':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q2 = prompt ('Do I love animals ?').toLocaleLowerCase();
//console.log (q2)
switch (q2) {
    case 'yes':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q3 = prompt ('Did I graduate from JU?').toLocaleLowerCase();
//console.log (q3)
switch (q3) {
    case 'no':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q4 = prompt ('Did I Study Architecture?').toLocaleLowerCase();
//console.log (q4)
switch (q4) {
    case 'yes':
    alert ('Your answer is correct!');counter++; console.log (counter); //console.log ('Your answer is correct!');
    break;
    case 'y':
    alert ('Your answer is correct!');counter++; console.log (counter); //console.log ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q5 = prompt ('Can I Speak Spanish ?').toLocaleLowerCase();
//console.log (q5)
switch (q5) {
    case 'no':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    case 'n':
    alert ('Your answer is correct!');counter++; console.log (counter);//console.log ('Your answer is correct!');
    break;
    default:
    alert ('Your answer is wrong :(');
    break;
}

let q6 = Number(prompt ('Can you guess What my favorite number between 1-15 is ?'));

//while ( q6 !== 11){prompt ('Your answer is not correct please enter a number between 1-15 :')}

for(let i=0; i<4 ;i++){ 
    if (q6===11)
    {
        alert('You guessed the right number!');counter++; console.log (counter);
        break;
    }

   else if (q6>11) {
       q6=Number(prompt ('Your answer is too high :'))
    }

   else {
       q6=Number(prompt ('Your answer is too low:'))
    }
    
};

alert ('The correct answer is 11 :) !');

let favArch = ['classic', 'neoclassic', 'modern', 'greek', 'contemprary', 'industrial', 'bauhaus']

let q7 = prompt ('My Favorite architectural style is (classic, neoclassic, modern, greek, contemprary, industrial, bauhaus ) ?').toLocaleLowerCase();

for( let x=0; x<6;x++){

if (q7==='modern'){
    alert('Your answer is correct :)');counter++; console.log (counter);
    break;
}
else if (q7!=='modern') {
    prompt ('Your answer is incorrect try again:')
}



};

alert ('The correct answer is modern :) !');

alert ('Your final score out of 7 is : '+ counter);

alert('Thank you for your time '+ userName+' ,now you know a little bit more about me :) ')

