<template>
  <div v-if="fetchedQuestions.length > 0">
    <h2>
      Question {{ currentQuestion + 1 }} out of {{ fetchedQuestions.length }}
    </h2>
    <Question
      :currentQuestion="fetchedQuestions[currentQuestion]"
      @next-question="nextQuestion"
      @get-user-score="getUserScore"
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
    resultData: []
  }),

  mounted() {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=11&type=multiple")
      .then((response) => (this.fetchedQuestions = response.data.results))
      .then((response) => console.log(response));
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion === 9) {
        this.$router.push({name: "ScorePage", params: {
          totalScore: this.totalScore, resultData: this.resultData}  
        });
      } else {
        this.currentQuestion++;
      }
    },

    getUserScore(answer, currentQuestion) {
      this.resultData.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.correct_answer,
        userAnswer: answer.option
      })
      if (answer.correct) {
        this.totalScore += 10
      }
    }
  }
};
</script>

<style></style>
