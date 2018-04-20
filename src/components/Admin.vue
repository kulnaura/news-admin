<template>
  <div id="admin">
    <div class="page">
      <app-news-managed-list></app-news-managed-list>
    </div>
  </div>
</template>

<script>
  import NewsManagedList from './NewsManagedList.vue'

  export default {
      components: {
          appNewsManagedList: NewsManagedList
      }
  }
</script>

<style>
</style>