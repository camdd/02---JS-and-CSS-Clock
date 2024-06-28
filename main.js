const dialLines = document.querySelector('.dial-lines');

for (let i = 0; i < 60; i++) {
  const line = document.createElement('div');
  line.style.height = i % 5 === 0 ? '20px' : '10px'
  line.style.transform = `rotate(${i * 6}deg) translateY(20rem)`
  dialLines.appendChild(line);
}

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) - 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setDate()

setInterval(setDate, 1000)


