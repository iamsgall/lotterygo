import isEven from 'is-even';

// Fantasy 5
// Numbers (5) 1-36

// Algorithms (20)

// 1 ODD-EVEN LOTTO NUMBER TIPS [READY]
// When you select your Fantasy Five numbers, try to have a relatively even mix of odd and even numbers. All odd numbers or all even numbers are rarely drawn, occurring less than 2 percent of the time. The best mix is to have 3/2 or 2/3 which means three odd and two even, or two odd and three even. One of these two patterns will occur in 64 percent of the drawings.

// 2 HIGH-LOW LOTTO NUMBER TIPS [READY]
// Winning numbers are usually spread across the entire number field. If we take a number field and cut it in half, we have the low half and the high half. In a 36-number game like FL Fantasy 5, numbers 1 to 18 would be in the low half, and numbers 19 to 36 would be in the high half. All high numbers or all low numbers are rarely drawn, occurring only 2 percent of the time. The best mix is to have 3/2 or 2/3 which means three high and two low, or two high and three low. One of these two patterns will occur in 69 percent of the drawings.

// 3 LOTTERY NUMBER GROUP STRATEGIES [READY]
// Look at a list of past winning numbers for FL Fantasy 5, and you'll see that most often one or more of the number groups is not represented. For example, in the combination 5-8-14-17-32, there are no 20's. Tracking and studying Number Groups can help you decide which group to omit and which group to give extra heavy play.

const calcStrategies = (min, max, arrayPicked, randomNum0123) => {
  // STRATEGY 1
  let quantityEven = 0;
  let quantityOdd = 0;

  // STRATEGY 2
  let quantityNumberLessEqual18 = 0;
  let quantityNumberGreaterEqual19 = 0;

  while (arrayPicked.length !== 5) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    if (isEven(randomNum) && quantityEven < 3) {
      if (randomNum <= 18 && quantityNumberLessEqual18 < 3) {
        if (randomNum0123 === 0 && 9 < randomNum && randomNum <= 36) {
          quantityEven++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 1 &&
          ((1 <= randomNum && randomNum < 10) ||
            (19 < randomNum && randomNum <= 36))
        ) {
          quantityEven++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 2 &&
          ((1 <= randomNum && randomNum < 20) ||
            (29 < randomNum && randomNum <= 36))
        ) {
          quantityEven++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (randomNum0123 === 3 && 1 <= randomNum && randomNum < 30) {
          quantityEven++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        }
      } else if (randomNum >= 19 && quantityNumberGreaterEqual19 < 3) {
        if (randomNum0123 === 0 && 9 < randomNum && randomNum <= 36) {
          quantityEven++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 1 &&
          ((1 <= randomNum && randomNum < 10) ||
            (19 < randomNum && randomNum <= 36))
        ) {
          quantityEven++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 2 &&
          ((1 <= randomNum && randomNum < 20) ||
            (29 < randomNum && randomNum <= 36))
        ) {
          quantityEven++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (randomNum0123 === 3 && 1 <= randomNum && randomNum < 30) {
          quantityEven++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        }
      }
    } else if (!isEven(randomNum) && quantityOdd < 3) {
      if (randomNum <= 18 && quantityNumberLessEqual18 < 3) {
        if (randomNum0123 === 0 && 9 < randomNum && randomNum <= 36) {
          quantityOdd++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 1 &&
          ((1 <= randomNum && randomNum < 10) ||
            (19 < randomNum && randomNum <= 36))
        ) {
          quantityOdd++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 2 &&
          ((1 <= randomNum && randomNum < 20) ||
            (29 < randomNum && randomNum <= 36))
        ) {
          quantityOdd++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        } else if (randomNum0123 === 3 && 1 <= randomNum && randomNum < 30) {
          quantityOdd++;
          quantityNumberLessEqual18++;
          arrayPicked.push(randomNum);
        }
      } else if (randomNum >= 19 && quantityNumberGreaterEqual19 < 3) {
        if (randomNum0123 === 0 && 9 < randomNum && randomNum <= 36) {
          quantityOdd++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 1 &&
          ((1 <= randomNum && randomNum < 10) ||
            (19 < randomNum && randomNum <= 36))
        ) {
          quantityOdd++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (
          randomNum0123 === 2 &&
          ((1 <= randomNum && randomNum < 20) ||
            (29 < randomNum && randomNum <= 36))
        ) {
          quantityOdd++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        } else if (randomNum0123 === 3 && 1 <= randomNum && randomNum < 30) {
          quantityOdd++;
          quantityNumberGreaterEqual19++;
          arrayPicked.push(randomNum);
        }
      }
    }
    arrayPicked.sort((a, b) => {
      return a - b;
    });
  }
  const dataArr = new Set(arrayPicked);
  let result = [...dataArr];
  return result;
};

export const pickNumbers = (min, max) => {
  const arrayPicked = [];
  // STRATEGY 3
  // 0 => 1 - 9
  // 1 => 10 - 19
  // 2 => 20 - 29
  // 3 => 30 - 36
  const randomNum0123 = Math.round(Math.random() * 3); // Output: 0 || 1 || 2 || 3
  const numbersPickedNotRepeated = calcStrategies(
    min,
    max,
    arrayPicked,
    randomNum0123
  );
  if (numbersPickedNotRepeated.length !== 5) {
    calcStrategies(min, max, numbersPickedNotRepeated, randomNum0123);
  }
  return numbersPickedNotRepeated;
};

export const test = () => {
  const randomNum0123 = Math.round(Math.random() * 3); // Output: 0 || 1 || 2 || 3

  switch (randomNum0123) {
    case 0:
      if (4 < 3) {
      } else {
      }
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
};
