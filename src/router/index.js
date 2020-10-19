import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home')
const cart = () =>
    import ('../views/cart/cart')
const catagory = () =>
    import ('../views/catagory/catagory')
const profile = () =>
    import ('../views/profile/profile')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/catagory',
        component: catagory
    },
    {
        path: '/profile',
        component: profile
    }
]
const router = new VueRouter({
        routes,
        mode: 'history'
    })
    /*const originalPush = Router.prototype.push
    Router.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }*/

export default router