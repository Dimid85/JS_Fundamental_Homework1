//Завдання 2
   console.log("Samotii");

//Завдання 3
let age = 40;
let yourPet = "Gimi";
console.log(age);
console.log(yourPet);
age = yourPet;
console.log(age);
console.log(yourPet);

//Завдання 4
const variableType = {
   name: "Dmytro",
   age: 38,
   student: false,
   typeUndefined: undefined,
   typeNull: null
};

//Завдання 5
let isAdult = confirm("Are you 18?");
console.log(isAdult);

//Завдання 6
const firstName = "Dmytro";
const lastName = "Samotii";
const group = 1016;
const birthYear = 1985;
const familyStatus = true;
console.log(typeof group);
console.log(typeof birthYear);
console.log(typeof familyStatus);
console.log(typeof firstName);
console.log(typeof lastName);
let typeNull= null;
let typeUndefined= undefined;
console.log(typeof typeNull);
console.log(typeof typeUndefined);

//Завдання 7
const login = prompt("Enter your LOGIN");
const email = prompt("Enter your EMAIL");
const password = prompt("Enter your PASSWORD");
console.log(`Dear ${login}, your email is ${email} your password is ${password}`);

//Завдання 8 варіант 1
function secondsFromTime(days, hours, minutes, seconds) {
   const SECONDS_IN_DAY = 86400;
   const SECONDS_IN_HOUR = 3600;
   const SECONDS_IN_MINUTE = 60;
   const daysInSecond = days * SECONDS_IN_DAY;
   const hoursInSeconds = hours * SECONDS_IN_HOUR;
   const minutesInSeconds = minutes * SECONDS_IN_MINUTE;
   const totalSeconds =
     daysInSecond + hoursInSeconds + minutesInSeconds + seconds;
   return console.log(totalSeconds);
 }
 const days = parseInt(prompt("Enter days"));
 const hours = parseInt(prompt("Enter hours"));
 const minutes = parseInt(prompt("Enter minutes"));
 const seconds = parseInt(prompt("Enter seconds"));
secondsFromTime(days, hours, minutes, seconds);
 
//Завдання 8 варіант 2
const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;
console.log(`Seconds in an hour: ${secondsInHour}`);
console.log(`Seconds in a day: ${secondsInDay}`);
console.log(`Seconds in a month: ${secondsInMonth}`);

// Завдання 9 варіант 1 (Один з типів вагонів де: 1 і 3 нижні місця основного вагону, 2 і 4 - верхні місця основного вагону, 5-нижнє бокове а 6-верхнє бокове )
function infoAboveTrainPlace(ticketNumber) {
   let compartment = parseInt(ticketNumber / 6) + 1;
   let typeOfPlace;
   console.log(`Your compartment is: ${compartment}`);
   const placePosition = ticketNumber % 6;
   if (placePosition === 1 || placePosition === 3) {
     typeOfPlace = console.log("Your place is bottom in basic compartment");
   } else if (placePosition === 2 || placePosition === 4) {
     typeOfPlace = console.log("Your place is top in basic compartment");
   } else if (placePosition === 5) {
     typeOfPlace = console.log("Your place is bottom in left compartment");
   } else {
     typeOfPlace = console.log("Your place is top in left compartment");
   }
   return compartment, typeOfPlace;
 }
infoAboveTrainPlace(ticketNumber = parseInt(prompt("Enter number of tour ticket:")));

// Завдання 9 варіант 2 (Інший з типів вагонів де з 1 по 36 місця в основному вагоні, причому непарні це нижні а парні це верхні. А з 37 по 54 бокові місця
//де непарні це нижні а парні це верхні
infoAboveTrainPlace = ticketNumber => {
   console.log(typeof (ticketNumber));
   if (ticketNumber < 1 || ticketNumber > 54|| !Number.isInteger(ticketNumber)) { 
      return "Incorrect ticket number"
   } else
   return (ticketNumber <= 36 ? `Your compartment is: ${Math.ceil(ticketNumber / 4)} and your place in basic compartment is:${ticketNumber % 2 === 0 ? "top" : "bottom"}` : `Your compartment is: ${Math.abs(Math.ceil((ticketNumber-36)/2)-10)} and your place in left compartment is:${ticketNumber % 2 === 0 ? "top" : "bottom"}`);
}
infoAboveTrainPlace(ticketNumber = parseInt(prompt("Enter number of tour ticket:")));