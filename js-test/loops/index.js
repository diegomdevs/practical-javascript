let firstI = 0;
while (firstI <= 5) {
  console.log(`1st i value is: ${firstI}`);
  firstI++;
}
let secondI = 10;
while (secondI >= 2) {
  console.log(`2nd i value is: ${secondI}`);
  secondI--;
}

while (true) {
  const answer = Number(prompt("How many is 2 + 2?"));
  if (answer === 4) {
    alert("Congrats!");
    break;
  }
  alert("Woops, incorrect! Let's try again :)");
}
