"use strict";

const day = document.querySelector(".day");
const nowDay = document.querySelector('.calculated-day')
const month = document.querySelector(".month");
const nowMonth = document.querySelector('.calculated-month')
const year = document.querySelector(".year");
const nowYear = document.querySelector('.calculated-year')
const button = document.querySelector(".img-btn"); /* 
const notValid = document.querySelector('#notValid') */

const now = new Date();
console.log(now);
const ageMonth = now.getMonth();
const presentYear = now.getFullYear();
console.log(now.getSeconds);

button.addEventListener(
  "click",
  function (day,month,year) {
    const ageCalc = function () {
        nowDay.textContent=`${(now.getDay()-(+day.value))}`
    };
    if (day.value > 31) {
      day.insertAdjacentHTML(
        "afterend",
        `<p style="color: var(--Lightred);"> Not valid Day</p>`
      );
      day.value = "";
    }
    if (month.value > 12) {
      month.insertAdjacentHTML(
        "afterend",
        `<p style="color: var(--Lightred);"> Not valid Month</p>`
      );
      month.value = "";
    }
    if (year.value > presentYear) {
      year.insertAdjacentHTML(
        "afterend",
        `<p  style="color: var(--Lightred);"> Not valid Year</p>`
      );
      year.value = "";
    }

    return;
  }
  /* 
year.parentNode.removeChild(year.nextSibling) */
);

/* const ageCalc = function () {
    nowDay.textContent=`${(now.getDay()-(+day.value))}`
}; */