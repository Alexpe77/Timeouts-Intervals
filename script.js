document.addEventListener('DOMContentLoaded', () => {
    const textParagraph = 'Wilson 2';
    const typeWriter = document.getElementById('typeWriter');
  
    let i = 0;
  
    const interval = setInterval(() => {
      typeWriter.innerHTML += textParagraph[i];
      i++;
      if (i >= textParagraph.length) {
        clearInterval(interval);
        typeWriter.classList.add('visible');
      }
    }, 1000);
  });  