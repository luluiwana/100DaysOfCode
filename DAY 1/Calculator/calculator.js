const output = document.querySelector('.output');
let num1 = '';
let num2 = 0;
let opr;
n0.addEventListener("click", () => { numpad(n0.innerText); });
n1.addEventListener("click", () => { numpad(n1.innerText); });
n2.addEventListener("click", () => { numpad(n2.innerText); });
n3.addEventListener("click", () => { numpad(n3.innerText); });
n4.addEventListener("click", () => { numpad(n4.innerText); });
n5.addEventListener("click", () => { numpad(n5.innerText); });
n6.addEventListener("click", () => { numpad(n6.innerText); });
n7.addEventListener("click", () => { numpad(n7.innerText); });
n8.addEventListener("click", () => { numpad(n8.innerText); });
n9.addEventListener("click", () => { numpad(n9.innerText); });
plus.addEventListener("click", () => { opr = 'plus'; add(); });
min.addEventListener("click", () => { opr = 'min'; minus(); });
timess.addEventListener("click", () => { opr = 'times'; times(); });
divs.addEventListener("click", () => { opr = 'div'; div(); });
clears.addEventListener("click", () => { clear(); });
delt.addEventListener("click", () => { del(); });
equal.addEventListener("click", function () {
    switch (opr) {
        case 'plus':
            add();
            break;
        case 'min':
            minus();
            break;
        case 'times':
            times();
            break;
        case 'div':
            div();
            break;
        default:
            break;
    }
});
function clear() {
    output.innerText = 0;
    num1 = '';
    num2 = 0;
    opr = '';
}
function del() {
    let intext = output.innerText;
    intext = intext.slice(0, -1);
    num1 = num1.slice(0, -1);
    output.innerText = intext;;
}
function numpad(temp) {
    if (output.innerText == 0) {
        output.innerText = '';
    }
    num1 = num1 + temp;
    output.innerText = num1;
}
function add() {
    if (num1 !== '') {
        num2 = num2 + parseInt(num1);
        num1 = '';
        output.innerText = num2;
    }
}
function times() {
    if (num1 !== '') {
        if (num2 == 0) {
            num2 = num1;
        } else {
            num2 = num2 * parseInt(num1);
        }
        num1 = '';
        output.innerText = num2;
    }
}
function div() {
    if (num1 !== '') {
        if (num2 == 0) {
            num2 = num1;
        } else {
            num2 = num2 / parseInt(num1);
        }
        num1 = '';
        output.innerText = num2;
    }
}
function minus() {
    if (num1 !== '') {
        if (num2 == 0) {
            num2 = num1;
        } else {
            num2 = num2 - parseInt(num1);
        }
        num1 = '';
        output.innerText = num2;
    }
}

//night mode

const numpads = document.querySelectorAll('.numpads');
const num = document.querySelectorAll('.num');
let nightMode = false;
day();
daynight.addEventListener("click", function () {
    if (nightMode == false) {
        night();
        nightMode = true
    } else {
        day();
        nightMode = false
    }
});
function night() {
    document.querySelector('#daynight').style.backgroundColor = 'white';;
    document.querySelector('#daynight').style.color = 'black';;
    document.querySelector('#daynight').innerText = 'Day Mode';;
    document.querySelector('.calculator').style.backgroundColor = '#22252d';
    document.querySelector('.input').style.backgroundColor = '#2a2d37';
    document.querySelector('.output').style.color = 'white';
    numpadColor('#282b33', 'white', 'rgb(65 69 80)');
}
function day() {
    document.querySelector('#daynight').style.backgroundColor = 'black';;
    document.querySelector('#daynight').style.color = 'white';;
    document.querySelector('#daynight').innerText = 'Night Mode';
    document.querySelector('.calculator').style.backgroundColor = '#ffffff';
    document.querySelector('.input').style.backgroundColor = '#f9f9f9';
    document.querySelector('.output').style.color = 'black';
    numpadColor('#f5f3f3', 'black', 'rgb(212 200 245)');
}
function numpadColor(bg, color, press) {
    for (let i = 0; i < numpads.length; i++) {
        numpads[i].style.backgroundColor = bg;
        numpads[i].addEventListener("mouseup", () => { numpads[i].style.backgroundColor = bg; });
        numpads[i].addEventListener("mousedown", () => { numpads[i].style.backgroundColor = press; });
    }
    for (let i = 0; i < num.length; i++) {
        num[i].style.color = color;
    }
}
