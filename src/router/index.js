import Vue from 'vue'
import Router from 'vue-router'

//Vue-Router
Vue.use(Router)

export default new Router({
    routes:[
        {
            name:'HelloWorld',
            path:'/helloworld',
            component:()=> import('@/components/HelloWorld')
        },
        {
            name:'Computed',
            path:'/helloworld',
            component:()=> import('@/components/HelloWorld')
        },
        {
            name:'Ex1',
            path:'/ex1',
            component:()=> import('@/components/Ex1')
        },
        {
            name:'Fortest',
            path:'/fortest',
            component:()=> import('@/components/Fortest')
        },
        {
            name:'Filtertest',
            path:'/filter11',
            component:()=> import('@/components/Filtertest')
        },
        {
            name:'KeyMidifiers',
            path:'/keyMidifiers',
            component:()=> import('@/components/keyMidifiers')
        },
        {
            name:'Iftest',
            path:'/iftest',
            component:()=> import('@/components/Iftest')
        },
        {
            name:'Modeltest',
            path:'/modeltest',
            component:()=> import('@/components/Modeltest')
        },
        {
            name:'Ontest',
            path:'/ontest',
            component:()=> import('@/components/Ontest')
        },
        {
            name:'EventBus',
            path:'/eventbus',
            component:()=> import('@/components/Eventbus')
        },
        {
            name:'Alert',
            path:'/alert',
            component:()=> import('@/components/Alert')
        },
        {
            name:'Emittest',
            path:'/emittest',
            component:()=> import('@/components/Emittest')
        },
    ]
})

