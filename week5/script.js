// console.log("welcome to the class");
// // this is a comment
// //this is another comment
// let myName = "alice";
// const myCity02 = "melborune";
// console.log(myName, "Lives in", myCity02);
// console.log(`${myName} lives in ${myCity02}`);
// let count = 10;
// console.log(count);
// //number variable

// let isItMorningClass = true;
// let isItAfternoonClass = false;
// //Boolean cariable

// let myStudentRecord = {
//   name: "Rohit",
//   id: 1234,
//   class: "OART1013'",
//   isItScience: false,
//   isItDesign: true,
// };

// console.log("Hello everyone, my name is", myStudentRecord.name);

// console.log("my id is", myStudentRecord.id);
// console.log("my class is", myStudentRecord.class);
// console.log("are you science student? ", myStudentRecord.isItScience);

// const numberArray = [2, 4, 6, 8, 10];
// console.log(numberArray[2]);

// myStudentRecord.isItScience = true;
// if (myStudentRecord.isItScience === true) {
//   console.log("Sorry you are in a wrong class");
// } else {
//   console.log("Welcome ro OART1013");
// }

// let myScore = 60;
// if (myScore >= 90) {
//   console.log("You scored a HD");
// } else if (myScore <90 && myScore >= 70) {
//   console.log("you scored a D");
// } else if (myScore < 70 && myScore >=50) {
//     console.log("You score a C")
// } else {
//     console.log("you score a P")
// }

// console.log("Hello Sarah");
// console.log("Hello Peter");
// console.log("Hello Alice");
// console.log("Hello Robert");
// console.log("Hello Jenny");

const names = ["Sarah", "Peter", "Alice", "Robert", "jenny"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hellp", names[i]);
}
let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Sneakers", price: 80 },
  { name: "Backpack", price: 30 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCart[i].price;
  //0,1,2,3(인덱스값)이 더해지는게 아니고 전의 가격의 값을 더해주는 것(배열의 price 값)
  console.log("intermediate sum", sum);
}

console.log(sum);
