function reverseString(text){
      let reversed ='';
      for(let i = text.length-1; 0<=i; i--){
            let reverse = text[i];
            reversed = reversed + reverse;
            console.log(reversed);
      }
      return reversed;
      
}
const mystring = text = ["I am a good Boy"];
let reversed = reverseString(mystring);
console.log(reversed);
