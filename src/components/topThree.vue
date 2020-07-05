<template>
    <div>
        <div id = "topThree"></div>
    </div>
</template>

<script>
    export default {
        name: "topThree",
        data(){
            return{
                lightBlue :{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },





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
                let myChart = this.$echarts.init(document.getElementById('topThree'))
                let options={
                    tooltip: {
                        show: false
                    },
                    grid: {
                        top: '20%',
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                    },
                    xAxis: {
                        data: ['平均CPU\n利用率', '平均内存\n利用率', '平均硬盘\n利用率'],
                        offset: 15,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff',
                            fontSize: 14
                        }
                    },
                    yAxis: {
                        min: 0,
                        max: 100,
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    series: [{
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'top',
                            padding: 10,
                            color: '#2979ff',
                            fontSize: 14,
                            formatter: '{c}%'
                        },
                        itemStyle: {
                            color: this.lightBlue
                        },
                        barWidth: '40%',
                        data: [49, 80, 67],
                        z: 10
                    }, {
                        type: 'bar',
                        barGap: '-100%',
                        itemStyle: {
                            color: {
                                // image: this.piePatternImg,
                                repeat: 'repeat'
                            },
                            opacity: 0.05
                        },
                        barWidth: '40%',

                        data: [100, 100, 100],
                        z: 5
                    }, {
                        type: 'bar',
                        barGap: '-100%',
                        itemStyle: {
                            color: '#536dfe',
                            opacity: 0.2
                        },
                        barWidth: '40%',

                        data: [100, 100, 100],
                        z: 5
                    }, {
                        name: 'glyph',
                        type: 'pictorialBar',
                        barGap: '-100%',
                        symbolPosition: 'end',
                        symbolSize: 64,
                        symbolOffset: [0, '-150%'],
                        data: [{
                            value: 100,
                            //todo 圖片
                            // symbol: this.cpu,
                        }, {
                            value: 100,
                            //todo
                            // symbol: this.memory,
                        }, {
                            value: 100,
                            // symbol: this.disk,
                        }]
                    }],
                    backgroundColor: "#0c1914",
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #topThree{
        width: 50%;
        height: 600px;
    }
</style>
