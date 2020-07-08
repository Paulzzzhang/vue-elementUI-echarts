<template>
    <div>

        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div style>
                        <el-col :span="4">
                            <el-select   v-model="value" filterable placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>

                        <div style="margin-left: 10px">
                            <el-button icon="el-icon-search" circle @click="getData"></el-button>
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
                chartData: null,


                options: this.province(),
                value:'重庆',
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
                        color: 'rgb(0,102,255)' // 100% 处的颜色
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
                console.log(this.value)

                // Make a request for a user with a given ID
                this.$axios
                    .get('/job/areaJob/' + this.value)
                    .then(response => {
                            if(response.data.status === 1){
                                this.chartData = response.data.body
                                this.initCharts()
                            }else{
                                console.log("数据获取失败")
                            }
                            this.initCharts()}
                        )

                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    })


            },
            initCharts(){
                let myChart = this.$echarts.init(document.getElementById('topThree'))
                let topJobs = this.chartData.topJobs

                let jobRatio = this.chartData.jobRatio





                let arr = new Array(topJobs.length)
                arr.fill(100)
                let options={
                    tooltip: {
                        show: true
                    },
                    grid: {
                        top: '20%',
                        left: '5%',
                        right: '5%',
                        bottom: '15%',
                    },
                    xAxis: {
                        //todo 行业
                        data: topJobs,
                        offset: 15,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true
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
                        data: jobRatio,
                        z: 10
                    },  {
                        type: 'bar',
                        barGap: '-100%',
                        itemStyle: {
                            color: '#536dfe',
                            opacity: 0.2
                        },
                        barWidth: '40%',

                        data: arr,
                        z: 5
                    }],
                    backgroundColor: "#17818b",
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #topThree{
        width: 100%;
        height: 500px;
    }
    .el-card{
        margin-top:20px; //下边距
    }


</style>
