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

    return result.toFixed(2);
  },

  showResult() {
    console.log(calculate.calculateResult());
    Utils.clearResults();
    Utils.changeBgColorResult();
    HTML.addHTML();
  },
};

const Utils = {
  clearInputs() {
    calculate.height.value = "";
    calculate.weight.value = "";
    HTML.showResultBox.classList.add("off");
  },

  clearResults() {
    HTML.resultBox.innerHTML = "";
  },

  changeBgColorResult() {
    if (calculate.calculateResult < 16) {
      HTML.showResultBox.classList.add("blue");
      console.log("blue");
    } else if (calculate.calculateResult > 18);
    {
      HTML.showResultBox.classList.add("green");
      console.log("green");
    }
  },
};

const HTML = {
  resultBox: document.querySelector("#result-container div"),
  showResultBox: document.querySelector("#result-container"),

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
