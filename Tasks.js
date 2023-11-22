for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  });
}
//  1. What will the console display and why?
// 10

// 2. Write a JavaScript program to display the current day and time in the following format.
// Sample Output :
// Today is: Friday.
// Current time is: 4PM:50:22
let current_date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let mode = ["AM", "PM"];
let res;
res =
  "Today is:" +
  days[current_date.getDay()] +
  ". Current time is : " +
  (current_date.getHours() % 12) +
  " " +
  mode[parseInt(current_date.getHours() / 12)] +
  " : " +
  current_date.getMinutes() +
  " : " +
  current_date.getSeconds();
document.write(res);
console.log(res);

//3. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
const reverseNum = (num) =>
  parseFloat(num.toString().split("").reverse().join(""));

//   #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(n) {
  if (n < 0) {
    return "Number need to be positive";
  }

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
