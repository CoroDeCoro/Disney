// J'ai fait une fonction pour chaque bouton pour que chacun d'entre eux soit indépendant

let bouton = document.querySelector('.bouton');
let box = document.querySelector('.box');

bouton.addEventListener('click', function () {
    box.classList.toggle('open');
})

let bouton_2 = document.querySelector('.bouton_2')
let box_2 = document.querySelector('.box_2')

bouton_2.addEventListener('click', function () {
    box_2.classList.toggle('open');
})

let bouton_3 = document.querySelector('.bouton_3')
let box_3 = document.querySelector('.box_3')

bouton_3.addEventListener('click', function () {
    box_3.classList.toggle('open');
})

let bouton_4 = document.querySelector('.bouton_4')
let box_4 = document.querySelector('.box_4')

bouton_4.addEventListener('click', function () {
    box_4.classList.toggle('open');
})

let bouton_5 = document.querySelector('.bouton_5')
let box_5 = document.querySelector('.box_5')

bouton_5.addEventListener('click', function () {
    box_5.classList.toggle('open');
})


// Barre de navigation dans le header

let nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    let { scrollTop } = document.documentElement;

    if (scrollTop > 700) {
        nav.classList.add("active");
    } else {
        nav.classList.remove('active');
    }
})

