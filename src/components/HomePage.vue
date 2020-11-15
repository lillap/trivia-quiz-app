<template>
  <!--The root page-->
  <div class="homePage">
    <img alt="Vue logo" src="../assets/trivia.png" />
    <h1>Welcome to The Trivia Game</h1>
    <!--The button below starts the game through the router link-->
    <router-link to="/QuizContainer"><button class="startBtn">Start Game!</button></router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.startBtn {
  background: rgba(76, 175, 80, 0.4);
}

.startBtn:hover {
  background: rgba(76, 175, 80, 0.9);
}</style>
