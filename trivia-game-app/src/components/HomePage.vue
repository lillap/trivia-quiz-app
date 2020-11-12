<template>
  <div class="homePage">
    <h1>{{ msg }}</h1>
    <p>
      Get started
      <button>Click here!</button>
    </p>
  
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
