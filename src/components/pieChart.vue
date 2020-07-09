<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="pieChart"></div>
  </div>
</template>
<script>
export default {
  name: 'pieChart',
  data() {
    return {

    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios
              .get('/job/salaryOfProp')
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
    initCharts() {
      let myChart = this.$echarts.init(document.getElementById('pieChart'))
      let companyType = this.chartData.companyType
      let data = this.chartData.data
      let options = {
        title: {
          text: '不同性质企业分布',
          x: 'center',
          textStyle: {
            fontSize: 20,
            fontWeight: 600,
            fontFamily: 'siyuanheiti_Thin',
            color: '#3b8060'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 20,
          data: companyType,
          textStyle: {
            color: '#21c490'
          }
        },
        series: [
          {
            name: '企业类型',
            type: 'pie',

            height: '510px',
            radius: ['35%','70%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              formatter: '{c|{c}} {b|万条} \n {a|累计接入数}',
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '18',
                  fontWeight: 'bold'
                }
              }
            },
            data: data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(16,121,118,0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(options)
      this.autoActive(myChart, options)
    },
    autoActive(chart, option) {
      this.intervalFun(chart, option)
      // let that = this
      // document.getElementById('pieChart').on('mouseover',function(){
      //   clearInterval(that.interval)
      //   let dataLen = option.series[0].data.length
      //   for(let i = 0; i < dataLen; i++){
      //     chart.dispatchAction({
      //       type: 'downplay',
      //       seriesIndex: 0,
      //       i
      //     })
      //   }
      // })
      // chart.on('mouseout',function(){
      //   that.intervalFun(chart, option)
      // })
    },
    intervalFun(chart, option) {
      let dataIndex = -1
      let dataLen = option.series[0].data.length
      this.interval = setInterval(() => {
        chart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex
        })
        dataIndex = (dataIndex + 1) % dataLen
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex
        })
        // 显示 tooltip
        // chart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 0,
        //   dataIndex
        // })
      }, 1500)
    }
  }
}
</script>
<style lang="scss" scoped>
#pieChart{
  width: 100%;
  height: 500px;
}
</style>

