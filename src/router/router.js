import Vue from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import Admin from '../components/Admin.vue'
import { store } from '../store/store'

Vue.use(Router)

const router = new Router({
    root: '/',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta:{ requiresAuth: true, requiresAdmin: true }
        },
        {path: '*', redirect: '/'}
    ]
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && ((!store.state.loggedUser || !store.state.loggedUser.login) ||
        !(to.meta.requiresAdmin && store.state.loggedUser.admin))) {
        router.push({ name: 'index'})
    } else {
        next()
    }
})

export {
    router
}