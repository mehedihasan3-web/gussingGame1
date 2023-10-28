const form = document.querySelector("form");
const cardBody = document.querySelector(".card_body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const lostWonMessage = document.createElement("p");

//initializing Some Value

let totalAttempt = 5,
  attempts = 0,
  totalWons = 0,
  totalLost = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(gussingNumber.value);

  attempts++;
  if (attempts === 5) {
    gussingNumber.disabled = true;
    checkButton.disabled = true;
  }
  if (attempts < 6) {
    checkResult(number);
    remainingAttempts.innerHTML = `Remaining Attempts:${
      totalAttempt - attempts
    }`;
  }
  gussingNumber.value = "";
});

function checkResult(gussingNumber) {
  const randomNumber = getRendomNumber(5);

  if (gussingNumber === randomNumber) {
    resultText.innerHTML = `You have won`;
    totalWons++;
  } else {
    resultText.innerHTML = `You have lost , random number was:${randomNumber}`;
    totalLost++;
  }
  lostWonMessage.innerHTML = `Won :${totalWons} , Lost :${totalLost} `;
  lostWonMessage.classList.add("large_text");
  cardBody.appendChild(lostWonMessage);
}

function getRendomNumber(limit) {
  let randomNumber = Math.floor(Math.random() * limit) + 1;

  return randomNumber;
}
