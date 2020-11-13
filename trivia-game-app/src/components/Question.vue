<template>
  <div class="question-container">
    <h3>{{ currentQuestion.question }}</h3>
    <div class="answer-options">
      <button id="redBtn" v-on:click="nextQuestion">
        {{ answers[0].option }}
      </button>
      <button v-on:click="nextQuestion" id="yellowBtn">
        {{ answers[1].option }}
      </button>
      <button v-on:click="nextQuestion" id="greenBtn">
        {{ answers[2].option }}
      </button>
      <button v-on:click="nextQuestion" id="blueBtn">
        {{ answers[3].option }}
      </button>
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
    answers: function() {
      let answers = [];
      answers.push({
        option: this.currentQuestion.correct_answer,
        correct: true,
      });
      this.currentQuestion.incorrect_answers.map((incorrectAnswer) => {
        answers.push({
          option: incorrectAnswer,
          correct: false,
        });
      });
      return this.shuffleAnswers(answers);
    },
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
    },
    nextQuestion() {
      this.$emit("next-question");
    },
  },
};
</script>

<style>
.answer-options {
  display: flex;
  flex-flow: row wrap;
}

button {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5vw;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin: 2%;
  padding-bottom: 2%;
  padding-top: 2%;
  height: 6rem;
  width: 20%;
  transition-duration: 0.4s;
  box-shadow: 4px 4px rgb(164, 164, 172);
  flex: 1 0 30%;
}

#redBtn {
  background-color: red;
  border: red;
}

#redBtn:hover {
  border: 3px solid red;
  background-color: #ffffff;
  box-shadow: 4px 4px rgb(73, 73, 77);
}

#yellowBtn {
  background-color: yellow;
  border: yellow;
}

#yellowBtn:hover {
  border: 3px solid yellow;
  background-color: #ffffff;
  box-shadow: 4px 4px rgb(73, 73, 77);
}

#greenBtn {
  background-color: green;
  border: green;
}

#greenBtn:hover {
  border: 3px solid green;
  background-color: #ffffff;
  box-shadow: 4px 4px rgb(73, 73, 77);
}

#blueBtn {
  background-color: blueviolet;
  border: blueviolet;
}

#blueBtn:hover {
  border: 3px solid blueviolet;
  background-color: #ffffff;
  box-shadow: 4px 4px rgb(73, 73, 77);
}
</style>
