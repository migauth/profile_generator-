const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {answer1: "", answer2: "", answer3: "", answer4: "", answer5: "", answer6: "", answer7: ""}

rl.question('What\'s your name? ', (answer1) => {
  answers.answer1 = answer1;
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    answers.answer2 = answer2;
    rl.question('What do you listen to while doing that? ', (answer3) => {
      answers.answer3 = answer3;
      rl.question('Which meal is your favourite? ', (answer4) => {
        answers.answer4 = answer4;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          answers.answer5 = answer5;
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            answers.answer6 = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              answers.answer7 = answer7;
              console.log(`${answers.answer1} is a person who likes ${answers.answer2}.\nThey listen to ${answers.answer3} while doing so.\nTheir favourite meal of the day is ${answers.answer4} and love eating ${answers.answer5}.\nThey also like playing ${answers.answer6}.\nIf they had a superpower, it would be the power to ${answers.answer7}!`);
              rl.close()
            });
          });
        });
      });
    });
  });
});