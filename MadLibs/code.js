"use strict";

window.onload = () => {
  
  let questionTotal = 12;

  
  let questionCounter = 0;

  let request = `Please enter a`;
  let questionArray = [
    `${request} adjective`,
    `${request} nationality`,
    `${request} name`,
    `${request} noun`,
    `${request} one more adjective`,
    `${request} one more noun`,
    `${request} another adjective`,
    `${request} plural noun`,
    `${request} one more noun`,
    `${request} number`,
    `${request} shapes`,
    `${request} food`,
    `${request} another food!`,
  ];

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    questionCounter++;
    questionTotal--;
  }

  let originalStory = `<h2 style="color: #00008B;">Pizza was invented by a ${userInputs[0]} ${userInputs[1]} chef named ${userInputs[2]}."</h2>
    <h2 style="color: #00008B;">'To make a pizza, you need to take a lump of ${userInputs[3]}, and make a thin round ${userInputs[4]} ${userInputs[5]}' </h2>
    <h2 style="color: #00008B;">'Then you cover it with ${userInputs[6]} cheese, and fresh chopped ${userInputs[7]}.'</h2>
    <h2 style="color: #00008B;">'Next you have to bake it in a very hot ${userInputs[8]}. When it is done, cut it into ${userInputs[9]} ${userInputs[10]}'</h2>
    <h2 style="color: #00008B;">'Some kids like ${userInputs[11]} pizza the best, but my favorite is ${userInputs[12]}. If I could I would eat pizza ${userInputs[9]} times a day'</h2>`;

  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing story?"
  );

  console.log(originalStory);
  document.write(`<div style="text-align: center; margin-top: 50px;">${originalStory}</div>`);
};