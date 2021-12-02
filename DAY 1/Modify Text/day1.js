// display input value
const inputText = document.querySelector('.inputText');
const outputText = document.querySelector('.outputText');
inputText.addEventListener("keyup", () => {
    outputText.innerText = inputText.value;
});

//change style
const fontColor = document.querySelector('.select-color');
const bold = document.querySelector('#bold');
const italic = document.querySelector('#italic');
const underline = document.querySelector('#underline');
let boldStatus = false;
let italicStatus = false;
let underlineStatus = false;
fontColor.addEventListener("change", () => {
    outputText.style.color = fontColor.value;
});

bold.addEventListener("click", () => {
    if (boldStatus === false) {
        outputText.style.fontWeight = "bold";
        bold.style.backgroundColor = "purple";
        bold.style.color = "white";
        boldStatus = true;
    } else {
        outputText.style.fontWeight = "normal";
        bold.style.backgroundColor = "white";
        bold.style.color = "black";
        boldStatus = false;
    }
});
italic.addEventListener("click", () => {
    if (italicStatus === false) {
        outputText.style.fontStyle = "italic";
        italic.style.backgroundColor = "purple";
        italic.style.color = "white";
        italicStatus = true;
    } else {
        outputText.style.fontStyle = "normal";
        italic.style.backgroundColor = "white";
        italic.style.color = "black";
        italicStatus = false;
    }
});
underline.addEventListener("click", () => {
    if (underlineStatus === false) {
        outputText.style.textDecoration = "underline";
        underline.style.backgroundColor = "purple";
        underline.style.color = "white";
        underlineStatus = true;
    } else {
        outputText.style.textDecoration = "none";
        underline.style.backgroundColor = "white";
        underline.style.color = "black";
        underlineStatus = false;
    }
});
//font size
const font_Size = document.querySelector('.select-size');
font_Size.addEventListener("change", function () {
    outputText.style.fontSize = font_Size.value + "px";
});
