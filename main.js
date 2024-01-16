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
  if (0 <= day.value > 31 || day.value == "") {
    validMessage(day, "Not a valid Day");
  }
  if (0 <= month.value >= 13 || month.value == "") {
    validMessage(month, "Not a valid Month");
  }
  if (year.value > now.getFullYear() || year.value == "") {
    validMessage(year, "Not a valid year");
  }
  return;
};

const calcAge = function () {
  button.addEventListener("click", function () {
    validEntry();
    return;
  });
  console.log(now);
};
calcAge();
