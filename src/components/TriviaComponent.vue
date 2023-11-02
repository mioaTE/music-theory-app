<template>
  <div>{{ trivia }}</div>
</template>

<script>
import triviaService from '../services/TriviaService'
export default {
    data() {
        return {
            trivia: ''
        }
    },
    created() {
        triviaService.getTrivia()
        .then(response => {
            this.trivia = response.data.text;
        })
    }
}
</script>

<style>

</style>