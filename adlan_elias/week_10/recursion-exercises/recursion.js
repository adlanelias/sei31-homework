// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array, max=-Infinity) {
  if (array.length === 0) {
    return max;
  }

  if (array[0] > max) {
      max = array[0]
  }
  return findMax(array.slice(1), max);
}

function factorial(n) {
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if(n == 0) {
    return 0;
  }
  if(n == 1) {
    return 1;
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

function coinFlips(tosses) {
  const combinations = [];

  const flip = function ( soFar="" ) {
    if (soFar.length === tosses) {
      combinations.push(soFar);
    } else {
      flip(soFar + 'H');
      flip(soFar + 'T');
    }
  };

  flip();

  return combinations;
}

function letterCombinations(arr) {
  // const combinations = [];
  //
  // const combo = function ( array ) {
  //   if ()
  // }
  //
  // return combinations;
}

module.exports = {
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations
}
