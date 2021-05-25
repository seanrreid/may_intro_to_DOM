'use strict';

const bodyElement = document.querySelector('body');
const rootElement = document.querySelector('#root')
const title = document.querySelector('#title');
const subtitle = document.querySelector('.subtitle');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');
const clickMeButton = document.querySelector('#clickMe');
const myInput = document.querySelector('#myInput');

const h3element = document.createElement('h3');
h3element.innerText = "Hello, I am an H3 Tag!"

rootElement.append(h3element);

let clickCount = 0;

function clickCounter() {
    clickCount = clickCount + 1;
    console.log('click count is ', clickCount);
    return clickCount;
}

clickMeButton.addEventListener('click', function () {
    clickCounter();
    title.innerText = myInput.value;
});