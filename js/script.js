'use strict';

const iloscCyfr = 6;
const wartoscMax = 42;

const button = document.querySelector('button');
const parent = document.querySelector('#kulki');

function addElement(elem, number) {
    var elem = document.createElement(elem);
    elem.textContent = number;
    parent.appendChild(elem); 
}

// addElement('div', '23');
// addElement('div', '10');

button.addEventListener('click', () => {
    parent.innerText = '';
    
    let liczby = [];
    let liczbyPierwotnie = [];

    for(let i = 0; i < iloscCyfr; i++) {
        let los = Math.floor(Math.random() * wartoscMax + 1);
        liczbyPierwotnie.push(los);
        // console.log(los);
        if(liczby.indexOf(los) < 0) {
            liczby.push(los);
            addElement('div', los);
        } else {
            i--;
            continue;
        }
    }
    console.log(liczbyPierwotnie);
    console.log(liczby);

});
