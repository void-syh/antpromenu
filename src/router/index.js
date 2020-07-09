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
    }]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router