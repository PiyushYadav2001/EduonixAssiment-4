//Minimum number 
function findMinimum() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const inputNumbers = inputElement.value.split(",").map(number => parseInt(number.trim()));

    if (inputNumbers.some(isNaN)) {
      resultElement.textContent = "Invalid input. Please enter valid numbers separated by commas.";
    } else {
      const min = findMinNumber(inputNumbers);
       
      resultElement.textContent = `The minimum number is: ${min}`;
    }
  }

  function findMinNumber(numbers) {

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }

    return min;
  }
//Reverse
function findReverse() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("result");

  const inputNumbers = inputElement.value.split(",").map(number => parseInt(number.trim()));

  if (inputNumbers.some(isNaN)) {
    resultElement.textContent = "Invalid input. Please enter valid numbers separated by commas.";
  } else {
    const rev = findReverseNumber(inputNumbers);
     
    resultElement.textContent = `The Reverse number is: ${rev}`;
  }
}

function findReverseNumber(numbers) {

  let Reverse = [];

  for (let i =numbers.length ; i>-1; i--) {
    Reverse.push(numbers[i]);
  }

  return Reverse;
}

//Avergae
function findAverage() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("result");

  const inputNumbers = inputElement.value.split(",").map(number => parseInt(number.trim()));

  if (inputNumbers.some(isNaN)) {
    resultElement.textContent = "Invalid input. Please enter valid numbers separated by commas.";
  } else {
    const avg = findAverageNumber(inputNumbers);
     
    resultElement.textContent = `The Avergae of this  number is: ${avg}`;
  }
}

function findAverageNumber(numbers) {

  let totalNumberOfAvg=numbers.length;
  
  let totalofAvg=0;
  for(let i=0; i<numbers.length;i++){

    totalofAvg=totalofAvg+numbers[i];
    
  }
  
  let Avergae=totalofAvg/totalNumberOfAvg;

  return Avergae;
}

//Even Remove
function findEven() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("result");

  const inputNumbers = inputElement.value.split(",").map(number => parseInt(number.trim()));

  if (inputNumbers.some(isNaN)) {
    resultElement.textContent = "Invalid input. Please enter valid numbers separated by commas.";
  } else {
    const odd = findEvenNumber(inputNumbers);
     
    resultElement.textContent = `The odd number is: ${odd}`;
  }
}

function findEvenNumber(numbers) {

  let even = [];
 
  for(let i=0; i<numbers.length;i++){
      
    if(numbers[i] %2 == 1){
     
      even.push(numbers[i]);
    }
  }
  if(even==""){
    return"EMPTY"
   }
  return even;
}

//Common
function findCommon() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("result");

  const inputNumbers = inputElement.value.split(",").map(number => parseInt(number.trim()));

  if (inputNumbers.some(isNaN)) {
    resultElement.textContent = "Invalid input. Please enter valid numbers separated by commas.";
  } else {
    const Common = findCommonNumber(inputNumbers);
     
    resultElement.textContent = `The Common number is: ${Common}`;
  }
}

function findCommonNumber(numbers) {
    let start=numbers[0];    //1,2,2,3
  let Common =[];


  for(let i=1; i<numbers.length;i++){
    
      if(start===numbers[i]){
         
        Common.push(numbers[i]);
      }else{
       
        start=numbers[i];
      }
  }
   if(Common==""){
    return"EMPTY"
   }
  return Common;
}