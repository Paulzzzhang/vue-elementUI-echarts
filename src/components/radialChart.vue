<template>
  <div>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="hover">
          <div style>
            <el-col :span="4">
              <el-select v-model="firstCity" filterable placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="secondCity" filterable placeholder="请选择">
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
          <div>
            <div id="radialChart"></div>
          </div>
        </el-card>
      </el-col>

    </el-row>


  </div>

</template>
<script>
export default {
  name: 'radialChart',
  data() {
    return {
      options: this.cityOption(),
      firstCity: '重庆',
      secondCity: '成都',
      titleData: [],
      typeStander: [],
      typeData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      let cities = new Array(2)
      cities.push(this.firstCity)
      cities.push(this.secondCity)
      this.$axios
              .get('/job/twoProvinceCount/' + this.firstCity + '/' + this.secondCity)
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
      let myChart = this.$echarts.init(document.getElementById('radialChart'))
      this.typeStander = this.chartData.typeStander
      this.titleData = this.chartData.titleData
      this.typeData = this.chartData.typeData
      let options = {
        title: {
          text: '不同城市的行业分布',
          textStyle: {
            color: '#226f69'
          },
          top: 10,
          left: 10
        },
        tooltip: {},
        legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: this.titleData,
          textStyle: {
            color: '#56b6b6'
          }
        },
        radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: '#184938',
              opacity: .2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#154e6c',
              opacity: .2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            }
          },
          indicator: this.typeStander
        },
        series: [{
          name: '班级1 vs 班级2',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: this.typeData
        }],
        color: ['#ef4b4c', '#b1eadb']
      }
      myChart.setOption(options)
    }
  }
}
</script>
<style lang="scss" scoped>
#radialChart{
  width: 100%;
  height: 400px;
}
  .el-card{
    margin-top: 20px;
  }
</style>
