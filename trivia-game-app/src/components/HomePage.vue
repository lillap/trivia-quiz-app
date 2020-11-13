<template>
  <div class="homePage">
    <h1>{{ msg }}</h1>
      <router-link to="/QuizContainer"><button>Start Game!</button></router-link>  
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
