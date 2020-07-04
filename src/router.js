import Vue from 'vue'
import Router from 'vue-router'
import index from  '../src/view/index'
import databoard from './view/databoard'
import sideBar from "./components/sideBar";


Vue.use(Router)


export default new Router({
    //mode:history,
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/databoard1',
            component: index
        },
        {
            path: '/databoard',
            name: 'databoard',
            component: databoard
        },
        {
            path: '/sidebar',
            name: 'side',
            component: sideBar
        },

    ]
})