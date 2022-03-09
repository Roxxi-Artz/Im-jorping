const input = 'a whale of a deal';

const vowels = ['a','e','i','o','u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
    if (input[inputIndex] === vowels[vowelIndex]) {
      if (input[inputIndex] === 'e' || vowels[vowelIndex] === 'u') {
        resultArray.push(input[inputIndex],input[inputIndex])
      } else {
        resultArray.push(input[inputIndex])
      }
    }
  } 
}

console.log(resultArray.join('').toUpperCase())
console.log('UUEEIEEAUUEE')