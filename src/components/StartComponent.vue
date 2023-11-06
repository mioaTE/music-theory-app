<template>
  <div>
    <div class="level-buttons">
      <button @click="selectLevel(1)">Level1</button>
      <button @click="selectLevel(2)">Level2</button>
      <button @click="selectLevel(3)">Level3</button>
    </div>
    <button @click="startQuiz">Start</button>
  </div>
</template>


<script>
export default {
  methods: {
    selectLevel(level) {
      // You can store the selected level in a data property or Vuex store
      // and use it when starting the quiz.
      this.$store.commit('updateLevel', level); // Store the selected level in a data property
    },
    startQuiz() {
      // Start Level 1 quiz
      this.$router.push({ name: 'quiz' });
    } 
  },
  data() {
    return {
      selectedLevel: null,
    };
  },
  
};
</script>

<style>

</style>