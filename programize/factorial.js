function factorial(num){
      let fact = 1;
      if(num<0){
            console.log('Error! Factorial for negative number does not exist.');  

      }
      else if(num===0){

            console.log('Error');
      }
      else{
            for(let i=1;i<=num;i++){
                  fact = fact*i;
            }
            console.log("This is Factoria:", fact);
      }
}
factorial(5);