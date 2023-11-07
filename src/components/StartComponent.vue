<template>
  <div class="box">
    <h1 class="title">MUSIC THEORY QUIZ</h1>
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

<style scoped>
.title{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 95px;
  color: #05445E;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #D4F1F4; /* Baby Blue */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.level-buttons {
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 20px 20px;
}

button {
  padding: 10px 20px;
  background-color: #75E6DA; /* Blue Green */
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px 20px 20px 20px;
}


button:focus {
  background-color: #189AB4; /* Blue Grotto */
}

button:hover {
  background-color: #05445E; /* Navy Blue */
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #a0a0a0; /* Gray for disabled */
  cursor: not-allowed;
}

button.start-button {
  background-color: #68BBE3; /* Baby Blue */
}

button.start-button:hover {
  background-color: #003060; /* Navy Blue */
}

/* Additional styling for the 'Start' button */
button.start-button {
  margin-top: 20px;
}

/* Styling for the 'Start Quiz' text */
button.start-button span {
  font-weight: bold;
  font-size: 18px;
}
</style>
