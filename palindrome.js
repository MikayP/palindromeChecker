function palindrome(str) {

str = str.toLowerCase();
var symbols = /\W+|_/g;
str = str.replace(symbols, "");
var reverse = str.split("").reverse().join("");

  if(reverse === str){
  return true;
  }else{
     return false;
   }
}
