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
      this.$store.commit('updateLevel', level); 
    },
    startQuiz() {
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
  min-height: 83vh;
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
  font-size: large;
}


button:focus {
  background-color: #189AB4; /* Blue Grotto */
}

button:hover {
  background-color: #05445E; /* Navy Blue */
  transition: background-color 0.3s;
}

</style>
