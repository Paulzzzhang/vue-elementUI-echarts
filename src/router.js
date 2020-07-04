import Vue from 'vue'
import Router from 'vue-router'
import index from  '../src/view/index'
import databoard from './view/databoard'





import salaryMap from "./components/salaryMap";


Vue.use(Router)


export default new Router({
    //mode:history,
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/databoard',
            component: index
        },
        {
            path: '/databoard',
            name: 'databoard',
            component: databoard
        },
        {
            path: '/test',
            name: 'sunrise',
            component: salaryMap
        },

    ]
})