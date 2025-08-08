<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../auth';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = () => {
  // 调用从 auth.js 导入的 login 函数
  if (login(username.value, password.value)) {
    // 登录成功后，跳转到受保护的 About 页面
    router.push('/about');
  } else {
    // 登录失败，显示错误提示
    errorMessage.value = 'Invalid username or password. Please try again.';
  }
};
</script>

<template>
  <div class="login-container">
    <div class="card">
      <div class="card-header">
        <h3>Login</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" class="form-control" v-model="username" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" required>
          </div>
          <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}
.card {
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.card-header {
    background-color: #007bff;
    color: white;
}
</style>