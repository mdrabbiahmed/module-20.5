function given_marks(mark){
      if(mark>100 && mark<0){
            return "Invalid Number";
      }
      else if(mark>=80){
            return "A+";
      }
      else if(mark>=70){
            return "A";
      }
      else if(mark>=60){
            return "A-";
      }
      else if(mark>=50){
            return "B";
      }
      else if(mark>=40){
            return "C+";
      }
      else if(mark>=33){
            return "D+";
      }
      else{
            return "Fail";
      }

}
let result = given_marks(20);
console.log(result);