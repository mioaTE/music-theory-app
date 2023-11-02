<template>
    <div class="questions">
      <h1>Question No.{{ currentQuestion.id }}</h1>
      <div class="question" v-if="currentQuestion">
        <h2>{{ currentQuestion.question }}</h2>
        <img :src="require('@/assets/' + currentQuestion.imageUrl)" alt="Question Image" />
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
      </div>
      <div v-else>
        <p>Congratulations! You have completed the quiz.</p>
      </div>
      <button v-if="showNextButton" @click="nextQuestion">Go to Next Question</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'quiz-questions',
    data() {
      return {
        currentQuestionIndex: 0,
        selectedAnswer: null,
      };
    },
    computed: {
      questions() {
        return this.$store.state.questions;
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
      console.log('Selected Answer:', this.selectedAnswer);
      console.log('Correct Answer:', this.currentQuestion.answer);
      
      const isCorrect = this.selectedAnswer === this.currentQuestion.answer;
      console.log('Is Correct:', isCorrect);

      if (isCorrect) {
        this.showAnswerFeedback(true);
      } else {
        this.showAnswerFeedback(false);
      }
    }
},
  showAnswerFeedback(isCorrect) {
    // You can define your feedback logic here.
    if (isCorrect) {
      // For a correct answer
      alert('Correct! Good job.');
      // You can also update the UI or store the result.
    } else {
      // For an incorrect answer
      alert('Oops, that was incorrect. Try again!');
      // You can also provide hints or additional feedback.
    }
  },
  nextQuestion() {
    this.selectedAnswer = null;
    this.currentQuestionIndex++;
  },
},

  };
  </script>
  
  <style>
  /* Add your CSS styling here if needed */
  </style>
  