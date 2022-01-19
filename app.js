const hourHand=document.querySelector(".hour-hand");
const minHand=document.querySelector(".min-hand");
const secHand=document.querySelector(".second-hand");

function setDate(){
    const now=new Date();

    const seconds=now.getSeconds();
    const secondsDegrees=(seconds/60)*360+90;
    secHand.style.transform= `rotate(${secondsDegrees}deg)`;

    const mins=now.getMinutes();
    const minsDegrees=(mins/60)*360+90;
    minHand.style.transform= `rotate(${minsDegrees}deg)`;

    const hours=now.getHours();
    const hoursDegrees=(hours/12)*360+90;
    hourHand.style.transform= `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate,1000);