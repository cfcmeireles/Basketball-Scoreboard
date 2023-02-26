(function () {

"use strict";

const home = document.querySelectorAll(".buttons-home");
const guest = document.querySelectorAll(".buttons-guest");
const scoreboardHome = document.querySelector(".score-home");
const scoreboardGuest = document.querySelector(".score-guest");
const newGameBtn = document.querySelector(".new-game");
const homeTitle = document.querySelector(".home h3");
const guestTitle = document.querySelector(".guest h3");

let period = 1;
let periodTimer = document.querySelector(".period");
periodTimer.innerHTML = period;

const timer = document.querySelector(".timer");
let startingMinutes = 12;
let time = startingMinutes * 60;

let scoreHome = 0;
let scoreGuest = 0;

home.forEach((el, index) => {
  el.addEventListener("click", () => {
    scoreboardHome.innerHTML = scoreHome += index + 1;
    if (scoreHome > scoreGuest) {
      homeTitle.style.color = "red";
      guestTitle.style.color = "white";
    }
  });
});

guest.forEach((el, index) => {
    el.addEventListener("click", () => {
      scoreboardGuest.innerHTML = scoreGuest += index + 1;
      if (scoreGuest > scoreHome) {
        guestTitle.style.color = "red";
        homeTitle.style.color = "white";
      }
    });
  });

  newGameBtn.addEventListener("click", () => {
    time = 720;
    scoreHome = 0;
    scoreGuest = 0;
    scoreboardHome.innerHTML = scoreHome;
    scoreboardGuest.innerHTML = scoreGuest;
    homeTitle.style.color = "white";
    guestTitle.style.color = "white";
    periodTimer.innerHTML = 1;
    setInterval(updateCountdown, 1000);
  });

  function updateCountdown() {
    if (time < 0) {
      time = 720;
      period++;
      periodTimer.innerHTML = period;
    }
    
    if (time === 0 && period === 4) {
      clearInterval(interval);
    }

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
  }

  let interval = setInterval(updateCountdown, 1000);

}) ();