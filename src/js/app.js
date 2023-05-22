/* eslint-disable no-console */
import Tasks from './Tasks';

// элемент блока div в DOM
const hw = document.querySelector('#hw');

// создание класса отвечающего за DOM
const dom = new Tasks();

// присвоению блока DIV, класса отвечающего за DOM
dom.bindToDOM(hw);

// отрисовка
dom.drawUI();

console.log('app started');
