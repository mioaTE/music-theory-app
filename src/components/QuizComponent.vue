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
      <button @click="submitAnswer" :disabled="answered">Submit</button>
      <p :style="{ color: feedbackColor }">{{ feedbackMessage }}</p>
    </div>
    
    <div v-if="showNextButton">
      <p>Your Score: {{ score }}/10</p>
      <button @click="nextQuestion">Go to Next Question</button>
    </div>
    <div v-else>
      <p>Your Final Score: {{ score }}/10</p>
    </div>
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
      answered: false, // Track whether the question has been answered
      score: 0, // Initialize the score
    };
  },
  computed: {
    questions() {
    if (this.$store.state.level === 1) {
      return this.$store.state.questions1;
    } else if (this.$store.state.level === 2) {
      return this.$store.state.questions2;
    } else if (this.$store.state.level === 3) {
      return this.$store.state.questions3;
    }
    // Handle other levels or return a default value if necessary
    return [];
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
      if (!this.answered && this.selectedAnswer !== null) {
        const selectedAnswerInt = parseInt(this.selectedAnswer, 10);
        const isCorrect = selectedAnswerInt === this.currentQuestion.answer;

        if (isCorrect) {
          this.setFeedback("Correct! Good job.", "green");
          this.score++; // Increase the score for correct answers
        } else {
          this.setFeedback("Oops, that was incorrect. Try again!", "red");
        }

        // Disable the "Submit" button after answering
        this.answered = true;
      }
    },
    setFeedback(message, color) {
      this.feedbackMessage = message;
      this.feedbackColor = color;
    },
    nextQuestion() {
      this.selectedAnswer = null;
      this.currentQuestionIndex++;
      this.feedbackMessage = "";
      this.feedbackColor = "black";
      this.answered = false;
    },
  },
};
</script>
