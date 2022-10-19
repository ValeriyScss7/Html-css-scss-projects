let burger = document.querySelector('.burger');
let basket = document.querySelector('.basket');
let wrap = document.querySelector('.wrapper');
let closeBtn = document.querySelector('.basket__button');
let closeArea = document.querySelector('.burger__wrap');

let shitItem = document.querySelector('.itemOne');
let shitItemSecond = document.querySelector('.itemTwo');

let header = document.querySelector('.header');

let main = document.querySelector('.main');




burger.addEventListener('click',(event) => {
    basket.classList.toggle('visibility');
    closeArea.style.cssText = "display:block";
    wrap.classList.toggle('blackOut');
    shitItem.classList.toggle('invisible');
    shitItemSecond.classList.toggle('invisible');
    main.classList.toggle('filter');
    header.classList.toggle('borderKill');   
})

closeBtn.addEventListener('click',(event) => {
    closeArea.style.cssText = 'display:none;';
})