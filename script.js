const paragraph = document.querySelector('h1');

const textParagraph =  'Wilson 2';

let i = 0;

const interval = setInterval(() => {
    paragraph.innerHTML += textParagraph[i]
    i++
    if (i >= textParagraph.length) {
        clearInterval(interval)
    }
}, 1000);