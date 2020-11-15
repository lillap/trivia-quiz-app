<template>
  <div>
    <h1>You have finished the trivia game!</h1>
    <h2>Your total score is: {{ totalScore }} out of 100</h2>
    <table>
      <tr>
        <th>Questions</th>
        <th>Your Answers</th>
        <th>Correct Answers</th>
      </tr>
      <tr v-for="(result, index) in resultData" :key="index">
        <td> {{result.question}} </td>
        <td> {{ result.userAnswer }} </td>
        <td>{{result.correctAnswer}}</td>
      </tr>
    </table>

    <button>Start over!</button>
  </div>
</template>

<script>
export default {
  name: "ScorePage",
  props: {
    totalScore: Number,
    resultData: Array
  },
};
</script>

<style></style>
