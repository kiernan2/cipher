function grab(x) {
  return  x.charAt(0).toUpperCase() + x.charAt(x.length-1).toUpperCase();
}

function reverse(x) {
  return x.charAt(x.length-1) + x.charAt(0);
}

function encrypt(x) {
  return divide(x) + x + reverse(grab(x))
}

function divide(x){
  return x.charAt(x.length/2)
}

const words = prompt("Enter words");
const result = encrypt(words);
alert(result);
