function reverseInt(z) {
  return Number(String(z).split("").reverse().join(""));
}

function reverseString(z) {
  return z.split("").reverse().join("");
}


// Both the methods above use reversing an array
// Here is how to reverse an array:
[1,2,3,4,5].reverse();
