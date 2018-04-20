export default {
    login(context, loginData) {
        function fakeLogin(loginData) {
            const user = context.state.users.find(x => {
                return x.login === loginData.login
            })
            const result = {
                login: null,
                admin: false,
                message: ""
            }
            if(!user) {
                result.message = context.state.messages.USER_NOT_FOUND
            } else if(user.password == loginData.password) {
                result.login = user.login
                if(user.admin) {
                    result.admin = true
                }
                result.message = context.state.messages.USER_LOGGED
            } else {
                result.message = context.state.messages.WRONG_PASSWORD
            }
            return result
        }

        return new Promise((resolve, reject) => {
            setTimeout(resolve, 200, fakeLogin(loginData))
        })
    },
    logout(context) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 200, {status: true})
        })
    },
    createNews(context, params) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('createNews', params)
                resolve({status: true})
            }, 200)
        })
    },
    publishNews(context, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('publishNews', {id: id, status: true})
                resolve({status: true})
            }, 200)
        })
    },
    unpublishNews(context, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('publishNews', {id: id, status: false})
                resolve({status: true})
            }, 200)
        })
    },
    saveNews(context, news) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('saveNews', news)
                resolve({status: true})
            }, 200)
        })
    },
    deleteNews(context, id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('deleteNews', id)
                resolve({status: true})
            }, 200)
        })
    }
}