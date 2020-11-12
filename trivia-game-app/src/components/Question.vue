<template>
  <div class="question-container">
      <h2>Question {{currentQuestion+1}} out of {{fetchedQuestions.length}}</h2>
      <h3>{{fetchedQuestions[currentQuestion].question}}</h3>
    <div class="answer-options">
    <button>
    
    </button>    
    
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: 'Question',

data: () => ({
    fetchedQuestions: [],
    currentQuestion: 0,
    answers: []
}),


mounted(){
    axios
    .get('https://opentdb.com/api.php?amount=10&category=11&type=multiple')
  
    .then(response => {this.fetchedQuestions = response.data.results
    
    for(let i = 0 ; i < this.fetchedQuestions.length; i++){
        this.fetchedQuestions.push(response.data.results[i].question)
    }

    }
    )
    }

}

</script>

<style>

</style>