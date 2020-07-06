<template>
    <div>
        <div id = "dynamicpie"></div>
    </div>
</template>

<script>
    export default {
        name: "dynamicpie",
        data(){
            return{

            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.initCharts()
            },
            initCharts(){
                let myChart = this.$echarts.init(document.getElementById('dynamicpie'))
                // backgroundColor:'#000',
                //     "animation": true,
                //     "title": {
                //     "text": 24,
                //         "subtext": "沥青工",
                //         "x": "center",
                //         "y": "center",
                //         "textStyle": {
                //         "color": "#fff",
                //             "fontSize": 60,
                //             "fontWeight": "normal",
                //             "align": "center",
                //             "width": "200px"
                //     },
                //     "subtextStyle": {
                //         "color": "#fff",
                //             "fontSize": 20,
                //             "fontWeight": "normal",
                //             "align": "center"
                //     }
                // },
                // "legend": {
                //     "width": "70%",
                //         "left": "center",
                //         "textStyle": {
                //         "color": "#fff",
                //             "fontSize": 16
                //     },
                //     "icon": "circle",
                //         "right": "0",
                //         "bottom": "0",
                //         "padding": [30, 60],
                //         "itemGap": 40,
                //         "data": ["测量工", "电焊工", "钢筋工", "沥青工", "安装工", "起重工", "养护工", "其它"]
                // },
                // "series": [{
                //     "type": "pie",
                //     "center": ["50%", "50%"],
                //     "radius": ["40%", "53%"],
                //     "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                //     "startAngle": 135,
                //     "labelLine": {
                //         "normal": {
                //             "length": 25
                //         }
                //     },
                //     "label": {
                //         "normal": {
                //             "formatter": "{b|{b}:}  {per|{d}%} ",
                //             "backgroundColor": "rgba(255, 147, 38, 0)",
                //             "borderColor": "transparent",
                //             "borderRadius": 4,
                //             "rich": {
                //                 "a": {
                //                     "color": "#999",
                //                     "lineHeight": 22,
                //                     "align": "center"
                //                 },
                //                 "hr": {
                //                     "borderColor": "#aaa",
                //                     "width": "100%",
                //                     "borderWidth": 1,
                //                     "height": 0
                //                 },
                //                 "b": {
                //                     "color": "#b3e5ff",
                //                     "fontSize": 16,
                //                     "lineHeight": 33
                //                 },
                //                 "c": {
                //                     "fontSize": 14,
                //                     "color": "#eee"
                //                 },
                //                 "per": {
                //                     "color": "#FDF44E",
                //                     "fontSize": 14,
                //                     "padding": [5, 8],
                //                     "borderRadius": 2
                //                 }
                //             },
                //             "textStyle": {
                //                 "color": "#fff",
                //                 "fontSize": 16
                //             }
                //         }
                //     },
                //     "emphasis": {
                //         "label": {
                //             "show": true,
                //             "formatter": "{b|{b}:}  {per|{d}%}  ",
                //             "backgroundColor": "rgba(255, 147, 38, 0)",
                //             "borderColor": "transparent",
                //             "borderRadius": 4,
                //             "rich": {
                //                 "a": {
                //                     "color": "#999",
                //                     "lineHeight": 22,
                //                     "align": "center"
                //                 },
                //                 "hr": {
                //                     "borderColor": "#aaa",
                //                     "width": "100%",
                //                     "borderWidth": 1,
                //                     "height": 0
                //                 },
                //                 "b": {
                //                     "color": "#fff",
                //                     "fontSize": 18,
                //                     "lineHeight": 33
                //                 },
                //                 "c": {
                //                     "fontSize": 14,
                //                     "color": "#eee"
                //                 },
                //                 "per": {
                //                     "color": "#FDF44E",
                //                     "fontSize": 25,
                //                     "padding": [5, 6],
                //                     "borderRadius": 2
                //                 }
                //             }
                //         }
                //     },
                //     "data": [{
                //         "name": "测量工",
                //         "value": 3
                //     }, {
                //         "name": "电焊工",
                //         "value": 2
                //     }, {
                //         "name": "钢筋工",
                //         "value": 26
                //     }, {
                //         "name": "沥青工",
                //         "value": 24
                //     }, {
                //         "name": "安装工",
                //         "value": 12
                //     }, {
                //         "name": "起重工",
                //         "value": 11
                //     }, {
                //         "name": "养护工",
                //         "value": 3
                //     }, {
                //         "name": "其它",
                //         "value": 2
                //     }]
                // }, {
                //     "type": "pie",
                //     "center": ["50%", "50%"],
                //     "radius": ["35%", "36%"],
                //     "label": {
                //         "show": false
                //     },
                //     "data": [{
                //         "value": 78,
                //         "name": "实例1",
                //         "itemStyle": {
                //             "normal": {
                //                 "color": {
                //                     "x": 0,
                //                     "y": 0,
                //                     "x2": 1,
                //                     "y2": 0,
                //                     "type": "linear",
                //                     "global": false,
                //                     "colorStops": [{
                //                         "offset": 0,
                //                         "color": "#9F17FF"
                //                     }, {
                //                         "offset": 0.2,
                //                         "color": "#01A4F7"
                //                     }, {
                //                         "offset": 0.5,
                //                         "color": "#FE2C8A"
                //                     }, {
                //                         "offset": 0.8,
                //                         "color": "#FEE449"
                //                     }, {
                //                         "offset": 1,
                //                         "color": "#00FFA8"
                //                     }]
                //                 }
                //             }
                //         }
                //     }]
                // }]
                let options={
                    title: {
                        text: "",
                        subtext: "",
                        left: "center",
                        textStyle: {
                            color: "#fff",
                            fontSize: 18
                        },
                    },

                    backgroundColor: this.$echarts.graphic.RadialGradient(0, 0, 1, [{
                        offset: 0,
                        color: '#174b78'
                    }, {
                        offset: 1,
                        color: '#174b78'
                    }]),
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}:({d}%)"
                    },
                    series: [{
                        name: '一级指标',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: 2,
                            name: '应急管理组织指标'
                        }, {
                            value: 8,
                            name: '应急管理对象指标'
                        }, {
                            value: 18,
                            name: '应急管理能力指标'
                        }, {
                            value: 16,
                            name: '应急管理态势指标'
                        }, {
                            value: 40,
                            name: '应急管理效能指标'
                        }]
                    }, {
                        name: '二级指标',
                        type: 'pie',
                        radius: ['32%', '60%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        data: [{
                            value: 1,
                            name: '应急机构组成情况'
                        }, {
                            value: 1,
                            name: '应急知识准备情况'
                        }, {
                            value: 5,
                            name: '危险源和风险隐患区情况'
                        }, {
                            value: 3,
                            name: '防护目标情况'
                        }, {
                            value: 7,
                            name: '应急保障资源情况'
                        }, {
                            value: 5,
                            name: '应急管理专家情况'
                        }, {
                            value: 3,
                            name: '应急避险场所情况'
                        }, {
                            value: 3,
                            name: '应急预案情况'
                        }, {
                            value: 2,
                            name: '预警信息上报情况'
                        }, {
                            value: 5,
                            name: '突发事件情况'
                        }, {
                            value: 4,
                            name: '应急事件级别情况'
                        }, {
                            value: 5,
                            name: '应急事件处置情况'
                        }, {
                            value: 36,
                            name: '街道应急管理工作效能情况'
                        }, {
                            value: 4,
                            name: '区级应急管理工作效能情况'
                        }]
                    }, {
                        name: '三级指标',
                        type: 'pie',
                        radius: ['62%', '70%'],
                        label: {
                            normal: {
                                position: 'outer'
                            }
                        },
                        data: [{
                            value: 1,
                            name: '应急机构数量同比增长'
                        }, {
                            value: 1,
                            name: '应急知识库记录数同比增长'
                        }, {
                            value: 1,
                            name: '自然灾害风险隐患区数量'
                        }, {
                            value: 1,
                            name: '事故灾难危险源数量'
                        }, {
                            value: 1,
                            name: '公共卫生危险源数量'
                        }, {
                            value: 1,
                            name: '社会安全隐患数量'
                        }, {
                            value: 1,
                            name: '其他危险源和风险隐患区数量'
                        }, {
                            value: 1,
                            name: '重要单位防护目标数量'
                        }, {
                            value: 1,
                            name: '关键基础设施防护目标数量'
                        }, {
                            value: 1,
                            name: '其他防护目标数量'
                        }, {
                            value: 1,
                            name: '应急物资与装备资源数量'
                        }, {
                            value: 1,
                            name: '应急通讯资源数量'
                        }, {
                            value: 1,
                            name: '应急运输与物流资源数量'
                        }, {
                            value: 1,
                            name: '医疗卫生单位数量'
                        }, {
                            value: 1,
                            name: '应急避难场所数量'
                        }, {
                            value: 1,
                            name: '应急广播电视资源数量'
                        }, {
                            value: 1,
                            name: '其他应急保障资源数量'
                        }, {
                            value: 1,
                            name: '自然灾害事件应急专家'
                        }, {
                            value: 1,
                            name: '事故灾难事件应急专家'
                        }, {
                            value: 1,
                            name: '公共卫生事件应急专家'
                        }, {
                            value: 1,
                            name: '社会安全事件应急专家'
                        }, {
                            value: 1,
                            name: '其他突发事件应急专家'
                        }, {
                            value: 3,
                            name: '应急避险场所面积同比增长'
                        }, {
                            value: 1,
                            name: '区级应急预案'
                        }, {
                            value: 1,
                            name: '企业级应急预案'
                        }, {
                            value: 1,
                            name: '其他应急预案'
                        }, {
                            value: 1,
                            name: '预警信息上报率同比增长'
                        }, {
                            value: 1,
                            name: '预警信息升级率同比增长'
                        }, {
                            value: 1,
                            name: '自然灾害事件数量'
                        }, {
                            value: 1,
                            name: '事故灾难事件数量'
                        }, {
                            value: 1,
                            name: '公共卫生事件数量'
                        }, {
                            value: 1,
                            name: '社会安全事件数量'
                        }, {
                            value: 1,
                            name: '其他突发事件数量'
                        }, {
                            value: 1,
                            name: '特别重大事件数量'
                        }, {
                            value: 1,
                            name: '重大事件数量'
                        }, {
                            value: 1,
                            name: '较大事件数量'
                        }, {
                            value: 1,
                            name: '一般事件数量'
                        }, {
                            value: 1,
                            name: '上报的事件数量'
                        }, {
                            value: 1,
                            name: '启动中的事件数量'
                        }, {
                            value: 1,
                            name: '处置中的事件数量'
                        }, {
                            value: 1,
                            name: '评估中的绩效数量'
                        }, {
                            value: 1,
                            name: '结束的事件数量'
                        }, {
                            value: 6,
                            name: '南营门街道应急管理评分'
                        }, {
                            value: 6,
                            name: '劝业场街道应急管理评分'
                        }, {
                            value: 6,
                            name: '五大道街道应急管理评分'
                        }, {
                            value: 6,
                            name: '小白楼街道应急管理评分'
                        }, {
                            value: 6,
                            name: '新兴街道应急管理评分'
                        }, {
                            value: 6,
                            name: '南市街道应急管理评分'
                        }, {
                            value: 1,
                            name: '应急值守工作评分'
                        }, {
                            value: 1,
                            name: '应急准备工作评分'
                        }, {
                            value: 1,
                            name: '应急响应工作评分'
                        }, {
                            value: 1,
                            name: '突发事件处置评分'
                        }]
                    }]
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #dynamicpie{
        width: 100%;
        height: 500px;
    }
</style>

