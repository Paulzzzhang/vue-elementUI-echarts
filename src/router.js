import Vue from 'vue'
import Router from 'vue-router'
import index from  '../src/view/index'
import databoard from './view/databoard'





//import salaryMap from "./components/salaryMap";
import sunrise from "./components/sunrise";
import occupation from "./view/occupation";
import horizontalBar from "./components/horizontalBar";
import pyramid  from "./components/pyramid";
import roundLineChart from "./components/roundLineChart";
import bar3DChart from "./components/bar3DChart";
import pieChart from "./components/pieChart";
import nightingale  from "./components/nightingale";
import salaryMap from "./components/salaryMap";
import radialChart from "./components/radialChart";
import topThree from "./components/topThree";
import manCount from "./components/manCount";
import skillCloud from "./components/skillCloud";
import dynamicpie from "./components/dynamicpie";
Vue.use(Router)


export default new Router({
    //mode:history,
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/databoard',
            name: 'databoard',
            component: databoard,
            children: [
                {
                    path:'/',
                    component: occupation
                }
            ]
        },
        {
            path: '/occupation',
            name: 'occupation',
            component: databoard,
            children:[
                {
                path:'differOccupation',
                component: sunrise
                },
                {
                    path:'differIndustry',
                    component: horizontalBar
                },
                {
                    path:'differOccuEduBack',
                    component: pyramid
                },{
                    path:'differEduBackSalary',
                    component: roundLineChart
                },{
                    path:'differSa_Edu_Exp',
                    component: bar3DChart
                },

            ]
        },
        {
            path: '/enterprise',
            name: 'enterprise',
            component: databoard,
            children: [
                {
                    path: 'differScale',
                    component: nightingale
                 },
                {
                    path: 'differType',
                    component: pieChart
                }]
        },
        {
            path: '/location',
            name: 'location',
            component: databoard,
            children: [
                {
                    path: 'differLocationSa',
                    component: salaryMap
                },
                {
                    path: 'differLocationIn',
                    component: topThree
                },
                {
                    path:'compareTwoCities',
                    component: radialChart
                },
            ]
        },
        {
            path: '/demand',
            name: 'demand',
            component: databoard,
            children: [
                {
                    path: 'differIndustry',
                    component: manCount
                },
                {
                    path: 'requirements',
                    component: skillCloud
                }
            ]

        },
        {
            path: '/InternetInfo',
            name: 'InternetInfo',
            component: databoard,
            children: [
                {
                    path: '/',
                    component: occupation
                }
            ]
        },
        {
            path: '/test',
            name: 'test',
            component: dynamicpie,
        }

    ]
})