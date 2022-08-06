// // program to check if a number is prime or not

// // take input from the user
// function prime(number){
//       let isPrime = true;

//       // check if number is equal to 1
//       if (number === 1) {
//           console.log("1 is neither prime nor composite number.");
//       }
      
//       // check if number is greater than 1
//       else if (number > 1) {
      
//           // looping through 2 to number-1
//           for (let i = 2; i < number; i++) {
//               if (number % i == 0) {
//                   isPrime = false;
//                   break;
//               }
//           }
      
//           if (isPrime) {
//               console.log(`${number} is a prime number`);
//           } else {
//               console.log(`${number} is a not prime number`);
//           }
//       }
      
//       // check if number is less than 1
//       else {
//           console.log("The number is not a prime number.");
//       }
// }
// prime(11);

// program to print prime numbers between the two numbers

// take input from the user

function prime(lowerNumber,higherNumber){
      // looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
      let flag = 0;
  
      // looping through 2 to user input number
      for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              flag = 1;
              break;
          }
      }
  
      // if number greater than 1 and not divisible by other numbers
      if (i > 1 && flag == 0) {
          console.log(i);
      }
  }
}
prime(1,10);

