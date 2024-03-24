const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who is the author of the Harry Potter series?",
      options: ["Stephen King", "J.K. Rowling", "Rick Riordan", "Suzanne Collins"],
      answer: "J.K. Rowling"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
      answer: "Mount Everest"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest country in the world by land area?",
      options: ["China", "United States", "Canada", "Russia"],
      answer: "Russia"
    },
    {
      question: "Who wrote the novel 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald"],
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Cu", "Fe"],
      answer: "Au"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "In what year did World War II begin?",
      options: ["1914", "1939", "1941", "1945"],
      answer: "1939"
    },
    {
      question: "What is the smallest bone in the human body?",
      options: ["Femur", "Stapes", "Metatarsals", "Phalanges"],
      answer: "Stapes"
    },
    {
      question: "What is the process by which plants convert sunlight into energy called?",
      options: ["Cellular respiration", "Photosynthesis", "Transpiration", "Chemosynthesis"],
      answer: "Photosynthesis"
    },
    {
      question: "What is the closest star to Earth (besides the Sun)?",
      options: ["Alpha Centauri", "Proxima Centauri", "Sirius", "Barnard's Star"],
      answer: "Proxima Centauri"
    },
    {
      question: "Who was the first person to walk on the Moon?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Alan Shepard"],
      answer: "Neil Armstrong"
    },
    {
      question: "What ancient civilization built the Great Pyramids of Giza?",
      options: ["Greeks", "Romans", "Ancient Egyptians", "Mayans"],
      answer: "Ancient Egyptians"
    },
    {
      question: "Who played the role of Harry Potter in the movie series?",
      options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"],
      answer: "Daniel Radcliffe"
    },
    {
      question: "What is the name of the highest-grossing film of all time?",
      options: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: The Force Awakens"],
      answer: "Avatar"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-button");
  const resultsElement = document.getElementById("results");
  
  function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
  
    optionsElement.innerHTML = "";
    for (const option of questions[currentQuestion].options) {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", checkAnswer);
      optionsElement.appendChild(button);
    }
  }
  
  function checkAnswer(event) {
    if (event.target.textContent === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      displayResults();
    }
  }
  
  function displayResults() {
    submitButton.style.display = "none";
    resultsElement.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  displayQuestion();
  
  submitButton.addEventListener("click", checkAnswer);