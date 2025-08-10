
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;

    if (value === "clear") {
      input = "";
      screen.value = "";
    } else if (value === "=") {
      showPrankResult();
    } else {
      input += value;
      screen.value = input;
    }
  });
});

// function showPrankResult() {
//   const messages = [
//     "Ask your mom to buy you a new calculator!",
//     "Go outside and play!",
//     "This calculator is out of order!",
//     "Scroll the Reel on IG",
//     "Ask your GF",
//     "You are more genius than this calculator!",
//     "Chai pi le yaar",
//     "Padhai chhod de",
//     "Tu hero lagta",
//     "Ghar ja so jaa",
//     "Kya mast soch",
//     "Mummy bula rahi",
//     "Math ka don tu?",
//     "Aaj holiday hai",
//     "Tu best hai yaar",
//     "Smile zara kar"
//   ];


//   const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//   alert(randomMessage);


//   const randomIndex = Math.floor(Math.random() * messages.length);
//   screen.value = messages[randomIndex];
//   input = "";
// }
function showPrankResult() {
  const messages = [
    "Ask your mom ",
    "Go outside and play!",
    "This calculator is out of order!",
    "Scroll the Reel on IG",
    "Ask your GF",
    "Chai pi le yaar",
    "Padhai chhod de",
    "Tu hero lagta",
    "Ghar ja so jaa",
    "Kya mast soch",
    "Mummy bula rahi",
    "Math ka don tu?",
    "Aaj holiday hai",
    "Tu best hai yaar",
    "Smile zara kar"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  screen.value = messages[randomIndex];
  input = "";
}

