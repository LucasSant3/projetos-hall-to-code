const $numberButtons = document.querySelectorAll(
  ".calculator__buttons--number"
);
const $operatorButtons = document.querySelectorAll(
  ".calculator__buttons--operator"
);

const $inputValues = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator__buttons--result");
const $clear = document.querySelector(".clear");

let n1 = null;
let n2 = null;
let operation = null;
let calculate = " ";

$numberButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputValues.value = calculate;
    if (n1 === null) {
      n1 = Number($button.textContent);
    } else {
      n2 = Number($button.textContent);
    }
  });
});

$operatorButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    if ($button.textContent === "+/-") {
      if (n2 != null) {
        n2 = n2 * -1;
        calculate = n1 + operation + n2;
        $inputValues.value = calculate;
      } else {
        n1 = n1 * -1;
        calculate = n1;
        $inputValues.value = calculate;
      }
      return;
    }
    calculate = calculate + $button.textContent;
    $inputValues.value = calculate;

    if (operation === null) {
      operation = $button.textContent;
    }
  });
});

$buttonResult.addEventListener("click", function () {
  let result = null;

  if (operation.includes("+")) {
    result = n1 + n2;
  }
  if (operation.includes("-")) {
    result = n1 - n2;
  }
  if (operation.includes("x")) {
    result = n1 * n2;
  }
  if (operation.includes("÷")) {
    result = n1 / n2;
  }
  if (operation.includes("%")) {
    result = n1 % n2;
  }
  $result.textContent = result;
});

$clear.addEventListener("click", function () {
  $inputValues.value = "";
  $result.textContent = "";
  calculate = "";
  n1 = null;
  n2 = null;
});
