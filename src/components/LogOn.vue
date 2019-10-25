<template>
  <div class="login-wrapper">
    <img :src="require('@/assets/phone.svg')" />
    <form action="" method="get">
      <label for="username">User Name</label>
      <input type="text" id="username" />

      <label for="password">Password</label>
      <input type="password" id="password" />
    </form>
  </div>
</template>

<script>
import LoginService from '@/services/LoginService.js';
export default {
  created() {
    LoginService.helloWorld();
  }
};
</script>

<style lang="scss" scoped>
form {
  display: grid;
  font-size: 1.4em;
  font-weight: bold;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 2fr;
  width: 450px;
  & label {
    text-align: left;
  }
}
img {
  height: 50vmin;
  width: 50vmin;
}
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
