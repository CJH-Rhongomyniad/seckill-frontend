<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  // import apiClient from '@/api/apiClient';
import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async login() {
        try {
          const user = {
            username: this.username,
            password: this.password
          };
          axios.post('http://localhost:8081/api/auth/login', user) .then(response => {
            console.log(response.data);
            if (response.data.code === 200) {
              console.log(response.data);
              alert('Login successful!');
              // this.$router.push('/dashboard');
            } else {
              this.errorMessage = response.data.message;
            }
          });
        } catch (error) {
          this.errorMessage = error.response.data || 'Login failed.';
        }
      }
    }
  };
  </script>
  