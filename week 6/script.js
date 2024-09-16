const { text } = require("express");

function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  //let total = parseFloat(a1.value) + parseFloat(a2.value);
  //parseFloat를 안하면 수를 합쳐주지 않음 (ex. 12,13 = 1213이렇게 나옴
  let a1value = parseFloat(a1.value);
  let a2value = parseFloat(a2.value);
  let sum = calculateTotal(a1value, a2value);
  //let sum = calculateTotal(parseFloat(a1.value) + parseFloat(a2.value));
  console.log("sum is", sum);
  sendReport(sum);
}
// 클릭하면 나타남 (크롬에)

function calculateTotal(a, b) {
  let total = a + b;
  return total;
}

function sendReport(score) {
  const report = document.querySelector("#report");
  console.log(report);
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got a D");
    report.textContent = "you got a D";
  }
}

// const para = document.querySelector("p");
// console.log(para);
//첫번째 파라그라프만 해당
// const allPara= document.querySelectorAll("p");
// console.log(allPara);
//전체 파라그라프 해당

const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.textContent);
h1.classList.add("red-style");
// h1.textContent = "This is a new heading";

const question1 = document.querySelector("#question1");
console.log(question1.textContent);
question1.classList.add("red-style");
question1.classList.add("blue-style");
question1.classList.remove("blue-style");
//css에 있는 것을 추가해주거나 빼주는 것임
// question1.textContent = "what is as1 score?";
//qestion1을 html에서 찾은후 질문을 바꿈

// const question2 = document.querySelector("#question2");
// console.log(question2.textContent);
// question2.textContent = "what is as2 score?";

// const abcd = document.querySelector(".abcd");
// console.log(abcd);
// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

const myCat = document.querySelector("#my-cat");
console.log(myCat);
// myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
console.log(header.textContent);
// header.textContent = "my cat 2"
// textContent는 기존에 있는거를 바꾸는거
let personality = "cutest";
let doubt = "doubt";
header.innerHTML +=
  '<p class= "blue-style"> is the ${personality}! </p> <p class= "red-style"> do you have any ${doubt}? </p>';
// += subheading으로 감 (innerHTML을쓰면 계속해서 추가할수 있음)
