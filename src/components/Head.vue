<template>
  <div id="head">
    <div class="head">
      <app-login></app-login>
    </div>
  </div>
</template>

<script>
  import Login from './Login.vue'

  export default {
      components: {
          appLogin: Login
      },
  }
</script>

<style>
  #head {
    display: flex;
    justify-content: center;
    height: 50px;
  }
  .head {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>