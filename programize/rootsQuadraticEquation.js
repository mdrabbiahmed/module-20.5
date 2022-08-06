function quadraticEquation(a,b,c){
      let discriminant = b*b-4*a*c;
      if(discriminant>0){
            let root1= (-b+Math.sqrt(discriminant))/(2*a);
            let root2= (-b-Math.sqrt(discriminant))/(2*a);
            console.log(root1,root2);
      
      }
      else if(discriminant == 0){
            root1 = root2 = -b / (2 * a);
            console.log(root1,root2);
      
       }
       else{
            let realpart = (-b/(2*a)).toFixed(2);
            let imagpart = (Math.sqrt(-discriminant)/(2*a));
            console.log(root1,root2);
      
       }
}
let x = quadraticEquation(1,6,5);
