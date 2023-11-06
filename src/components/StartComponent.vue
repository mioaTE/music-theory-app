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
    if (this.$store.state.level === 1) {
      // Start Level 1 quiz
      this.$router.push({ name: 'level1-quiz' });
    } else if (this.$store.state.level === 2) {
      // Start Level 2 quiz
      this.$router.push({ name: 'level2-quiz' });
    } else if (this.$store.state.level === 3) {
      // Start Level 3 quiz
      this.$router.push({ name: 'level3-quiz' });
    }
  },

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