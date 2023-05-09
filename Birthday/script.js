function countdown() {
    const birthday = new Date("2023-06-07"); // Установите дату своего дня рождения
    const now = new Date();
    const difference = birthday.getTime() - now.getTime();
     
    if (difference <= 0) {
      clearInterval(interval);
      return;
    }
  
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  }
  
  const interval = setInterval(countdown, 1000);