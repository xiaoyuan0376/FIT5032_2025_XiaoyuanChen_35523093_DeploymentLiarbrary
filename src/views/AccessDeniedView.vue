<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container text-center mt-5">
    <h1>Access Denied</h1>
    <p>You do not have permission to view this page.</p>
    <p>Please <RouterLink to="/login">login</RouterLink> to continue.</p>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
}
</style>