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
      firstCity: '',
      secondCity: '',
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
      this.titleData = ['班级1', '班级2']
      this.typeStander = [{
        name: '语文',
        max: 6000
      }, {
        name: '数学',
        max: 16000
      }, {
        name: '英语',
        max: 30000
      }, {
        name: '物理',
        max: 35000
      }, {
        name: '化学',
        max: 50000
      }, {
        name: '生物',
        max: 25000
      }]
      this.typeData = [{
        value: [5000, 7000, 12000, 11000, 15000, 14000],
        name: '班级1',
      }, {
        value: [2500, 12000, 8000, 8500, 12000, 12000],
        name: '班级2',
      }]
      this.chartInit()
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById('radialChart'))
      let options = {
        title: {
          text: '雷达图',
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
