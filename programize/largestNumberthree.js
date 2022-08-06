function largestNumber(num1,num2,num3){
      let largest = 0;
      // check the condition
if(num1 >= num2 && num1 >= num3) {
      largest = num1;
      return largest;
  }
  else if (num2 >= num1 && num2 >= num3) {
      largest = num2;
      return largest;
  }
  else {
      largest = num3;
      return largest;
  }
  
  // display the result
  

}
let num = largestNumber(2,3,5);
console.log("The largest number is " ,num);
