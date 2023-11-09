<template>
  <div class="box">
    <div class="question" v-if="currentQuestion">
      <h1 class="questionNumber">Question No.{{ currentQuestion.id }}</h1>
      <div class="questionAndImg">
        <h1>{{ currentQuestion.question }}</h1>
        <img
          :src="require('@/assets/' + currentQuestion.imageUrl)"
          alt="Question Image"
        />
      </div>

      <div class="optionSubmitMsg">
        <div class="options">
          <div v-for="(option, index) in currentQuestion.options" :key="index">
            <input
              class="option"
              type="radio"
              :id="'option_' + index"
              :value="index"
              v-model="selectedAnswer"
            />
            <label :for="'option_' + index">{{ option }}</label>
          </div>
        </div>

        <button class="submitButton" @click="submitAnswer" :disabled="answered">
          Submit
        </button>

        <p class="msg" :style="{ color: feedbackColor }">
          {{ feedbackMessage }}
        </p>
      </div>
    </div>

    <div v-if="showNextButton">
      <p class="score">Your Score: {{ score }}/10</p>
      <button class="nextButton" @click="nextQuestion">
        Go to Next Question
      </button>
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
      if (!this.answered && this.selectedAnswer !== null) {//if it's answered
        const selectedAnswerInt = parseInt(this.selectedAnswer, 10); //convert to decimal (base-10)number
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
.box {
  min-height: 83vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  text-align: left;
  padding: 20px;
  background-color: #d4f1f4; /* Baby Blue */
  margin: 0 auto;
}

.question {
  display: flex;
  flex: 1;
  background-color: #189ab4; /* Blue Grotto */
  border-radius: 10px;
  margin-right: 20px;
}
.questionNumber{
  margin-left: 30px;
}
.questionAndImg {
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 450px;
}

.options {
  display: flex;
  flex-direction: column;
  font-size: 22px;
}

h1 {
  font-size: 24px;
  color: #05445e; /* Navy Blue */
}

img {
  width: 250px;
  height: 250px;
}

input[type="radio"] {
  margin-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  vertical-align: middle;
}

label {
  color: #05445e; /* Navy Blue */
  font-weight: bold;
  margin-bottom: 10px;
}
.optionSubmitMsg {
  margin: 130px 20px 0px 100px;
}
.submitButton {
  background-color: #75e6da; /* Blue Green */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.nextButton {
  background-color: #75e6da; /* Blue Green */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.msg {
  font-size: 25px;
  font-weight: bold;
}
.score {
  font-size: 23px;
  font-weight: bold;
}

button:hover {
  background-color: #05445e; /* Navy Blue */
  transition: background-color 0.3s;
}
</style>


