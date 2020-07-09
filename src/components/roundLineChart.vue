<template>
    <div>
        <div id="roundLineChart"></div>
    </div>
</template>


<script>
    export default {
        name: 'roundLineChart',
        data() {
            return {
                chartData:null,
                legend: ['IT·互联网', '金融', '房地产','医疗'],

            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                let postfix = this.legend.join('/')
                console.log(postfix)
                this.$axios
                    .get('/job/educationSalary/'+ postfix)
                    .then(response => {
                            if(response.data.status === 1){
                                this.chartData = response.data.body
                                console.log(this.chartData)
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
            initCharts() {
                let myChart = this.$echarts.init(document.getElementById('roundLineChart'))
                let salary = this.chartData.avgSalary
                let education = this.chartData.education
                console.log(education)
                let options = {
                    //速度

                    animationDuration: 1500,
                    title: {
                        text: '热门行业不同学历对应薪资',
                        color: 'lightCyan',
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: 'siyuanheiti_Thin',
                            color: '#3b8060'
                        },
                        left: 20,
                        top: 20
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        }
                    },
                    legend: {
                        icon: 'rect',
                        itemWidth: 14,
                        itemHeight: 5,
                        itemGap: 13,
                        data: this.legend,
                        textStyle: {
                            fontSize: 12,
                            color: 'darkCyan'
                        },
                        right: 20,
                        top: 30
                    },
                    grid: {
                        left: 50,
                        right: 20,
                        bottom: 50,
                        top: 80,
                        // containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        data:education
                        // }, {
                        //   axisPointer: {
                        //     show: false
                        //   },
                        //   axisLine: {
                        //     lineStyle: {
                        //       color: '#57617B'
                        //     }
                        //   },
                        //   axisTick: {
                        //     show: false
                        //   },
                        //   position: 'bottom',
                        //   offset: 20,
                        //   data: ['', '', '', '', '', '', '', '', '', '', {
                        //     value: '周六',
                        //     textStyle: {
                        //       align: 'left'
                        //     }
                        //   }, '周日']
                    }],
                    yAxis: [{

                        type: 'value',
                        name: '单位(元)',
                        color: 'lightCyan',
                        axisTick: {
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#57617B'
                            }
                        },
                        axisLabel: {
                            margin: 5,
                            textStyle: {
                                fontSize: 14
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }],
                    series: [{

                        name: 'IT·互联网',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(137, 189, 27, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(137, 189, 27, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(137,189,27)',
                                borderColor: 'rgba(137,189,2,0.27)',
                                borderWidth: 12
                            }
                        },
                        data: salary[0]
                    }, {
                        name: '金融',
                        type: 'line',
                        smooth: true,
                        color: 'lightCyan',
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(0, 136, 212, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(0, 136, 212, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(0,136,212)',
                                borderColor: 'rgba(0,136,212,0.2)',
                                borderWidth: 12
                            }
                        },
                        data: salary[1]
                    }, {
                        name: '房地产',
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(219, 50, 51, 0.3)'
                                }, {
                                    offset: 0.8,
                                    color: 'rgba(219, 50, 51, 0)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgb(219,50,51)',
                                borderColor: 'rgba(219,50,51,0.2)',
                                borderWidth: 12
                            }
                        },
                        data: salary[2]
                    },
                        {
                            name: '医疗',
                            type: 'line',
                            smooth: true,
                            symbol: 'circle',
                            symbolSize: 5,
                            showSymbol: false,
                            lineStyle: {
                                normal: {
                                    width: 1
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(137, 189, 27, 0.3)'
                                    }, {
                                        offset: 0.8,
                                        color: 'rgba(137, 189, 27, 0)'
                                    }], false),
                                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                                    shadowBlur: 10
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'rgb(255,255,0)',
                                    borderColor: 'rgba(137,189,2,0.27)',
                                    borderWidth: 12
                                }
                            },
                            data: salary[3]
                        },
                    ]
                }
                myChart.setOption(options)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #roundLineChart{
        width: 100%;
        height: 550px;
    }
</style>
