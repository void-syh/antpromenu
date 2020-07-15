import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'example',
    component: () =>
        import ('../examples/example.vue'),
    children: [{
        path: 'page1',
        name: 'page1',
        component: () =>
            import ('../views/page1.vue')
    }, {
        path: 'page2',
        name: 'page2',
        component: () =>
            import ('../views/page2.vue')
    }, {
        path: 'page3',
        name: 'page3',
        meta: {
            requiresAuth: true
        },
        component: () =>
            import ('../views/page3.vue')
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (sessionStorage.level < 2) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router