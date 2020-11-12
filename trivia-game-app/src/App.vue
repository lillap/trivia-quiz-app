<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HomePage msg="Welcome to The Trivia Game"/>
    <QuizContainer/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import QuizContainer from './components/QuizContainer.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    QuizContainer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
