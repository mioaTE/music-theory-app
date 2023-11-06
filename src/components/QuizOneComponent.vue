<template>
  <div class="questions">
    <h1>Question No.{{ currentQuestion.id }}</h1>
    <div class="question" v-if="currentQuestion">
      <h2>{{ currentQuestion.question }}</h2>
      <img
        :src="require('@/assets/' + currentQuestion.imageUrl)"
        alt="Question Image"
      />
      <div v-for="(option, index) in currentQuestion.options" :key="index">
        <input
          type="radio"
          :id="'option_' + index"
          :value="index"
          v-model="selectedAnswer"
        />
        <label :for="'option_' + index">{{ option }}</label>
      </div>
      <button @click="submitAnswer">Submit</button>
      <p :style="{ color: feedbackColor }">{{ feedbackMessage }}</p>
    </div>
    <div v-else>
      <p>Congratulations! You have completed the quiz.</p>
    </div>
    <button v-if="showNextButton" @click="nextQuestion">
      Go to Next Question
    </button>
  </div>
</template>
  
  <script>
export default {
  name: "quiz-questions",
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: null,
      feedbackColor: "black", // Default color
      feedbackMessage: "",
    };
  },
  computed: {
    questions() {
      return this.$store.state.questions1;
    },
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    showNextButton() {
      return this.currentQuestionIndex < this.questions.length - 1;
    },
  },
  methods: {
    submitAnswer() {
      if (this.selectedAnswer !== null) {
        const selectedAnswerInt = parseInt(this.selectedAnswer, 10);
        const isCorrect = selectedAnswerInt === this.currentQuestion.answer;

        if (isCorrect) {
          this.setFeedback("Correct! Good job.", "green");
        } else {
          this.setFeedback("Oops, that was incorrect. Try again!", "red");
        }
      }
    },
    setFeedback(message, color) {
      this.feedbackMessage = message;
      this.feedbackColor = color;
    },
    nextQuestion() {
      this.selectedAnswer = null;
      this.currentQuestionIndex++;
      this.feedbackMessage = ""; // Clear feedback when moving to the next question
      this.feedbackColor = "black"; // Reset the feedback color
    },
  },
};
</script>

<style>

</style>
  