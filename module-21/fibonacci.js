      // program to generate fibonacci series up to n terms

      // take input from the user
      function fibonacci(number){
            let fibo =[0,1];
      for (let i = 2; i <= number; i++) {
            fibo[i] = fibo[i-1]+fibo[i-2];
            
      }
      console.log(fibo);
     
}
fibonacci(5);
