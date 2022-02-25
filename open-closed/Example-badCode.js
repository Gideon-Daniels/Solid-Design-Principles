/* 
Resources From : https://www.youtube.com/watch?v=-ptMtJAdj40
App Name : QuizTracker

Principle : The open/closed principle states classes, modules, funtions etc. 
            should be open for extention, closed for modification.
            That is such an entity can allow its behaviour to be extended without modifying its 
            source code.

When you see a switch or big nested if statement it means you are in violation of the princple 

*/



function printQuiz(questions) {
  questions.forEach((questions) => {
    console.log(questions.description);

    switch (questions.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        questions.options.forEach((options, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: _____________________");
        break;
        // code that violates the princple
        case 'range':
            console.log('Minimum:______________')
            console.log('Maximum: __________________')
            break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "This video is useful.",
  },
  {
    type: "multipliChoice",
    description: "What is your favorite language?",
    options: ["CSS", "HTML", "JS", "Python"],
  },
  {
    type: "text",
    description: "Describe your favorite JS feature",
  },
//   adding a new type 
{
    type: "range",
    description: "What is the speed limit in your city?",
  },
];

printQuiz(questions);
