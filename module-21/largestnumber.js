
//   // it is largest number in Array programm;
// function maxInArray(numbers){
//       let largest = numbers[0];
//       for(let i=0; i<numbers.length;i++){
//             const element = numbers[i];
          
//             if(element>largest){
//                   largest = element; 
//             }
//       }
//       return largest;
// }
// let array = numbers = [22,63,50,8,45,60,80,0];
// let result = maxInArray(array);
// console.log(result);


  // it is Smallest number in Array programm;
  function SmallInArray(numbers){
      let Smallest = numbers[0];
      for(let i=0; i<numbers.length;i++){
            const element = numbers[i];
          
            if(element<Smallest){
                  Smallest = element; 
            }
      }
      return Smallest;
}
let array = numbers = [22,63,50,8,45,60,80,0,-1];
let result = SmallInArray(array);
console.log(result);
