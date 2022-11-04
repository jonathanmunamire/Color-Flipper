import _ from 'lodash';
import './style.css';

const color = document.querySelector('.color');
const button = document.querySelector('.btn');
const title = document.querySelector('.title')

const Colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener('click', ()=>{
  let hex = '#'
  for( let i = 0; i < 6; i++){
    hex += Colors[getRandomNumber()];
  }
  color.textContent = hex;
  document.body.style.backgroundColor = hex;
  title.style.backgroundColor = hex;
  title.style.color = 'white';
})

function getRandomNumber(){
  return Math.floor(Math.random() * Colors.length)
}