<template>
  <div id="app">
    <app-head></app-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from './components/Index.vue'
  import Head from './components/Head.vue'

  export default {
      components: {
          appIndex: Index,
          appHead: Head,
      }
  }
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
  }

  html, body,
  #app {
    height: 100%;
  }
  body {
    font-size: 16px;

    * {
      outline: 0;
    }
  }

  input, textarea {
    border: 1px solid grey;
    border-radius: 3px;
  }

  input {
    padding: 5px 10px;
  }

  textarea {
    resize: none;
    padding: 5px;
  }

  button {
    padding: 5px 15px;
    border-radius: 3px;
    cursor: pointer;
  }

  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 20px 0;
  }

  .box {
    width: 300px;
    padding: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
  }

  .row {
    background-color: #f6f6f6;
    padding: 10px;
    margin: 10px 0;
  }

  .errors {
    color: red;
    font-size: 14px;
  }

  .description {
    font-size: 14px;
  }
</style>