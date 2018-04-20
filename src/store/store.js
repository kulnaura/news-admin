import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        newNews: {
            title: "",
            description: ""
        },
        news: [
            {id: 1, title: "The news One", description: "The news One description", timeCreated: 1523839355267, timeUpdated: 1523839355267, published: true},
            {id: 2, title: "The news Two", description: "The news Two description", timeCreated: 1523939355267, timeUpdated: 1523939355267, published: false},
            {id: 3, title: "The news Three", description: "The news Three description", timeCreated: 1524039355267, timeUpdated: 1524039355267, published: true},
            {id: 4, title: "The news Four", description: "The news Four description", timeCreated: 1524049355267, timeUpdated: 1524049355267, published: false},
            {id: 5, title: "The news Five", description: "The news Five description", timeCreated: 1524059355267, timeUpdated: 1524059355267, published: true},
        ],
        users: [
            {login: "admin", password: "admin123", admin: true},
            {login: "user", password: "qwerty", admin: false}
        ],
        loggedUser: null,
        messages: {
            USER_NOT_FOUND: "user not found",
            USER_LOGGED: "user logged well",
            WRONG_PASSWORD: "password is wrong"
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
})
