// Title

const textParagraph = 'Wilson 2';
const typeWriter = document.getElementById('typeWriter');

let i = 0;

const interval = setInterval(() => {
  typeWriter.innerHTML += textParagraph[i];
  i++;
  if (i >= textParagraph.length) {
    clearInterval(interval);
  }
}, 1000); 

// Timer

let timer = setInterval(countUpTimer, 1000);

let totalSeconds = 0;

function countUpTimer() {
  totalSeconds++;
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  let seconds = totalSeconds - (hours * 3600 + minutes * 60);

  document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}

  function displayMinutesPassed() {
    let minutes = 0;
    setInterval(function() {
      minutes++;
      if (minutes === 1) {
        document.getElementById('output').innerHTML = "<p>1 minute has passed</p>";
      } else {
        document.getElementById('output').innerHTML = `<p>${minutes} minutes have passed</p>`;
      }
    }, 60000);
  }
  
  displayMinutesPassed();