

// ASSIGNMENT: 
// 1. Add a new property to the instructor object
// 2. Create a function that filters topics array to only show topics with more than 5 characters
// 3. Use a while loop to simulate a simple quiz game
// 4. Implement a switch statement to provide different messages based on the number of topics
// 5. Use the ternary operator to assign a difficulty level to the course


//1
let instructor = {
    name: "John Doe",
    age: 35,
    languages: ["JavaScript", "Python", "C++"]
};

instructor.experience = "10 years";

console.log(instructor.experience)

//2
let topics = ["Variables", "Strings", "Arrays", "Objects", "Loops", "Functions"];

function filterTopics(topics) {
    return topics.filter(topic => topic.length > 5);
}

let filteredTopics = filterTopics(topics);
console.log(filteredTopics)

//3

let score = 0; 
let questionIndex = 0; 

const questions = [
  { question: "what is 5+1?", answer: "6" },
  { question: "What is 9+1?", answer: "10" },
  { question: "what is 5+5?", answer: "10" }
];

while (questionIndex < questions.length) {
  let userAnswer = prompt(questions[questionIndex].question); 

  if (userAnswer.toLowerCase() === questions[questionIndex].answer.toLowerCase()) {
    alert("Correct!");
    score++; 
  } else {
    alert("Wrong! The correct answer is: " + questions[questionIndex].answer);
  }

  questionIndex++; 
}

alert("Quiz over! Your final score is: " + score);

//4

let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

function getDayOfTheWeek(DayCount) {
    switch (DayCount) {
      case 0:
        return "Sunday.";
      case 1:
        return "Monday.";
      case 2:
      case 3:
        return "Tuesday.";
      case 4: 
      return "Wednesday";
      case 5:
        return "Thursday.";
      default:
        return "Many Days Of The Week";
    }
}


//5

let numberOfSubjects = 8;
let difficulty = numberOfSubjects > 10 ? "Hard" : numberOfSubjects > 5 ? "Medium" : "Easy";

console.log(difficulty); 
