<template>
  <div id="news-list" class="box">
    <div class="news-add">
      <h3>Add news</h3>
      <label>Title: <input type="text" v-model="newNews.title"></label>
      <label>Description: <textarea cols="30" rows="5" v-model="newNews.description"></textarea></label>
      <button @click="createNews">Add</button>
      <div v-if="errors.add.length" class="errors"><div v-for="error in errors.add">{{ error }}</div></div>
    </div>
    <div v-if="editMode">
      <h3>Edit news</h3>
      <label>Title:<input type="text" v-model="editedNews.title"></label>
      <label>Description: <textarea cols="30" rows="5" v-model="editedNews.description"></textarea></label>
      <button @click="saveNews">Save</button>
    </div>
    <div class="news-list">
      <div class="row" v-for="news in newsList">
        <div class="title">{{ news.title }}</div>
        <div class="description">{{ news.description }}</div>
        <div class="news-actions">
          <button @click="editNews(news.id)">Edit</button>
          <button v-if="!news.published" @click="publishNews(news.id)">Publish</button>
          <button v-if="news.published" @click="unpublishNews(news.id)">Unpublish</button>
          <button @click="deleteNews(news.id)" class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data: function() {
          return {
              editMode: false,
              editedNews: {},
              newNews: {
                  title: "",
                  description: ""
              },
              errors: {
                  add: []
              }
          }
      },
      methods: {
          createNews() {
              this.errors.add = []
              if(this.newNews.title && this.newNews.description) {
                  this.$store.dispatch('createNews', this.newNews)
                      .then((res, rej) => {
                          if(res.status) {
                              this.newNews = {
                                  title: "",
                                  description: ""
                              }
                          }
                      })
                  this.errors.add = []
              } else {
                  if(!this.newNews.title)       this.errors.add.push("Please, add title.")
                  if(!this.newNews.description) this.errors.add.push("Please, add description.")
              }
          },
          editNews(newsId) {
              this.editMode = true
              this.editedNews = Object.assign({},this.newsList.find(x => x.id === newsId))
          },
          saveNews() {
              this.$store.dispatch('saveNews', this.editedNews)
                  .then((res, rej) => {
                      if (res.status) {
                          this.editMode = false
                          this.editedNews = {}
                      }
                  })
          },
          deleteNews(newsId) {
              this.$store.dispatch('deleteNews', newsId)
          },
          publishNews(newsId) {
              this.$store.dispatch('publishNews', newsId)
          },
          unpublishNews(newsId) {
              this.$store.dispatch('unpublishNews', newsId)
          },
      },
      computed: {
          newsList() {
              return this.$store.getters.getNewsList.sort((a, b) => a.timeUpdated < b.timeUpdated)
          }
      }
  }
</script>

<style lang="scss">
  .news {

    &-list {
      margin-top: 30px;

      .title,
      .description {
        margin-bottom: 5px;
      }
    }

    &-actions {
      display: flex;
      justify-content: space-between;
    }
  }

  h3 {
    margin-bottom: 0.25em;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    > * {
      margin-top: 5px;
    }
  }

  button {

    &.delete {
      background-color: red;
      color: white;
    }
  }
</style>