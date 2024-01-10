"use strict";

const day = document.querySelector(".day");
let nowDay = document.querySelector(".calculated-day").textContent;
const month = document.querySelector(".month");
let nowMonth = document.querySelector(".calculated-month").textContent;
const year = document.querySelector(".year");
let nowYear = document.querySelector(".calculated-year").textContent;
const button = document.querySelector(".img-btn"); 
let notValidMessage;

const now = new Date();


button.addEventListener("click", function () {
  let thisMonth = now.getMonth() - +month.value;
  nowDay = `${+(now.getDate() - +day.value)}`;
  nowMonth = `${+(thisMonth > 0 ? thisMonth + 1 : 12 - (thisMonth + 1) * -1)}`;
  nowYear = `${+(now.getFullYear() - +year.value)}`;
  
  if (notValidMessage) {
    notValidMessage.remove();
  } 

  const validMessage = function(element , message){
    notValidMessage = document.createElement('p');
    notValidMessage.style.color = "var(--Lightred)";
    notValidMessage.style.fontSize = "0.65rem";
    notValidMessage.textContent = message;
    element.insertAdjacentElement("afterend", notValidMessage);
    element.value = "";
  }
  if (day.value > 31) {
    validMessage(day,"Not a valid Day")
  }
  if (month.value >= 13) {
    validMessage(month,"Not a valid Month")
  }
  if (year.value > now.getFullYear()) {
    validMessage(year,"Not a valid year")
  }
  return;
});
/* 
year.parentNode.removeChild(year.nextSibling) */
