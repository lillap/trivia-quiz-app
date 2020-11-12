<template>
   <div class="question-container">
      <h3>{{currentQuestion.question}}</h3>
    <div class="answer-options">
        <button id="redBtn"> {{answers[0].option}}</button>
        <button id="yellowBtn"> {{answers[1].option}}</button>
        <button id="greenBtn"> {{answers[2].option}}</button>
        <button id="blueBtn"> {{answers[3].option}}</button> 
    </div>
  </div>
</template>

<script>

export default {
name: "Question",
props: {
  currentQuestion: Object,
}, 

computed: {
  answers: function () {
    let answers = []; 
    answers.push({
      option: this.currentQuestion.correct_answer,
      correct: true
    });
    this.currentQuestion.incorrect_answers.map(incorrectAnswer => {
      answers.push({
        option: incorrectAnswer,
        correct: false
      });
    });
    return this.shuffleAnswers(answers);
  }
}, 

methods: {
  shuffleAnswers(answers) {
    let shuffledAnswers = answers;
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tempAnswer = answers[i];
        answers[i] = answers[j];
        shuffledAnswers[j] = tempAnswer;
    }
    return shuffledAnswers;
}
  
}

}


</script>

<style>
</style>