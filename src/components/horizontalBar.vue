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
                let myChart = this.$echarts.init(document.getElementById('horizontalBar'))
                let options = {title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['平均工资', '最高平均','最低平均']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['IT','服务业','互联网', '互联网', '互联网', '互联网', '互联网', '总平均工资']
                    },
                    series: [
                        {
                            name: '平均工资',
                            type: 'bar',
                            //todo 修改颜色
                            //color: 'darkGreen',
                            data: [18203, 23489, 29034, 104970, 131744, 630230, 131744, 630230]
                        },
                        {
                            name: '最高平均',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807, 134141, 681807]
                        },
                        {
                            name: '最低平均',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807,134141, 681807]
                        }
                    ]}
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
