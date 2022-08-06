function oddSum(number){
      let sum = 0;
      for(let i=0;i<number.length;i++){
            let index = number[i];
            if(index%2 != 0){
                  console.log(index);
                  sum = sum + index;
            }              
      }
      return sum;
}
let num = number = [1,2,3,4,5,6,7,8,9,10];
let value = oddSum(num);
console.log("Odd Sum: ",value);