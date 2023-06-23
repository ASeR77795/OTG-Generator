// const form = document.querySelector(".modal");
// let count = 1;
// const data = [];
// const request = new XMLHttpRequest();
// const url = "http://65.108.155.26:8081/otp/";
// let obj;

// const renderForm = () => {
//   const div = document.createElement("div");
//   div.classList.add("modal-input");
//   const inputName = document.createElement("input");
//   inputName.dataset.id = count;
//   inputName.classList.add("input-name");
//   inputName.type = "text";
//   inputName.placeholder = "Name";
//   div.append(inputName);
//   const inputSecret = document.createElement("input");
//   inputSecret.dataset.id = count;
//   inputSecret.classList.add("input-secret");
//   inputSecret.type = "text";
//   inputSecret.placeholder = "OTP Secret";
//   div.append(inputSecret);
//   const code = document.createElement("div");
//   code.classList.add("code");
//   div.append(code);
//   const btn = document.createElement("button");
//   btn.classList.add("btn-add");
//   btn.type = "button";
//   btn.innerText = "+";
//   div.append(btn);
//   form.appendChild(div);
//   btn.addEventListener("click", () => {
//     count += 1;
//     renderForm();
//     btn.classList.add("hide");
//     submitBtn.classList.add("hide");
//   });
//   const submitBtn = document.createElement("button");
//   submitBtn.classList.add("modal-btn");
//   submitBtn.type = "submit";
//   submitBtn.innerText = "Save";
//   submitBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     const inputs = document.querySelectorAll(".modal-input");
//     const otps = [];
//     inputs.forEach((input) => {
//       const name = input.querySelector(".input-name").value.trim();
//       const secret = input.querySelector(".input-secret").value.trim();
//       const id = input.querySelector(".input-name").dataset.id;
//       if (name !== "" && secret !== "") {
//         const otp = new OTP(name, secret, id);
//         otps.push(otp);
//       }
//     });
//     data.push(...otps);
//     data.forEach(async (item) => {
//       await fetch(`${url}${item.name}:${item.secret}`)
//         .then((response) => {
//           if (response.ok) {
//             return response.text();
//           } else {
//             throw new Error("Request failed!");
//           }
//         })
//         .then((responseData) => {
//           console.log("Response:+", responseData);
//           obj = JSON.parse(responseData);
//         })
//         .catch((error) => {
//           console.log("Request error:", error);
//         });
//       const code = document.querySelectorAll(".code");

//       code.forEach((codeItem) => {
//         if (obj) {
//           const obj1 = Object.values(obj);
//           obj1.forEach((obj1Item) => {
//             console.log(obj1Item.code);
//             codeItem.innerText = obj1Item.code;
//           });
//         }
//       });
//     });
//   });
//   form.appendChild(submitBtn);
// };

// class OTP {
//   constructor(name, secret, id) {
//     this.name = name;
//     this.secret = secret;
//     this.id = id;
//   }
// }
// renderForm();
// const text = "<name1>:<otp secret1>,<name2>:<otp secret2>...";
const form = document.querySelector(".modal");
let count = 1;
const data = [];
const request = new XMLHttpRequest();
const url = "http://65.108.155.26:8081/otp/";
let obj;

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
  const code = document.createElement("div");
  code.classList.add("code");
  div.append(code);
  const btn = document.createElement("button");
  btn.classList.add("btn-add");
  btn.type = "button";
  btn.innerText = "+";
  div.append(btn);
  form.appendChild(div);
  btn.addEventListener("click", () => {
    count += 1;
    renderForm();
    btn.classList.add("hide");
    submitBtn.classList.add("hide");
  });
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("modal-btn");
  submitBtn.type = "submit";
  submitBtn.innerText = "Save";
  submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    const inputs = document.querySelectorAll(".modal-input");
    const otps = [];
    inputs.forEach((input) => {
      const name = input.querySelector(".input-name").value.trim();
      const secret = input.querySelector(".input-secret").value.trim();
      const id = input.querySelector(".input-name").dataset.id;
      if (name !== "" && secret !== "") {
        const otp = new OTP(name, secret, id);
        otps.push(otp);
      }
    });
    data.push(...otps);
    for (const item of data) {
      try {
        const response = await fetch(`${url}${item.name}:${item.secret}`);
        if (response.ok) {
          const responseData = await response.text();
          console.log("Response: ", responseData);
          obj = JSON.parse(responseData);
        } else {
          throw new Error("Request failed!");
        }
      } catch (error) {
        console.log("Request error:", error);
      }
      const codeItems = document.querySelectorAll(".code");
      codeItems.forEach((codeItem, i) => {
        if (obj) {
          const objValues = Object.values(obj);
          objValues.forEach((obj1Item) => {
            if (obj1Item && obj1Item.code) {
              console.log(obj1Item.code);
              codeItem.innerText = obj1Item.code;
            }
          });
        }
      });
    }
  });
  form.appendChild(submitBtn);
};

class OTP {
  constructor(name, secret, id) {
    this.name = name;
    this.secret = secret;
    this.id = id;
  }
}
renderForm();
