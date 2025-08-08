<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { isAuthenticated, logout as authLogout } from './auth';
import BHeader from './components/BHeader.vue';

const router = useRouter();

// 处理用户登出逻辑
const handleLogout = () => {
  authLogout(); // 调用登出函数，将 isAuthenticated.value 设置为 false
  router.push('/login'); // 跳转回登录页面
};
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main class="container mt-4">
    <router-view></router-view>
  </main>
</template>

<style>
body {
  background-color: #f8f9fa;
}
.navbar {
  margin-bottom: 1.5rem;
}
.nav-link.active {
  font-weight: bold;
}
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
</style>