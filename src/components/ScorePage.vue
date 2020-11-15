<template>
  <div class="background">
    <h1>You have finished the trivia!</h1>
    <h2 class="total-score-header">
      <!--Displays the total highscore for the user -->
      Your total score is: {{ totalScore }} out of 100 points.
    </h2>
    <table>
      <tr>
        <th>Questions</th>
        <th>Your Answers</th>
        <th>Correct Answers</th>
      </tr>
      <!-- Displays the questions, user answers and the correct answers through a table -->
      <tr v-for="(result, index) in resultData" :key="index">
        <td>{{ result.question }}</td>
        <td>{{ result.userAnswer }}</td>
        <td>{{ result.correctAnswer }}</td>
      </tr>
    </table>

    <!-- Re-routes and lets the user start the game from scratch again -->
    <router-link to="/"
      ><button class="start-over-btn"><b>Play again!</b></button></router-link
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
  background: rgba(104, 202, 107, 0.4);
}

.start-over-btn:hover {
  background: rgba(91, 212, 95, 0.9);
}
</style>
