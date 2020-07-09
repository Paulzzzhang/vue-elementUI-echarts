<template>
    <div>
        <div id = "horizontalBar"></div>
    </div>





</template>

<script>
    export default {
        name: "horizontalBar",
        data(){
            return{
                chartData: null,
            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){

                // Make a request for a user with a given ID
                this.$axios
                    .get('/job/averageSalary')
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
            initCharts: function () {
                let myChart = this.$echarts.init(document.getElementById('horizontalBar'))
                let avgSalary = this.chartData.avgSalary
                let maxSalary = this.chartData.maxSalary
                let minSalary = this.chartData.minSalary
                let jobType = this.chartData.jobType

                let options = {
                    title: {
                        text: '各行业平均薪资',
                        subtext: '数据来源于拉勾/58/51/猎聘',
                        textStyle: {
                            fontSize: 24,
                            fontWeight: 600,
                            fontFamily: 'siyuanheiti_Thin',
                            color: '#3b8060'
                        },
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['平均工资', '最高平均', '最低平均']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        name:'单位/元',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: jobType
                    },
                    series: [
                        {
                            name: '平均工资',
                            type: 'bar',
                            //todo 修改颜色
                            //color: 'darkGreen',
                            data: avgSalary
                        },
                        {
                            name: '最高平均',
                            type: 'bar',
                            data: maxSalary
                        },
                        {
                            name: '最低平均',
                            type: 'bar',
                            data: minSalary
                        }
                    ]
                }
                myChart.setOption(options)
            }

        }

    }
</script>

<style lang="scss" scoped>
    #horizontalBar{
        width: 100%;
        height: 600px;
    }
</style>
