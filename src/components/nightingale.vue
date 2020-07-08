<template>
    <div>
        <div id = "nightingale"></div>
    </div>
</template>

<script>
    export default {
        name: "nightingale",
        data(){
            return{

            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$axios
                    .get('/job/salaryOfScale/')
                    .then(response => {
                            if(response.data.status === 1){
                                this.chartData = response.data.body
                                this.initCharts()
                            }else{
                                console.log("数据获取失败")
                            }
                        }
                    )

                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    })
            },
            initCharts(){
                let myChart = this.$echarts.init(document.getElementById('nightingale'))
                let scale = this.chartData.scale

                // let ratio = this.chartData.ratio
                // let count = this.chartData.count
                let JavSalary = this.chartData.JavSalary

                let options={
                    backgroundColor: '#fff',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}元"
                    },
                    legend: {
                        x: 'center',
                        y: '15%',
                        data: scale,
                        icon: 'circle',
                        textStyle: {
                            color: 'blue',
                        }
                    },
                    title: {
                        "text": "各企业规模平均薪资",
                        "left": "center",
                        "top": 20,
                        "textStyle": {
                            "color": "#ccc"
                        }
                    },
                    calculable: true,
                    series: [{
                        title: '各规模企业薪资分析',
                        name: '企业规模',
                        type: 'pie',

                        //起始角度，支持范围[0, 360]
                        startAngle: 0,
                        //饼图的半径，数组的第一项是内半径，第二项是外半径
                        radius: [30, 250],
                        //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                        center: ['50%', '35%'],
                        //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                        // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                        //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                        roseType: 'area',
                        //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}元'
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length2: 1,
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [{
                            value: JavSalary[1],
                            name: scale[1],
                            itemStyle: {
                                normal: {
                                    color: '#f845f1'
                                }
                            }
                        },
                            {
                                value: JavSalary[2],
                                name: scale[2],
                                itemStyle: {
                                    normal: {
                                        color: '#ad46f3'
                                    }
                                }
                            },
                            {
                                value: JavSalary[3],
                                name: scale[3],
                                itemStyle: {
                                    normal: {
                                        color: '#5045f6'
                                    }
                                }
                            },
                            {
                                value: JavSalary[4],
                                name: scale[4],
                                itemStyle: {
                                    normal: {
                                        color: '#4777f5'
                                    }
                                }
                            },
                            {
                                value: JavSalary[5],
                                name: scale[5],
                                itemStyle: {
                                    normal: {
                                        color: '#44aff0'
                                    }
                                }
                            },
                            {
                                value: JavSalary[6],
                                name: scale[6],
                                itemStyle: {
                                    normal: {
                                        color: '#45dbf7'
                                    }
                                }
                            },
                            {
                                value: JavSalary[7],
                                name: scale[7],
                                itemStyle: {
                                    normal: {
                                        color: '#f6d54a'
                                    }
                                }
                            },
                            {
                                value: JavSalary[8],
                                name: scale[8],
                                itemStyle: {
                                    normal: {
                                        color: '#f69846'
                                    }
                                }
                            },
                            {
                                value: JavSalary[9],
                                name: scale[9],
                                itemStyle: {
                                    normal: {
                                        color: '#ff4343'
                                    }
                                }
                            },
                            {
                                value: JavSalary[10],
                                name: scale[10],
                                itemStyle: {
                                    normal: {
                                        color: '#ff4343'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: JavSalary[11],
                                name: scale[11],
                                itemStyle: {
                                    normal: {
                                        color: '#ff4343'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            {
                                value: 0,
                                name: "",
                                itemStyle: {
                                    normal: {
                                        color: 'transparent'
                                    }
                                },
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        ]
                    }]
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #nightingale{
        width: 100%;
        height: 600px;
    }
</style>

