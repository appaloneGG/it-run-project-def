let burger = document.querySelector('#icon');
let navUl = document.querySelector('#list');

burger.addEventListener('click', burgerF);

function burgerF(){
    navUl.classList.toggle('show');
}