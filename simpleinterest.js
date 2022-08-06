// simple interest problems in javascript

function simpleInterest(p,r,t){
      let si= (p*r*t)/100;
      return si;
}
let result = simpleInterest(2000,8,3);
console.log(result);