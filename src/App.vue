<template>
  <div id="app">
    <div class="header">
      <div class="title">
        <h1>MUSIC THEORY QUIZ</h1>
      </div>
      <div class="nav">
        <router-link to="/" class="nav-link">Home</router-link> 
        <router-link to="/about" class="nav-link">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D4F1F4;
  background-color: #75E6DA;
  padding: 10px 20px; 
}

.title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 10px; 
}

.nav {
  display: flex;
  
}

.nav-link:hover {
  color: #D4F1F4; 
  transition: background-color 0.3s;
}
.nav-link{
  font-weight: bold;
  color: #2c3e50;
  margin: 10px; 
  text-decoration: none;

}


</style>
