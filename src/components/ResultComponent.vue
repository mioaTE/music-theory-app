<template>
    <div class="box">
      <div v-if="$route.params.score === 10">
        <h2>Congratulations! You scored {{ $route.params.score }}/10</h2>
      </div>
      <div v-if="$route.params.score >= 6 && $route.params.score < 10">
        <h2>Good Job! You scored {{ $route.params.score }}/10</h2>
      </div>
      <div v-if="$route.params.score < 6">
        <h2>You Should Study More! You scored {{ $route.params.score }}/10</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>
  