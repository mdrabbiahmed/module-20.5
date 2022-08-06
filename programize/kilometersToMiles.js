// function kiloToMiles(kilometers){
//       // We know that 1 kilometer is equal to 0.621371 miles.
//       const mile = 0.621371;
//       let miles = kilometers * mile;
//       return miles.toFixed(2);

// }
// let x = kiloToMiles(2.2);
// console.log(x,"miles");

function miletokilometer(miles){
      // We know that 1 kilometer is equal to 0.621371 miles.
      const mile = 0.621371;
      let kilometer =  miles / mile;
      return kilometer.toFixed(2);

}
let x = miletokilometer(1.37);
console.log(x,"kilometers");