<template>
  <div v-if="fetchedQuestions.length > 0">
    <h2>
      Question {{ currentQuestion + 1 }} out of {{ fetchedQuestions.length }}
    </h2>
    <Question
      :currentQuestion="fetchedQuestions[currentQuestion]"
      @next-question="nextQuestion"
      @get-user-result="getUserResult"
    />
  </div>
</template>

<script>
import axios from "axios";
import Question from "./Question.vue";

export default {
  name: "QuizContainer",
  components: {
    Question,
  },

  data: () => ({
    fetchedQuestions: [],
    currentQuestion: 0,
    answers: [],
    totalScore: 0,
    resultData: [],
  }),

  mounted() {
    // Handles the api fetch to the public api, from where the application gets the questionarie data.
    axios
      .get("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
      .then((response) => (this.fetchedQuestions = response.data.results))
      .then((response) => console.log(response));
  },
  methods: {
    /* This function makes sure that the quiz continues until all of it's ten questions has been answered.
       Once that is done it will route to the scorepage where it displays all the user's answers, the correct answers and the questions. */
    nextQuestion() {
      //  This if-statements check if the user is at the last question. Once answered, the user will be routed to the scorepage.
      if (this.currentQuestion === 9) {
        this.$router.push({
          name: "ScorePage",
          params: {
            totalScore: this.totalScore,
            resultData: this.resultData,
          },
        });
      } else {
        this.currentQuestion++;
      }
    },
    // This function adds the corressponding question, the user's answer and the correct answer to the question to the resultData list.
    getUserResult(answer, currentQuestion) {
      this.resultData.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer: answer.option,
      });
      if (answer.correct) {
        this.totalScore += 10;
      }
    },
  },
};
</script>

<style></style>
