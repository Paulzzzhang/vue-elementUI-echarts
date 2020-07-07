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
                let myChart = this.$echarts.init(document.getElementById('dynamicpie'))

                let options= {}
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #dynamicpie{
        width: 100%;
        height: 400px;
    }
</style>

