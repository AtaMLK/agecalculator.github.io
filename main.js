"use strict";


const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const button = document.querySelector(".img-btn");
let calcedYear = document.querySelector(".calculated-year");
let calcedMonth = document.querySelector(".calculated-month");
let calcedDay = document.querySelector(".calculated-day");
const now = new Date();
let errorMessage;

const showMessage = function (element, message) {
    if(errorMessage){
      errorMessage.remove()
    }

      console.log(message)
    errorMessage = document.createElement("p");
    errorMessage.style.color = "var(--Lightred)";
    errorMessage.style.fontSize = "0.6rem";
    errorMessage.textContent = message;
    element.insertAdjacentElement("afterend", errorMessage);
    element.value = "";
};

const notValidEntry = function () {
  if (day.value > 31 || day.value == "" || day.value <= 0) {
    showMessage(day, "Not a valid Day");
  }
  if ( month.value >= 13 || month.value == "" || month.value < 0) {
    showMessage(month, "Not a valid Month");
  }
  if (year.value > now.getFullYear() || year.value == "" || year.value <= 0) {
    showMessage(year, "Not a valid year");
  }
};

const calcAge = function () {
  // Check if any of the required input fields are empty
  if (day.value === "" || month.value === "" || year.value === "" ) {
    notValidEntry()
    // Display an error message or handle the case as needed
    return;
  }
    let thisMonth = +(now.getMonth() - month.value )  + 1;
    let thisDay = +(now.getDate() - day.value);

    if (now.getFullYear() > year.value ){calcedYear.textContent = +(now.getFullYear() - year.value) -1;
    }
    else{
      calcedYear.textContent = "--"
    }
    if ( (now.getMonth()+1) >= month.value){
      calcedMonth.textContent = thisMonth
    }
    else if ( 12 < month.value){
      calcedMonth.textContent = "--"
    }
    else{
      calcedMonth.textContent = 12 - month.value
    }
    if (now.getDate() >= day.value ){
      calcedDay.textContent = thisDay
      calcedMonth.textContent = 13 - month.value
    }
    else if (day.value > 31 ){
      
      calcedDay.textContent = "--"
    }
    else{
      calcedDay.textContent =30 + thisDay
    }
  notValidEntry()
   // Clear input values after calculation
   day.value = "";
   month.value = "";
   year.value = "";
};

// Trigger calcAge() when the button is clicked
button.addEventListener("click", calcAge);