/* 
Resources From : https://www.youtube.com/watch?v=-ptMtJAdj40
App Name : QuizTracker

Principle : The open/closed principle states classes, modules, funtions etc. 
            should be open for extention, closed for modification.
            That is such an entity can allow its behaviour to be extended without modifying its 
            source code.

When you see a switch or big nested if statement it means you are in violation of the princple 
Instead of changing code you want to create new code.
*/

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer:________________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Minimum:______________________");
    console.log("Maximum:_________________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestion("This video is useful."),
  new MultipleChoiceQuestion("What is your favorite language?", [
    "CSS",
    "HTML",
    "JS",
    "Python",
  ]),
  new TextQuestion("Describe your favorite JS feature"),
  new RangeQuestion("What is the speed limit in your city?"),
];

printQuiz(questions);
