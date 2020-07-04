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

                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style scoped>

</style>