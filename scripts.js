const myInput = document.getElementById("text-area");
const italicBtn = document.getElementById("italic-btn");
const boldBtn = document.getElementById("bold-btn");
const underlineBtn = document.getElementById("underline-btn");
const justifyBtn = document.getElementById("justify-btn");
const leftAlignBtn = document.getElementById("left-align-btn");
const rightAlignBtn = document.getElementById("right-align-btn");

italicBtn .addEventListener('click', () => {
    myFontStyle('italic');
});

boldBtn.addEventListener('click', () => {
    myFontStyle('bold');
});

underlineBtn.addEventListener('click', () => {
    myFontStyle('underline');
});

function myFontStyle(style) {
    if (style === 'italic') {
        myInput.style.fontStyle = 'italic';
        myInput.style.fontWeight = 'normal';
        myInput.style.textDecoration = 'none';
    } else if (style === 'bold') {
        myInput.style.fontWeight = 'bold';
        myInput.style.fontStyle = 'normal';
        myInput.style.textDecoration = 'none';
    } else if (style === 'underline') {
        myInput.style.textDecoration = 'underline';
        myInput.style.fontStyle = 'normal';
        myInput.style.fontWeight = 'normal';
    }
}


justifyBtn.addEventListener('click', () => {
    myAlignText('justify');
});

leftAlignBtn.addEventListener('click', () => {
    myAlignText('left');
});

rightAlignBtn.addEventListener('click', () => {
    myAlignText('right');
});

function myAlignText(align) {
    myInput.style.textAlign = align;
}



