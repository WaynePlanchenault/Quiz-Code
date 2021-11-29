class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice;
    // booléen renvoie true si le choix est strictement égal à la réponse
  }
}

let questions = [
  new Question(
    // Question - réponses - bonne réponse
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

//console.log(questions);

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0; // l'index de la question actuelle
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    //vérifie la réponse de l'utilisateur
    if (this.currentQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++; // permet d'afficher la question suivante
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.lenght; // si current... est plus élevé alors on déclenche hasEnded
  }
}

// regrouper les fonctions relatives à l'affichage de l'app
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
    // on va pointer un id puis lui rajouter du text, permet de ne pas avoir à retaper ces lignes dans chaque fonction
  },
  endQuiz: function () {
    let endQuizHTML = `
        <h1>Quiz terminé ! </h1>
        <h3>Votre score est de : ${quiz.score} / ${quiz.questions.length} </h3>`;
    this.elementShown("question", endQuizHTML);
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      // récupère l'id de l'élément sur lequel on va cliquer
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]); // on conccatène l'ID en incrémentation
    }
  },
};

// logique du jeu

quizApp = () => {
  if (quiz.hasEnded()) {
    display.endQuizz();
  } else {
    display.question();
    display.choices();
    // choix
    // progrès
  }
};

// créer quiz

let quiz = new Quiz(questions);
quizApp();

// console.log(quiz);
