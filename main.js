/* "use strict";

const day = document.querySelector(".day");
let nowDays = document.querySelector(".calculated-day").textContent;
const month = document.querySelector(".month");
let nowMonths = document.querySelector(".calculated-month").textContent;
const year = document.querySelector(".year");
let nowYears = document.querySelector(".calculated-year").textContent;
const button = document.querySelector(".img-btn");
let notValidMessage;

const now = new Date();

const calcAge = function () {
  button.addEventListener("click", function (e) {
    let thisMonth = now.getMonth() - +month.value;
    day = `${+(now.getDate() - +day.value)}`;
    month = `${+(thisMonth > 0 ? thisMonth + 1 : 12 - (thisMonth + 1) * -1)}`;
    year = `${+(now.getFullYear() - +year.value)}`;
    console.log(e.target);

    if (notValidMessage) {
      notValidMessage.remove();
    }

    const validMessage = function (element, message) {
      notValidMessage = document.createElement("p");
      notValidMessage.style.color = "var(--Lightred)";
      notValidMessage.style.fontSize = "0.6rem";
      notValidMessage.textContent = message;
      element.insertAdjacentElement("afterend", notValidMessage);
      element.value = "";
    };
    if ( 0 <= day.value > 31 || day.value =='') {
      validMessage(day, "Not a valid Day");
    }
    if (0 <= month.value >= 13) {
      validMessage(month, "Not a valid Month");
    }
    if (year.value > now.getFullYear()) {
      validMessage(year, "Not a valid year");
    }
    element.value = "";
    return;
  });

  nowDays.textContent = "nowday";
};

 */

const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const button = document.querySelector(".img-btn");
let calcedYear = document.querySelector(".calculated-year");
let calcedMonth = document.querySelector(".calculated-month");
let calcedDay = document.querySelector(".calculated-day");
const now = new Date();
let notValidMessage;

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
  if (0 <= month.value >= 13 || month.value == "" || month.value <= 0) {
    validMessage(month, "Not a valid Month");
  }
  if (year.value > now.getFullYear() || year.value == "" || year.value <= 0) {
    validMessage(year, "Not a valid year");
  }
  return;
};

const calcAge = function () {
  button.addEventListener("click", function () {
    calcedYear.textContent = +(now.getFullYear() - year.value);
    let thisMonth = +(now.getMonth() + 1 - month.value);
    calcedMonth.textContent = thisMonth > 0 ? thisMonth : -thisMonth;
    let thisDay = +(now.getDate() - day.value);
    calcedDay.textContent = thisDay > 0 ? thisDay : -thisDay;
    validEntry();
  });
  console.log(now);
};
calcAge();
