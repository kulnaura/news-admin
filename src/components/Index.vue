<template>
  <div id="index">
    <div class="page">
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
    import Login from './Login.vue'
    import NewsList from './NewsList.vue'

    export default {
        components: {
            appLogin: Login,
            appNewsList: NewsList
        }
    }
</script>

<style>
</style>