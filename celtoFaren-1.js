// // celcius to feranheit 
// function celciusToFeranhiet(cels){
//       let far = cels *(9/5)+32;
//       return far;
// }
// let celcius  = celciusToFeranhiet(1);
// console.log(celcius);


// feranheit to celcius

function farToCel(far){
      let cels = (far-32) *(5/9);
      return cels;
}
let farenheit  = farToCel(100.2);
let x = farenheit.toFixed(2);
console.log(x);