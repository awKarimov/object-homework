// ========================================= 1-MASALA ============================================= //

// function getUserInfo(user) {
//   return `Foydalanuvchi ismi: ${user.ismi}, yoshi: ${user.yoshi}`;
// }

// const result = getUserInfo({
//   ismi: "Ali",
//   yoshi: 25,
// });

// console.log(result);

// ========================================= 2-MASALA ============================================= //

// const addTax = function (product) {
//   product.priceWiTax = Math.ceil(`${product.price}` * 1.12);
//   return product;
// };

// const result = addTax({
//   name: "Telefon",
//   price: 1000,
// });

// console.log(result);

// ========================================= 3-MASALA ============================================= //

// const carInfo = (car) => {
//   return `Bu ${car.color} rangli ${car.name}, ${car.year}-yil`;
// };

// const result = carInfo({
//   name: "Cobalt",
//   color: "oq",
//   year: 2022,
// });

// console.log(result);

// ========================================= 4-MASALA ============================================= //

// function hasEmail(user) {
//   return "email" in user;
// }

// const result = hasEmail({
//   name: "Ali",
//   email: "ali@gmail.com",
// });

// console.log(result);

// ========================================= 5-MASALA ============================================= //

// const getTotalSalary = function (employees) {
//   return `${employees.firstEmployeeSalary + employees.secondEmployeeSalary}`;
// };

// const result = getTotalSalary({
//   firstEmployeeName: "Ali",
//   firstEmployeeSalary: 1000,
//   secondEmployeeName: "Vali",
//   secondEmployeeSalary: 1500,
// });

// console.log(result);

// ========================================= 6-MASALA ============================================= //

// const calculateSpeed = (car) => {
//   car.speed = `${car.distance / car.time}`;
//   return car;
// };

// const result = calculateSpeed({
//   model: "Cobalt",
//   distance: 150,
//   time: 3,
// });

// console.log(result);

// ========================================= 7-MASALA ============================================= //

// const calculateWorkTime = (worker) => {
//   worker.hoursWorked = `${worker.end - worker.start}`;
//   return worker;
// };

// const result = calculateWorkTime({
//   name: "Ali",
//   start: 9,
//   end: 18,
// });

// console.log(result);

// ========================================= 8-MASALA ============================================= //

// function calculateVolume(cube) {
//   cube.volume = Math.pow(cube.side, 3);
//   return cube;
// }

// const result = calculateVolume({ side: 4 });
// console.log(result);

// ========================================= 9-MASALA ============================================= //

// const isPasswordStrong = function (user) {
//   user.isStrong = user.password.length >= 8;
//   return user;
// };

// const result = isPasswordStrong({
//   username: "test",
//   password: "12345678",
// });

// console.log(result);

// ========================================= 10-MASALA ============================================= //

// function calculateBirthYear(person) {
//   person.birthYear = 2025 - `${person.age}`;
//   return person;
// }

// const result = calculateBirthYear({
//   name: "laylo",
//   age: 20,
// });

// console.log(result);

// ========================================= 11-MASALA ============================================= //

// const updateUser = function (user) {
//   return user;
// };

// let result = updateUser({
//   name: "Ulug`bek",
//   age: 20,
// });

// Object.freeze(result);

// if (Object.isFrozen(result)) {
//   result = "Object is Frozen";
// }
// console.log(result);

// ========================================= 12-MASALA ============================================= //

// const checkFrozenStatus = (obj) => {
//   if (Object.isFrozen(obj)) {
//     console.log("Frozen");
//   } else {
//     console.log("Not Frozen");
//   }
// };

// const result = {
//   name: "Malibu",
// };

// Object.freeze(result);

// checkFrozenStatus(result);

// ========================================= 13-MASALA ============================================= //

// function addProperty(obj, key, value) {
//   if (Object.isSealed(obj)) {
//     console.log("Cannot add new property");
//   } else {
//     console.log(obj);
//   }
// }

// const result = {
//   name: "Ali",
//   age: 25,
// };

// Object.seal(result);

// addProperty(result);

// ========================================= 14-MASALA ============================================= //

// function isItSealed(obj) {
//   if (Object.isSealed(result)) {
//     console.log("Sealed");
//   } else {
//     console.log("Not Sealed");
//   }
// }

// const result = {
//   brand: "iPhone",
// };

// Object.seal(result);

// isItSealed(result);

// ========================================= 15-MASALA ============================================= //

// const checkProperty = function (obj, key) {
//   return key in obj;
// };

// const book = { title: "JS Fundamentals", author: "Mirzo" };

// const result = checkProperty(book, "author");

// console.log(result);
