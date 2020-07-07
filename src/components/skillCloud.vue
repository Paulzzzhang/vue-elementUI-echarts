<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div >
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
                            <el-button icon="el-icon-search" circle @click="getData"></el-button>
                        </div>

                    </div>

                </el-card>
            </el-col>
            <el-col :span="24">
                <el-card shadow="hover">
                    <div id = "skillCloud"></div>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "skillCloud",
        data(){
            return{
                chartData: [],
                options: this.industryOption(),
                value:'IT·互联网',

            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$axios
                    .get('/job/wordCloud/' + this.value)
                    .then(response => {
                            if(response.data.status === 1){
                                console.log(response.data.body)
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
                let myChart = this.$echarts.init(document.getElementById('skillCloud'))
                let info = this.chartData
                let options={

                    tooltip: {
                        show: true
                    },
                    series: [{
                        type: "wordCloud",
                        gridSize:6,
                        shape:'circle',



                        sizeRange: [12, 50],
                        width:800,
                        height:500,
                        textStyle: {
                            normal: {
                                color: function() {
                                    return 'rgb(' + [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(',') + ')';
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        data: info
                    }]

                }
                myChart.setOption(options)
            }
        }
    }
</script>
<style lang="scss" scoped>
    #skillCloud{
        width: 100%;
        height: 500px;
    }
    .el-card{
        margin-top: 20px;
    }
</style>
