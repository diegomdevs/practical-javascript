function printSubZero(arr) {
  console.log(arr[0]);
}

printSubZero([1, 2, 3]);
console.log("---".repeat(20));
function printArrayElements(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}
printArrayElements([1, 2, 3]);

console.log("---".repeat(20));

function printObjectElements(object) {
  for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
}
printObjectElements({
  2: 2,
  1: 1,
});
