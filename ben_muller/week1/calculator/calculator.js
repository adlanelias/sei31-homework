
// Part 1


const squareNumber = function ( number ) {
  const squared =  number ** 2;
  console.log(`The result of squaring the number ${number} is ${squared}.`);
  return squared
};

squareNumber(6);

//Write a function called halfNumber that will take one argument (a number), divide it by 2, 
//and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function ( number ) { 
  const halved = number / 2;
  console.log(`Half of ${number} is ${halved}.`)
  return halved;
};

halfNumber(20);

//Write a function called percentOf that will take two numbers, figure out what 
//percent the first number represents of the second number, and return the result. 
//It should also log a string like "2 is 50% of 4."

const percentOf = function ( num1, num2 ) { 
  const percentage = (( num1 / num2 ) * 100 ).toFixed(2);
  console.log(`${num1} is ${percentage}% of ${num2}.`)
  return percentage;
};

percentOf(50,100);

//Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result. It should also log a 
//string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function ( radius ) {
  const area = (Math.PI * ( radius ** 2 )).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}`)
  return area;
};

areaOfCircle(50);

/*
Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/

const customCalculation = function ( num ) {
  const halved = halfNumber( num );
  const squared = squareNumber( halved );
  const circleArea = areaOfCircle( squared );
  const percentage = percentOf( circleArea, squared )
};

customCalculation(5)

