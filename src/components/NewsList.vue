<template>
  <div id="news-list" class="box">
    <div class="news-list">
      <h3>News List</h3>
      <div class="row" v-for="news in newsList">
        <div class="title">{{ news.title }}</div>
        <div class="description">{{ news.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        computed: {
            newsList() {
                return this.$store.getters.getNewsList.filter(x => x.published).sort((a, b) => a.timeUpdated < b.timeUpdated)
            }
        }
    }
</script>

<style>
</style>