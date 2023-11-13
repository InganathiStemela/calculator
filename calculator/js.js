//select the element where numbers are seen
function addValue(value){
    display.value += value
    alert(value);
}

let display = document.getElementById('display')
let btn1 = document.querySelector('[data-1]');
btn1.addEventListener('click', ()=> addValue(btn1.value))


// let display = document.querySelector('[data-answer]');
let btn2 = document.querySelector('[data-2]');
btn2.addEventListener('click', ()=> addValue(btn2.value))

// let display = document.querySelector('[data-answer]');
let btn3 = document.querySelector('[data-3]');
btn3.addEventListener('click', ()=> addValue(btn3.value))

// let display = document.querySelector('[data-answer]');
let btn4 = document.querySelector('[data-4]');
btn4.addEventListener('click', ()=> addValue(btn4.value))

// let display = document.querySelector('[data-answer]');
let btn5 = document.querySelector('[data-5]');
btn5.addEventListener('click', ()=> addValue(btn5.value))

// let display = document.querySelector('[data-answer]');
let btn6 = document.querySelector('[data-6]');
btn6.addEventListener('click', ()=> addValue(btn6.value))

// let display = document.querySelector('[data-answer]');
let btn7 = document.querySelector('[btn-7]');
btn7.addEventListener('click', ()=> addValue(btn7.value))


// let display = document.querySelector('[data-answer]');
let btn8 = document.querySelector('[data-8]');
btn8.addEventListener('click', ()=> addValue(btn8.value))


// let display = document.querySelector('[data-answer]');
let btn9 = document.querySelector('[data-9]');
btn9.addEventListener('click', ()=> addValue(btn9.value))


// let display = document.querySelector('[data-answer]');
let btn0 = document.querySelector('[data-0]');
btn0.addEventListener('click', ()=> addValue(btn0.value))

let btnplus = document.querySelector('plus')
btnplus.addEventListener('click', ()=> addValue(btnplus.value))

let btnminus = document.querySelector('minus')
btnminus.addEventListener('click', ()=> addValue(btnminus.value))

let btnmultiply = document.querySelector('multiply')
btnmultiply.addEventListener('click', ()=> addValue(btnmultiply.value))

let btndivide = document.querySelector('divide')
btndivide.addEventListener('click', ()=> addValue(btndivide.value))

let btndecimal = document.querySelector('decimal')
btndecimal.addEventListener('click', ()=> addValue(btndecimal.value))

let btnequalto = document.querySelector('equalto')
btnequalto.addEventListener('click', ()=> addValue(btnequalto.value))