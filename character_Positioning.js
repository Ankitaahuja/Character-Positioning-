var countLetters = function(letters) {
 let obj = {};
 let lower = letters.toLowerCase();
 for (i= 0; i < lower.length; i++) {
   if (lower[i] !== ' ') {
     if (obj[lower[i]] && obj[lower[i]] !== ' ') {
       obj[lower[i]].push(i);
     }
     else
       obj[lower[i]] = [i];
   }
 }
 return obj;
};
console.log(countLetters('lighthouse in the house"'));

