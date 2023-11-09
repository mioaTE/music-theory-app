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
  </div>
</template>

<script>
export default {
  name: "quiz-questions",
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: null,
      feedbackColor: "black",
      feedbackMessage: "",
      answered: false,
      score: 0,
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
          this.score++;
        } else {
          this.setFeedback("Oops, that was incorrect.", "red");
        }
        this.answered = true;
        if (this.currentQuestionIndex == this.questions.length - 1) {
          this.goToResult();
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
      this.feedbackMessage = "";
      this.feedbackColor = "black";
      this.answered = false;
    },
    goToResult() {
        this.$router.push({ name: "result", params: { score: this.score } });
    },
  },
};
</script>

<style scoped>
.questions {
  text-align: center;
  padding: 20px;
  background-color: #d4f1f4; /* Baby Blue */
  border: 2px solid #05445e; /* Navy Blue */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  color: #05445e; /* Navy Blue */
}

.question {
  background-color: #189ab4; /* Blue Grotto */
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

h2 {
  font-size: 18px;
  color: #05445e; /* Navy Blue */
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

input[type="radio"] {
  margin-right: 5px;
  vertical-align: middle;
}

label {
  color: #05445e; /* Navy Blue */
  font-weight: bold;
}

button {
  background-color: #75e6da; /* Blue Green */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

button:disabled {
  background-color: #a0a0a0; /* Gray for disabled */
  cursor: not-allowed;
}

p {
  font-size: 16px;
  font-weight: bold;
}
</style>
