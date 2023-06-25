const form = document.querySelector(".modal");
let count = 1;
const url = "http://65.108.155.26:8081/otp/";
let data = [];
let code = [];
let timers = []; // Массив для хранения таймеров

const renderForm = () => {
  const div = document.createElement("div");
  div.classList.add("modal-input");
  const inputName = document.createElement("input");
  inputName.dataset.id = count;
  inputName.classList.add("input-name");
  inputName.type = "text";
  inputName.placeholder = "Name";
  div.append(inputName);
  const inputSecret = document.createElement("input");
  inputSecret.dataset.id = count;
  inputSecret.classList.add("input-secret");
  inputSecret.type = "text";
  inputSecret.placeholder = "OTP Secret";
  div.append(inputSecret);
  const codeElement = document.createElement("div");
  codeElement.classList.add("code");
  codeElement.dataset.id = count;
  div.append(codeElement);
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  div.append(indicator);
  const btn = document.createElement("button");
  btn.classList.add("btn-add");
  btn.type = "button";
  btn.innerText = "+";
  div.append(btn);
  form.appendChild(div);
  btn.addEventListener("click", () => {
    count += 1;
    renderForm();
    updateCodes();
    btn.classList.add("hide");
    submitBtn.classList.add("hide");
  });
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("modal-btn");
  submitBtn.type = "button";
  submitBtn.innerText = "Save";
  form.appendChild(submitBtn);
  submitBtn.addEventListener("click", () => {
    saveData();
    request();
    console.log(data);
  });
};

const saveData = () => {
  data = [];
  const inputsName = document.querySelectorAll(".input-name");
  const inputsSecret = document.querySelectorAll(".input-secret");
  for (let i = 0; i < inputsName.length; i++) {
    const inputName = inputsName[i].value;
    const inputSecret = inputsSecret[i].value;
    const inputid = inputsName[i].dataset.id;
    data.push(new OTP(inputName, inputSecret, inputid));
  }
};

const request = async () => {
  code = [];
  for (const item of data) {
    try {
      const response = await fetch(`${url}${item.name}:${item.secret}`);
      const responseData = await response.json();
      const objvalue = Object.values(responseData);
      code.push(objvalue[0].code);
    } catch (error) {
      console.error(error);
    }
  }
  renderCode();
};

const renderCode = () => {
  const codesDisplay = document.querySelectorAll(".code");
  for (let i = 0; i < codesDisplay.length; i++) {
    if (code[i] === undefined) {
      codesDisplay[i].innerText = "Ошибка";
    } else {
      codesDisplay[i].innerText = code[i];
      console.log(code);
    }
  }
};

class OTP {
  constructor(name, secret, id) {
    this.name = name;
    this.secret = secret;
    this.id = id;
  }
}

const createTimer = (indicator) => {
  let secondsLeft = 30;
  return setInterval(async () => {
    secondsLeft--;
    indicator.innerText = secondsLeft;

    if (secondsLeft === 0) {
      await request();
      secondsLeft = 30;
    }
  }, 1000);
};

const updateCodes = () => {
  const indicators = document.querySelectorAll(".indicator");

  // Остановка предыдущих таймеров
  timers.forEach((timer) => clearInterval(timer));
  timers.length = 0;

  // Создание новых таймеров для каждой формы
  indicators.forEach((indicator) => {
    const timer = createTimer(indicator);
    timers.push(timer);
  });

  request();
};

renderForm();
updateCodes();
