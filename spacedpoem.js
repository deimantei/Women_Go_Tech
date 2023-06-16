let originalPoem = 'This Little Piggy';
let spacedPoem;

for (const element of originalPoem) {
  if (element == ",") {
    spacedPoem += `\n`;
  } else {
    spacedPoem += element;
  }
}
console.log(spacedPoem);