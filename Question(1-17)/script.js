// // 1. PassworM ValiMator
// // Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// // passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// // Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ
/* 
let pwFirst = prompt("Enter the password :");
let pwSecond = prompt("Conform the password :");
const regex = /[A-Z]/g;
const specialCharacter = /[@#!$%^&*()_~]/g;

if (pwFirst !== null && pwSecond != null) {
  pwFirst = pwFirst.replaceAll(" ", "");
  pwSecond = pwSecond.replaceAll(" ", "");
  let checkUpperCase;
  let checkSpecialCha;
  if (pwFirst.length >= 10 && pwSecond.length >= 10) {
    if (pwFirst.match(regex) !== null && pwSecond.match(regex) !== null) {
      if (
        pwFirst.match(regex).length >= 2 &&
        pwSecond.match(regex).length >= 2
      ) {
        if (
          pwSecond.match(specialCharacter) !== null &&
          pwFirst.match(specialCharacter) !== null
        ) {
          if (
            pwSecond.match(specialCharacter).length >= 2 &&
            pwFirst.match(specialCharacter).length >= 2
          ) {
            if (pwFirst === pwSecond) {
              console.log("Password Matched. Password validation Successful.");
            } else {
              console.log(
                "Password didn't match. Password validation unsuccessful"
              );
            }
          } else {
            console.log(
              "you should give two special character in your password"
            );
          }
        } else {
          console.log("special character missing");
        }
      } else {
        console.log("you should give two Upper Case letter in your password");
      }
    } else {
      console.log("Upper Case and Special Character missing");
    }
  } else {
    console.log("Password length should be more than 10");
  }
}
*/
/*
2. Calculator
Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
to perform the operation on the two num#ersQ
The calculator function should"
L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a varia#le called resultP
L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ
*/
/*
const num1 = parseInt(prompt("Enter the value for num1 : "));
const num2 = parseInt(prompt("Enter the value for  num2 :"));
const operator = prompt("Enter the mathematical operator (+,-,*,/):");
if (isNaN(num1) && isNaN(num2) && operator === "") {
  console.log("missing field value");
} else {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator";
      break;
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
*/
/* 
3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination"
*/
/*
const color1 = prompt("Enter the first color : ");
const color2 = prompt("Enter the second color :");
let result;
let checkColor = true;
switch ((color1, color2)) {
  case ("red", "blue"):
    result = "purple";
    break;
  case ("red", "yellow"):
    result = "orange";
    break;
  case ("blue", "yellow"):
    result = "green";
    break;
  default:
    result = "Invalid color combination";
    checkColor = false;
    break;
}

if (!checkColor) {
  console.log(result);
} else {
  console.log(`The color combination of ${color1} and ${color2} is ${result}`);
}
*/

/*
4. Highest Marks
A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
*/
/*
let arrayStudentMarks = new Array();
for (let i = 0; i < 5; i++) {
  arrayStudentMarks.push(parseInt(prompt("Enter the marks :")));
}

let highestMarks = 0;
arrayStudentMarks.forEach((ele) => {
  highestMarks = ele >= highestMarks ? ele : highestMarks;
});
console.log(`The highest marks of student is ${highestMarks}`);
*/
/*
5. Capitalize
You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes
*/
/*
const name = prompt("Enter the name :");
const regex = /[a-z]/g;
function checkName(name) {
  let capitalizedName = name[0].match(regex)
    ? name[0].toUpperCase() + name.slice(1)
    : name;
  console.log(capitalizedName);
}
checkName(name);
*/
/* 
6. Vowel Counter
We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
counted
*/
const personName = "utsav";
const vowel = /[aeiou]/g;
function vowelCheck(personName) {
  let count = personName.match(vowel) ? personName.match(vowel).length : 0;
  return count;
}
console.log(
  `Total number of vowel present in ${personName} is ${vowelCheck(personName)}`
);

/*
7. Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.
*/

/*
7. Remove Duplicates
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.

To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds.
*/
const productCart = [
  "apple",
  "banana",
  "pen",
  "pencil",
  "pen",
  "grapes",
  "papaya",
  "eraser",
  "eraser",
];
const uniqueProductCart = new Array();
for (product of productCart) {
  if (!uniqueProductCart.includes(product)) {
    uniqueProductCart.push(product);
  }
}
console.log(productCart);
console.log(uniqueProductCart);

/*
8. InverteW right-angleW triangle pattern with asterisks
Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
with i rows.
*/
function rightAngleTriangle(star) {
  let result = "";
  for (let i = star; i > 0; i--) {
    for (let v = 0; v < i; v++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}

rightAngleTriangle(6);
/*
9. Check for Wivisibility.
Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
Usd a for loop and continud statdmdnt.
*/

const arrNum = [1, 2, 6, 3, 4, 45, 27, 11, 15, 16, 18];
for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] % 2 === 0) {
    continue;
  } else {
    if (arrNum[i] % 3 == 0) {
      console.log(arrNum[i]);
    }
  }
}
/*10. Correct a bug
You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug. */

const itemQuantity = [1, 2, 3, 4, 5, 6];
function doubleItemQuantity(itemQuantity) {
  itemQuantity.forEach((ele, idxs) => {
    itemQuantity[idxs] = ele ** 2;
  });
  return itemQuantity;
}
console.log(doubleItemQuantity(itemQuantity));

/* 
11. Unit converter
A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd.
*/
function convertTem(celsius) {
  return celsius * 1.8 + 32 + " degrees Fahrenheit";
}

const temp1 = convertTem(22);
console.log(temp1);

/* 
12. Calculate rental cost
A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
Thd rdntal costs arc
V Economy = Rs. 4FFF /- pdr dayE
V Midsizd = Rs. 1F,FFF /- pdr dayE
V Luxury = Rs. 2F,FFF /- pdr day.*/

function carRental(days, carType = "Not Car Type") {
  let totalCost;
  switch (carType) {
    case "Economy":
      totalCost = 4000 * days;
      break;
    case "Midsize":
      totalCost = 10000 * days;
      break;
    case "Luxury":
      totalCost = 20000 * days;
      break;
    default:
      totalCost = 0;
      break;
  }
  return `The total cost of rent ${carType} car for ${days} will be ${totalCost}`;
}
const car1 = carRental(2, "Eco");
console.log(car1);

/* 
13. Bill splitter
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/
const dish = {
  chowmin: 200,
  biryani: 500,
  pizza: 350,
  coffee: 250,
};
function billSplitter(dish, people = 0) {
  let billObject = {};
  let totalBill = 0;
  Object.values(dish).forEach((ele) => {
    billObject["totalBill"] = totalBill += ele;
    billObject["eachPersonBill"] = totalBill / people;
  });
  return billObject;
}
const table1 = billSplitter(dish, 5);
console.log(table1);

// 14. Calculate the final order price
// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

const customerCart = {
  apple: { unitPrice: 200, quantity: 2 },

  mango: { unitPrice: 300, quantity: 3 },
  rice: { unitPrice: 2000, quantity: 20 },
};

let totalCostItems = (customerCart) => {
  let totalCost = 0;
  Object.values(customerCart).forEach((ele, idx) => {
    totalCost += ele["unitPrice"] * ele["quantity"];
  });
  return "The total cost of items is " + totalCost;
};
const customer1 = totalCostItems(customerCart);
console.log(customer1);

/* 
15. Calculate the percentage of the discount
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers.
*/

let discountPercentage = (originalPrice, discountPrice) => {
  return (
    "Discount on the product is " +
    Math.round((originalPrice - discountPrice) / 100, 2) +
    "%"
  );
};
const product_1 = discountPercentage(1200, 120);
console.log(product_1);

/* 
16. Generate a random number
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator.
*/
((range) => {
  console.log("Random number is " + Math.floor(Math.random() * range));
})(100);

/* 
17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/
let customer_balance = {
  ramesh: 4000,
  utsav: 10000,
  sita: 50000,
  gita: 2000,
};
function transactions(name, withdrawal = 0, deposit = 0) {
  console.log(withdrawal);
  if (withdrawal > 0) {
    customer_balance[name] = customer_balance[name] - withdrawal;
    return "Your balance is debited by $ " + withdrawal;
  }
  if (deposit > 0) {
    customer_balance[name] = customer_balance[name] + deposit;
    return "Your balacne is credit by $" + deposit;
  }
}
transactions("ramesh", 0, 1000);
console.log(customer_balance);
