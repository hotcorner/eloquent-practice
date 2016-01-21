function min(a, b){
 var result = a < b ? a : b; 
 return result;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10