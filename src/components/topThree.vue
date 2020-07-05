<template>
    <div>

        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div style>
                        <el-col :span="4">
                            <el-select v-model="value" filterable placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>

                        <div style="margin-left: 10px">
                            <el-button icon="el-icon-search" circle></el-button>
                        </div>

                    </div>

                </el-card>
            </el-col>
            <el-col :span="24" >
                <el-card shadow="hover">
                    <div id = "topThree"></div>
                </el-card>
            </el-col>

        </el-row>


    </div>
</template>

<script>


    export default {
        name: "topThree",
        components: {},
        data(){
            return{
                options: [{
                    value: '选项1',
                    label: '北京'
                }, {
                    value: '选项2',
                    label: '上海'
                }, {
                    value: '选项3',
                    label: '重庆'
                }, {
                    value: '选项4',
                    label: '深圳'
                }, {
                    value: '选项5',
                    label: '成都'
                }],
                value:'',
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
    .el-card{
        margin-top:20px; //下边距
    }
    #selector{
        margin: auto auto;
    }

</style>
