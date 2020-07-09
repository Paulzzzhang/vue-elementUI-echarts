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
                chartData:null,
            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$axios
                    .get('/job/internetAmounts/' )
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
                let myChart = this.$echarts.init(document.getElementById('dynamicpie'))

                let options= {
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
                        data: this.chartData.first
                    }, {
                        name: '二级指标',
                        type: 'pie',
                        radius: ['32%', '60%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        data: this.chartData.second
                    }, {
                        name: '三级指标',
                        type: 'pie',
                        radius: ['62%', '70%'],
                        label: {
                            normal: {
                                position: 'outer'
                            }
                        },
                        data: this.chartData.third
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
        height:500px;
    }
</style>

