'use strict';

let bookList = document.querySelector('.books'),
    book = document.querySelectorAll('.book'),
    elem = document.querySelectorAll('ul'),
    elemList = document.querySelectorAll('li');
    console.log(bookList);
    console.log(book);
    console.log(elem);
    console.log(elemList);

    bookList.insertBefore(book[1], book[0]);
    bookList.insertBefore(book[4], book[2]);
    bookList.insertBefore(book[2], null);

let bookName = document.querySelectorAll('h2');
    bookName[2].innerHTML = 'Книга 3. this и Прототипы Объектов';

let adv = document.querySelector('.adv');
    adv.parentNode.removeChild(adv);

    elem[0].insertBefore(elemList[2], elemList[10]);
    elem[0].insertBefore(elemList[6], elemList[4]);
    elem[0].insertBefore(elemList[8], elemList[4]);

    elem[5].insertBefore(elemList[48], elemList[52]);
    elem[5].insertBefore(elemList[55], elemList[49]);
    elem[5].insertBefore(elemList[51], elemList[54]);

let newElem = document.createElement('li');
    newElem.textContent = 'Глава 8: За пределами ES6';
    elem[2].appendChild(newElem);
    elem[2].insertBefore(newElem, elemList[26]);


let background = document.querySelector('body');
    background.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';