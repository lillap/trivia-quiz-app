<template>
   <div class="question-container">
      
      <h3>{{currentQuestion.question}}</h3>
    <div class="answer-options">
      <button>

      </button>
    </div>
  </div>
</template>

<script>

export default {
name: "Question",
props: {
  fetchedQuestions: Array,
  currentQuestion: Object,
}, 

methods: {
  
}

}


</script>

<style>
</style>