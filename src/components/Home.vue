<template>
  <div class="home">
    <h1>Bem-vindo ao FireChat!</h1>
    <p>Este um web app de chat criado com Vue e Firebase!</p>
    <div>
      <router-link to="/login" class="button">Login</router-link>
      <router-link to="/signup" class="button">Sign Up</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home'
};
</script>
<style scoped>
.home {
  text-align: center;
  padding: 50px;
  margin-top: 50px;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
  color: #666;
  font-size: 18px;
}

.button {
  margin: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #4CAF50;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.button:hover {
  background-color: #45a049;
}
</style>