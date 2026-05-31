
let num = 75;

if (num > 100) {
  console.log("Big number!");
} else if (num > 50) {
  console.log("Medium number");
} else if (num > 10) {
  console.log("Small number");
} else {
  console.log("Very small number");
}

let temp = 15;

if (temp < 0) {
  console.log("It's ice!");
} else if (temp < 20) {
  console.log("It's cold water");
} else if (temp < 100) {
  console.log("It's warm water");
} else {
  console.log("It's boiling!");
}



let day = "Monday";

if (day === "Saturday") {
  console.log("Weekend! Rest day.");
} else if (day === "Sunday") {
  console.log("Weekend! Fun day.");
} else if (day === "Friday") {
  console.log("Almost weekend!");
} else {
  console.log("It's a weekday. Study!");
}



let age   = 16;
let money = 30;
let price = 25;

if (age >= 18 && money >= price) {
  console.log("You can buy the game!");
} else if (age < 18 && money >= price) {
  console.log("You have money but too young.");
} else if (age >= 18 && money < price) {
  console.log("You're old enough but no money.");
} else {
  console.log("Too young AND no money!");
}