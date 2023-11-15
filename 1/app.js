'use strict'

const wrapper = document.querySelector('.wrapper');
const add = document.querySelector('.add');
const yname = add.querySelector('input');
const ytext = add.querySelector('textarea');
const btn = add.querySelector('[type=button]');

// time
function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}
function date_time() {
    let current_datetime = new Date();
    let day = zero_first_format(current_datetime.getDate());
    let month = zero_first_format(current_datetime.getMonth() + 1);
    let year = current_datetime.getFullYear();
    let hours = zero_first_format(current_datetime.getHours());
    let minutes = zero_first_format(current_datetime.getMinutes());
    let seconds = zero_first_format(current_datetime.getSeconds());

    return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}
let time = wrapper.querySelector('.time');
time.textContent = date_time();
// time

// add

btn.addEventListener('click', () => {
    if(yname.value.length > 1 && ytext.value.length > 1) {
        let str = `<div class="message">
    <div class="name">
        <p>${yname.value}</p>
        <p class="time"></p>
    </div>
    <hr>
    <p>${ytext.value}</p>
    </div>`

    wrapper.insertAdjacentHTML('beforeend', str);

    time = wrapper.querySelectorAll('.time'); // find new times
    time[time.length - 1].textContent = date_time(); // set new time value

    yname.value = ''; // clear
    ytext.value = ''; // clear
    } else {
        alert('length is insufficient');
    }
});
// add