import Vue from 'vue'
import Router from 'vue-router'

// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// };


//Vue-Router
Vue.use(Router)

const router = new Router({
    routes: [{
            name: 'HelloWorld',
            path: '/HelloWorld',
            component: () => import('@/components/HelloWorld'),
        },
        {
            name: 'Computed',
            path: '/Computed',
            component: () => import('@/components/Computed')
        },
        {
            name: 'Ex1',
            path: '/Ex1',
            component: () => import('@/components/Ex1')
        },
        {
            name: 'Fortest',
            path: '/Fortest',
            component: () => import('@/components/Fortest')
        },
        {
            name: 'Filtertest',
            path: '/Filtertest',
            component: () => import('@/components/Filtertest')
        },
        {
            name: 'KeyMidifiers',
            path: '/KeyMidifiers',
            component: () => import('@/components/keyMidifiers')
        },
        {
            name: 'Iftest',
            path: '/Iftest',
            component: () => import('@/components/Iftest')
        },
        {
            name: 'Modeltest',
            path: '/Modeltest',
            component: () => import('@/components/Modeltest')
        },
        {
            name: 'Ontest',
            path: '/Ontest',
            component: () => import('@/components/Ontest')
        },
        {
            name: 'Eventbus',
            path: '/Eventbus',
            component: () => import('@/components/Eventbus')
        },
        {
            name: 'Alert',
            path: '/Alert',
            component: () => import('@/components/Alert')
        },
        {
            name: 'Emittest',
            path: '/Emittest',
            component: () => import('@/components/Emittest')
        },
        {
            name: 'SlideShow',
            path: '/SlideShow',
            component: () => import('@/components/SlideShow')
        },
        {
            name: 'Flipcard',
            path: '/Flipcard',
            component: () => import('@/components/Flipcard')
        }
    ]
})

// router.beforeEach((to)=>{
//     if(to.path == '/Computed')
//     console.log('111')
// })

export default router