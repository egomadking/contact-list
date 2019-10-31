<template>
  <div class="login-wrapper">
    <img :src="require('@/assets/phone.svg')" />
    <h2>
      Login does not do anything yet. Contact changes do not persist either.
    </h2>
    <form
      id="loginForm"
      @submit.prevent="submitLoginDetails"
      action=""
      method="get"
    >
      <label for="username">User Name</label>
      <input type="text" id="username" :value="username" />

      <label for="password">Password</label>
      <input type="password" id="password" :value="password" />

      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import LoginService from '@/services/LoginService.js';
export default {
  data() {
    return {
      username: 'Moose',
      password: ''
    };
  },
  created() {
    LoginService.helloWorld();
  },
  methods: {
    submitLoginDetails() {
      console.log('doing login stuff');
      this.$router.push({ path: '/' });
    }
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
  & input[type='submit'] {
    background-color: #deedfc;
    color: #336699;
    font-size: 1.4em;
    grid-column: 1/3;
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
