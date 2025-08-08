import { ref } from 'vue';

export const isAuthenticated = ref(false);

// 硬编码一个用户名和密码。
const credentials = {
  username: 'user',
  password: 'Password123!'
};

export function login(username, password) {
  if (username === credentials.username && password === credentials.password) {
    isAuthenticated.value = true;
    return true;
  }
  return false;
}

export function logout() {
  isAuthenticated.value = false;
}