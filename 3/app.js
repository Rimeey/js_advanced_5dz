'use strict'

const forms = document.querySelector('.forms form');
const result = document.querySelector('.result');
const btn = forms.querySelector('[type="button"]');
const textarea = forms.querySelector('textarea');
const p = result.querySelector('p');
const radio = forms.querySelectorAll('[type="radio"]');

forms.addEventListener('click', ()=>{
    p.textContent = textarea.value;
})

forms.children[0].addEventListener('change', ()=>{
    p.classList.toggle('bold');
});
forms.children[2].addEventListener('change', ()=>{
    p.classList.toggle('underline');
});
forms.children[4].addEventListener('change', ()=>{
    p.classList.toggle('italics');
});
radio[0].addEventListener('change', ()=>{
    p.classList.remove('right');
    p.classList.remove('justify');
    p.classList.toggle('left');
});
radio[1].addEventListener('change', ()=>{
    p.classList.remove('left');
    p.classList.remove('justify');
    p.classList.toggle('right');
});
radio[2].addEventListener('change', ()=>{
    p.classList.remove('left');
    p.classList.remove('right');
    p.classList.toggle('justify');
});