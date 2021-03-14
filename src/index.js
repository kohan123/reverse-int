module.exports = function reverse (n) {
    let rever = n;
   if (n < 0) {
    rever = n * (-1);
   } 
   rever = Number(String(rever).split("").reverse().join(""));
   return rever;
}
