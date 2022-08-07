// let fname = 'rabbi';
// let lname = 'ahmed';
// const fullName = fname +' '+ lname;
// console.log(fullName);

const lyrics = 'My name is md Rabbi Ahmed';

const search = 'ahmed';
const doesExitONe= lyrics.toLowerCase().includes(search.toLowerCase());
console.log(doesExitONe);
console.log(lyrics.indexOf('Rabbi'));

if(lyrics.indexOf('nameeee') !== -1){
      console.log('inside this string');
}
else{
      console.log('cannot find it?');
}

console.log(lyrics.startsWith('my'));