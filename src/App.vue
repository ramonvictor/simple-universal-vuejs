<template>
  <div id="app">
    <my-header :msg="msg"></my-header>
    <my-content
      id="content"
      data-server-rendered="true"
      :links="links"
    ></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import { store } from './store.js'

export default {
  data: function () {
    return store;
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
