let spanHover = document.querySelectorAll('.itemWork__wrap__itemBye__item');


    spanHover.forEach(item =>{
        item.addEventListener('click',(e) => {
            item.classList.toggle('spanFocus');
        });
    })


   
 

let burgerOpen = document.querySelector('.burger_open');

let burgerMenu = document.querySelector('.burger');

let burgerClose = document.querySelector('.burgerCloseBtn')




burgerOpen.addEventListener('click',()=>{
    burgerMenu.style.cssText = 'opacity:1; transition:1s; left:0'
    burgerClose.style.cssText = 'opacity:1;'
})

burgerClose.addEventListener('click',(event) => {
    burgerMenu.style.cssText = 'opacity:0; transition:1s; top:50px';
    burgerClose.style.cssText = 'opacity:0;'
})






