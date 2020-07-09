<template>
    <div>
        <div id = "languageBar"></div>
    </div>
</template>

<script>
    export default {
        name: "languageBar",
        data(){
            return{
                options:'',
                chartData:null,
            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$axios
                    .get('/job/languageRank/')
                    .then(response => {
                             console.log(response.data.body)
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
                let myChart = this.$echarts.init(document.getElementById('languageBar'))
                let salary = this.chartData.salary
                let language = this.chartData.language
                //todo 颜色
                let colorArray = [{
                        top: 'rgba(86,96,190,1)',
                        bottom: 'rgba(86,96,190,0)'
                    }, {
                        top: 'rgba(46,122,250,1)',
                        bottom: 'rgba(46,122,250,0)'
                    },
                        {
                            top: 'rgba(150,120,249,1)',
                            bottom: 'rgba(150,120,249,0)'
                        },
                        {
                            top: 'rgba(137,146,217,1)',
                            bottom: 'rgba(137,146,217,0)'
                        },
                        {
                            top: 'rgba(90,193,233,1)',
                            bottom: 'rgba(90,193,233,0)'
                        },
                        {
                            top: 'rgba(54,150,122,1)',
                            bottom: 'rgba(54,150,122,0)'
                        }
                    ]
                let options={
                    backgroundColor:'lightBlue',

                    // title: {
                    //    text: '计算机各语言平均薪资',
                    //    //subtext: '数据来自网络'
                    //     itemStyle: {
                    //        color:"blue"
                    //     }
                    //  },
                    title: {
                        "text": "互联网行业不同语言排行",
                        "left": "center",
                        "top": 20,
                        "textStyle": {
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: 'siyuanheiti_Thin',
                            color: 'darkCyan'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none',
                        }
                    },
                    /*legend: {
                      data: ['2011年', '2012年']
                    },*/
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        position: 'top',
                        boundaryGap: [0, 0.01],
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1f3458',
                                width: 1
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            color: '#14893f'
                        },
                        //分割线
                        splitNumber: 10,
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0)', 'rgba(250,250,250,0.05)'],
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#1f3458',
                                width: 2
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#14893f'
                        },
                        data: language
                    },
                    series: [{
                        name: '',
                        type: 'bar',
                        data: salary,
                        barWidth: 10,
                        label: {
                            normal: {
                                show: true,
                                position: 'right',
                                textStyle: {
                                    color: '#14893f',
                                    fontSize: 11

                                }
                            }
                        },
                        //柱体颜色
                        itemStyle: {
                            normal: {

                                show: true,
                                color: function(params) {
                                    let num = colorArray.length;
                                    return {
                                        type: 'linear',
                                        colorStops: [{
                                            offset: 0,
                                            color: colorArray[params.dataIndex % num].bottom
                                        }, {
                                            offset: 1,
                                            color: colorArray[params.dataIndex % num].top
                                        }, ]
                                    }
                                },
                                barBorderRadius: 70,
                                borderWidth: 0,
                            }
                        }
                    }, ]
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style scoped>
    #languageBar{
        height: 550px;
        width: 100%;
    }
</style>