const display = document.getElementById("display");
const buttonsContainer = document.getElementById("buttons-container");

let currentInput = "";

// Buttons
const buttons = [
  { text: "*", class: "operator" },
  { text: "/", class: "operator" },
  { text: "-", class: "operator" },
  { text: "+", class: "operator" },

  { text: "9", class: "number" },
  { text: "8", class: "number" },
  { text: "7", class: "number" },
  { text: "6", class: "number" },

  { text: "5", class: "number" },
  { text: "4", class: "number" },
  { text: "3", class: "number" },
  { text: "2", class: "number" },

  { text: "1", class: "number" },
  { text: "0", class: "number" },
  { text: ".", class: "decimal" },
  { text: "=", class: "equals" },

  { text: "C", class: "clear" },
];

// forEach loop
buttons.forEach(function (buttonData) {
  const button = document.createElement("button");
  button.textContent = buttonData.text;
  button.classList.add(buttonData.class);

  button.addEventListener("click", function () {
    handleButtonClick(buttonData.text);
  });

  buttonsContainer.appendChild(button);
});

// function for button behavior
function handleButtonClick(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    calculateResult();
  } else {
    appendToDisplay(value);
  }
}

// function to add values to display
function appendToDisplay(value) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = value;
    currentInput = value;
  } else {
    currentInput += value;
    display.textContent = currentInput;
  }
}

// function to clear display
function clearDisplay() {
  currentInput = "";
  display.textContent = "0";
}

// function to calculate result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
}
