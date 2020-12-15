var chalk = require('chalk');
var readlineSync = require('readline-sync');
var ruleBook = ["For every right ans you will get 1 point.","For every wrong ans you will lose 2 points.","There will be total seven number of questions.","Each question will have four choices, Out of which only one will be correct.","For answering the question type choice from: a,b,c,d ","***** End of the rule book *****"];
console.log(chalk.red("Let's see who know's me better ?? "));

var questions = [{statement: "Which is my favourite color ? " ,options: ["Red","Orange","Blue","Green"] ,ans: "c" },{statement: "Which is my favourite outdoor game ? ", options: ["Cricket","Football","Badminton","Table Tennis"] ,ans: "a" },{statement: "Which type of food, i prefer more ? ", options: ["Chinese","South Indian","North Indian","Italian"] ,ans: "c"},{statement: "Which subject i like the most ? ", options: ["Physics","Maths","Chemistry","English"], ans: "b"},{statement: "Do you know my stream in college ?! ", options: ["COE","PIE","MPAE","ME"], ans: "d"},{statement: "I want to work in which sector among the following ? " ,options: ["Government","IT","Automobile","Management"] ,ans: "b"},{statement: "Which brand of phone, i currently use ? ", options: ["Samsung","One Plus","Vivo","Xiomi"], ans: "d"}];

var option = ["a.) ","b.) ","c.) ","d.) "];

function print(ruleBook){
  for(var i = 1;i <= ruleBook.length;i++){
    console.log(chalk.bgCyan(i + ".) " + ruleBook[i-1]));
  }
}

function askQuestion(i,questions){
  console.log(questions[i].statement);
  for(var j = 0;j < questions[i].options.length;j++){
     console.log(option[j] + questions[i].options[j]);
  }
  var ans = readlineSync.question();
  return ans;
}

var userName = readlineSync.question(chalk.white('Tell me your name - '));
console.log(chalk.yellow("Hey **") + userName + chalk.yellow("** nice to meet you !!. Let's begin our quiz"));
var readRules = readlineSync.keyInYN("Do you want to read rules ? (Y - yes / N - no)");
if(readRules){
  print(ruleBook);
}

var score = 0;

for(var i = 0;i < questions.length;i++){
  var ans = askQuestion(i,questions);
  if(ans === questions[i].ans){
    console.log(chalk.greenBright("Wohooo !! You got 1 point"));
    score += 1;
  }
  else{
    console.log(chalk.redBright("Ohh No !! You lost 2 points"));
    score -= 2;
  }
}
console.log("Processing Your Score .... ....");
console.log(chalk.bgMagenta(chalk.whiteBright("Your Final Score Is : " + score)));