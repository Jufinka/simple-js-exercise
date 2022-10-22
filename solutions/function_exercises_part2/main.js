/*Exercise
Napisz funkcję, która wyświetla w konsoli wynik mnożenia, dzielenia,
dodawania i odejmowania dla dwóch wprowadzonych parametrów. Upewnij się, 
że przekazane wartości są liczbami. */

// Solution:
function mathExpressions(val1, val2) {
  if (isNaN(val1) || isNaN(val2)) {
    console.log("Both values must a number");
  } else if (val2 === 0) {
    console.log("You cannot divide by 0");
  } else {
    const res1 = parseInt(val1);
    const res2 = parseInt(val2);
    console.log(`Result of add ${val1} and ${val2} is ${res1 + res2}`);
    console.log(
      `Result of mutliplication ${val1} and ${val2} is ${res1 * res2}`
    );
    console.log(`Result of division ${val1} and ${val2} is ${res1 / res2}`);
    console.log(`Result of subtraction ${val1} and ${val2} is ${res1 - res2}`);
  }
}

// mathExpressions(6, "a");
// mathExpressions(6, 2);
// mathExpressions(6, 0);

const mathExpressionsArrow = (val1, val2) => {
  if (isNaN(val1) || isNaN(val2)) {
    console.log("Both values must a number");
  } else if (val2 === 0) {
    console.log("You cannot divide by 0");
  } else {
    const res1 = parseInt(val1);
    const res2 = parseInt(val2);
    console.log(`Result of add ${val1} and ${val2} is ${res1 + res2}`);
    console.log(
      `Result of mutliplication ${val1} and ${val2} is ${res1 * res2}`
    );
    console.log(`Result of division ${val1} and ${val2} is ${res1 / res2}`);
    console.log(`Result of subtraction ${val1} and ${val2} is ${res1 - res2}`);
  }
};

// mathExpressionsArrow(6, "a");
// mathExpressionsArrow(6, "2");
// mathExpressionsArrow(6, 2);
// mathExpressionsArrow(6, 0);

/*Przyjmij podany parametr. Zamień string na number.
Stwórz funkcję checkNumber, do której przekażesz tę liczbę. W funkcji sprawdź
czy liczba jest parzysta - jeżeli tak, zwróć wartość z funkcji even, a jeśli nie z funkcji odd.
Stwórz 2 pozostałe funkcje, even ma zwracać liczbę, którą dostaje, a odd liczbę, którą dostaje pomnożoną przez 2. */

// Solution:
const checkNumber = (val) => {
  const parsedVal = parseInt(val);
  if (isNaN(parsedVal)) {
    console.log("It is not a number");
  } else if (parsedVal % 2 === 0) {
    return even(parsedVal);
  } else {
    return odd(parsedVal);
  }
};

const even = (val) => {
  console.log(val);
  return val;
};

const odd = (val) => {
  console.log(val * 2);
  return val * 2;
};

// checkNumber(5);
// checkNumber("pięć");
// checkNumber(4);

// Exercise
// Zwróć sumę elementów niezależnie od tego ile ich jest

// Solution:
const sum = (...args) => {
  let tmpRes = 0;
  let isNaNValue = false;
  if (!args.length) {
    return console.log("Arrays of parameters is empty");
  }

  args.forEach((el) => {
    if (typeof el !== "number") {
      isNaNValue = true;
      return;
    }
    tmpRes += el;
  });
  // check if some value is not a number type:
  if (isNaNValue) {
    return console.log("All elements have to be numbers");
  }
  // return result only if all values are numbers:
  return tmpRes;
};

// console.log(sum(1));
// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(1, 2, "aaa", 4, 5, "aaa"));
// console.log(sum());
