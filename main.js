"use strict";

const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const button = document.querySelector(".img-btn");
let calcedYear = document.querySelector(".calculated-year");
let calcedMonth = document.querySelector(".calculated-month");
let calcedDay = document.querySelector(".calculated-day");
const now = new Date();
let notValidMessage;
/* const date1 = now.getTime();
const date2 = new Date("1989-03-02").getTime();
const year1 = Math.floor((date1 - date2) / 31536000000);
const month1 = Math.floor(((date1 - date2) / 2628288000) - Math.floor((date1 - date2) / 31536000000) * 12);
const day1 =( Math.floor((date1 - date2)/(86400000)) - Math.floor(((year1*365)+month1*30.7)));
console.log(((date1 - date2) / 31536000000) * 12);
console.log(((date1 - date2) / 2628288000));
console.log(year1, month1, day1);

let notValidMessage; */

const validMessage = function (element, message) {
  notValidMessage = document.createElement("p");
  notValidMessage.style.color = "var(--Lightred)";
  notValidMessage.style.fontSize = "0.6rem";
  notValidMessage.textContent = message;
  element.insertAdjacentElement("afterend", notValidMessage);
  element.value = "";
};

const validEntry = function () {
  if (day.value > 31 || day.value == "" || day.value <= 0) {
    validMessage(day, "Not a valid Day");
    day.textContent = "";
  }
  if (month.value >= 13 || month.value == "" || month.value <= 0) {
    validMessage(month, "Not a valid Month");
  }
  if (year.value > now.getFullYear() || year.value == "" || year.value <= 0) {
    validMessage(year, "Not a valid year");
  }
  return;
};

const calcAge = function () {
  if (!validEntry) {
    return;
  } else {
    button.addEventListener("click", function () {
      let thisYear = +(now.getFullYear() - year.value);
      let thisMonth = +(now.getMonth() + 1 - month.value);
      let thisDay = +(now.getDate() - day.value);
      if (month.value > now.getMonth() + 1) thisYear--;
      else {
        if (month.value == now.getMonth() + 1) {
          if (day.value > now.getDate()) thisYear--;
        }
      }

      calcedYear.textContent = thisYear;
      calcedMonth.textContent = thisMonth >= 0 ? thisMonth : 12+thisMonth;
      calcedDay.textContent = thisDay > 0 ? thisDay : -thisDay;
      console.log(thisYear);
      return thisYear;
    });
  }
};
calcAge();
