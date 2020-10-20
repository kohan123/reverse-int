module.exports = function reverse (n) {
    let rev = n;
   if (n < 0) {
    rev = n * (-1);
   } 
   rev = Number(String(rev).split("").reverse().join(""));
   return rev;
}
