<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      async register() {
        try {
          const user = {
            username: this.username,
            email: this.email,
            password: this.password
          };
          axios.post('http://localhost:8081/api/auth/register', user) .then(response => {
            console.log(response.data);
            if (response.data.code === 200) {
              console.log(response.data);
              alert('Registration successful!');
              // this.$router.push('/login');
            } else {
              this.errorMessage = response.data.message;
            }
          });
        } catch (error) {
          // 检查 error 对象的结构以防止 undefined 错误
          if (error.response) {
            this.errorMessage = error.response.data || 'Registration failed.';
          } else if (error.request) {
            // 请求已发出，但没有收到响应
            this.errorMessage = 'No response from server.';
          } else {
            // 其他错误
            this.errorMessage = error.message || 'Registration failed.';
          }
        }
      }
    }
  };
  </script>
  