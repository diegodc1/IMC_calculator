const calculate = {
  height: document.querySelector("input#height"),
  weight: document.querySelector("input#weight"),

  getValues() {
    return {
      height: calculate.height.value,
      weight: calculate.weight.value,
    };
  },

  calculateResult() {
    let { height, weight } = calculate.getValues();

    height = Number(height);
    weight = Number(weight);

    const result = weight / (height * height);

    return Number(result.toFixed(2));
  },

  showResult() {
    console.log(calculate.calculateResult());
    Utils.clearResults();
    HTML.addHTML();
    Utils.changeBgColorResult();
  },
};

const Utils = {
  clearInputs() {
    calculate.height.value = "";
    calculate.weight.value = "";
    HTML.showResultBox.classList.add("off");
    window.location.reload();
  },

  clearResults() {
    HTML.resultBox.innerHTML = "";
    HTML.lightBlueBox.classList.remove("focus");
    HTML.blueBox.classList.remove("focus");
    HTML.greenBox.classList.remove("focus");
    HTML.yellowBox.classList.remove("focus");
    HTML.lightOrangeBox.classList.remove("focus");
    HTML.orangeBox.classList.remove("focus");
    HTML.redBox.classList.remove("focus");
  },

  changeBgColorResult() {
    if (calculate.calculateResult() < 16.9) {
      HTML.showResultBox.classList.add("light-blue");
      HTML.lightBlueBox.classList.add("focus");
    } else if (
      calculate.calculateResult() > 17 &&
      calculate.calculateResult() < 18.4
    ) {
      HTML.showResultBox.classList.add("blue");
      HTML.blueBox.classList.add("focus");
    } else if (
      calculate.calculateResult() >= 18.5 &&
      calculate.calculateResult() <= 24.9
    ) {
      HTML.showResultBox.classList.add("green");
      HTML.greenBox.classList.add("focus");
    } else if (
      calculate.calculateResult() >= 25.0 &&
      calculate.calculateResult() <= 29.9
    ) {
      HTML.showResultBox.classList.add("yellow");
      HTML.yellowBox.classList.add("focus");
    } else if (
      calculate.calculateResult() >= 30.0 &&
      calculate.calculateResult() <= 34.9
    ) {
      HTML.showResultBox.classList.add("light-orange");
      HTML.lightBlueBox.classList.add("focus");
    } else if (
      calculate.calculateResult() >= 35.0 &&
      calculate.calculateResult() <= 40.0
    ) {
      HTML.showResultBox.classList.add("orange");
      HTML.orangeBox.classList.add("focus");
    } else if (calculate.calculateResult() >= 40.0) {
      HTML.showResultBox.classList.add("red");
      HTML.redBox.classList.add("focus");
    }
  },
};

const HTML = {
  resultBox: document.querySelector("#result-container div"),
  showResultBox: document.querySelector("#result-container"),
  lightBlueBox: document.querySelector("#light-blue-box"),
  blueBox: document.querySelector("#blue-box"),
  greenBox: document.querySelector("#green-box"),
  yellowBox: document.querySelector("#yellow-box"),
  lightOrangeBox: document.querySelector("#light-orange-box"),
  orangeBox: document.querySelector("#orange-box"),
  redBox: document.querySelector("#red-box"),

  addHTML() {
    HTML.showResultBox.classList.remove("off");

    const p = document.createElement("p");
    p.innerHTML = HTML.innerHTML();

    HTML.resultBox.append(p);
  },

  innerHTML() {
    const result = calculate.calculateResult();

    const html = `<p>Seu IMC é: ${result}</p>`;

    return html;
  },
};
