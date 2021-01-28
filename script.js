


const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const TotalSeconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(TotalSeconds /3600/24);
    const hours = Math.floor(TotalSeconds/3600)%24;
    const minutes = Math.floor(TotalSeconds/60)%60;
    const seconds = Math.floor(TotalSeconds)%60;
   document.getElementById('days').innerHTML=days;
   document.getElementById('hours').innerHTML=hours;
   document.getElementById('mins').innerHTML=minutes;
   document.getElementById('seconds').innerHTML=seconds;
   
}
countdown();

setInterval(countdown,1000);