<template>
  <div id="app">
    <nav>
      <router-link to="/">Browse</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
      <span>|</span>
      <router-link to="/add">Add</router-link>
      <span>|</span>
      <router-link to="/edit">Edit</router-link>
      <span>|</span>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav {
  & a {
    font-weight: 600;
  }
  & span {
    display: inline-block;
    padding: 0 0.5em;
  }
}
select,
input {
  background-color: #ddd;
  border: none;
  padding: 0;
  right: 0;
}
button:focus,
input:focus,
select:focus {
  outline: 1px solid #336699;
}

.router-link-active.router-link-exact-active {
  color: #336699;
}
a:visited {
  color: #6a86a1;
}
</style>
