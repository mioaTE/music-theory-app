<template>
  <button @click="startQuiz">Start</button>
</template>

<script>
export default {
    methods: {
    startQuiz() {
      this.$router.push({ name: 'quiz' });
    }
}   
}
</script>

<style>

</style>