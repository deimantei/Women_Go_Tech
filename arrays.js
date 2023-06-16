let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
let targetAudience = [];

for (let number of subscriberAge) {
  if (number > 20) {
    targetAudience.push(number);
  }
  console.log(`Is ${number} larger than 20? Ans:${number > 20}`);
}

for (let index = 0; index < subscriberAge.length; index++) {
  console.log(
    `Is ${subscriberAge[index]} larger than 20? Ans: ${
    subscriberAge[index] > 20
    }`
  );
  if (subscriberAge[index] > 20) {
    targetAudience.push(subscriberAge[index]);
  }
}
console.log(targetAudience);

subscriberAge.forEach((item) => {
  if (item > 20) {
    targetAudience.push(item);
  }
});

console.log(targetAudience);