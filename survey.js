const readline = require('readline')
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

r1.question('what is your name? ', (answer1) => {
  console.log(`oh so your name is  ${answer1}`);

r1.question('whats an activety you like doing?', (answer2) => {
  console.log(`nice, i like to ${answer2} too!`)
r1.question('what do you listen to while doing that?', (answer3) => {
  console.log(`nice taste in music`)
r1.question('which is your favorite meal?', (answer4) => {
  console.log('me too')
r1.question('what is your favorite thing to eat for that meal?', (answer5) => {
  console.log('mmmmmm')

  setTimeout(() => {
    console.log(`${answer1} likes ${answer2} while listening to ${answer3}. ${answer1}'s favorite meal is ${answer4} and likes to eat ${answer5} for that meal.`)
  },2000)

  r1.close()
        })
      });
    });
  });

});

