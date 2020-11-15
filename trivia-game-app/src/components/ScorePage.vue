<template>
  <div class="background">
    <h1>You have finished the trivia game!</h1>
    <h2 class="total-score-header">
      Your total score is: {{ totalScore }} out of 100
    </h2>
    <table>
      <tr>
        <th>Questions</th>
        <th>Your Answers</th>
        <th>Correct Answers</th>
      </tr>
      <tr v-for="(result, index) in resultData" :key="index">
        <td>{{ result.question }}</td>
        <td>{{ result.userAnswer }}</td>
        <td>{{ result.correctAnswer }}</td>
      </tr>
    </table>

    <router-link to="/"
      ><button class="start-over-btn">Start Over!</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "ScorePage",
  props: {
    totalScore: Number,
    resultData: Array,
  },
};
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  background-color: white;
  border-radius: 5px;
}

th {
  font-size: 1.5rem;
  border: 1px solid;
}

td {
  text-align: left;
  padding: 1rem;
  border: 1px solid;
}

.total-score-header {
  margin-bottom: 2%;
}

.start-over-btn {
  background: rgba(76, 175, 80, 0.4);
}

.start-over-btn:hover {
  background: rgba(76, 175, 80, 0.9);
}
</style>
