export default {
    createNews(state, params) {
        function getLastId(list) {
            return list.length ? list.slice(-1)[0].id : 0
        }

        const timeCreated = (new Date()).getTime()
        const news = {
            id: getLastId(state.news) + 1,
            title: params.title,
            description: params.description,
            timeCreated: timeCreated,
            timeUpdated: timeCreated,
            published: false
        }
        state.news.push(news)
    },
    publishNews(state, params) {
        state.news.find(x => x.id === params.id).published = params.status

    },
    saveNews(state, news) {
        const savedNews = state.news.find(x => x.id === news.id)
        savedNews.title = news.title
        savedNews.description = news.description
        savedNews.published = news.published
        savedNews.timeUpdated = (new Date()).getTime()
    },
    deleteNews(state, id) {
        const newsIndex = state.news.indexOf(state.news.find(x => x.id === id))
        if(newsIndex != -1) {
            state.news.splice(newsIndex, 1)
        }
    }
}