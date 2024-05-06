// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  const result = document.querySelector("p");
  result.textContent = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
