<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">

      <div class="sn-body">
        <div class="wrap-container">

          <div class="table">
            <table border="0" cellpadding="0" cellspacing="0" class="table-header">
              <tbody>
              <tr>
                <td width="30%">
                  <span>职位</span>
                </td>
                <td width="50%">
                  <span>公司</span>
                </td>
                <td width="20%">
                  <span>薪资</span>
                </td>
              </tr>
              </tbody>
            </table>

            <vue-seamless-scroll :data="listData" class="seamless-warp" :class-option="optionSetting" style="background-color: lightblue"  >
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                <tr v-for="(item, index) in listData" :key="index">
                  <td width="100%" class="title">
                    <span>{{ item.name }}</span>
                  </td>
                  <td width="50%">
                    <span>{{ item.company }}</span>
                  </td>
                  <td width="20%">
                    <span >{{ item.salary }}</span>
                  </td>
                </tr>
                </tbody>
              </table>
            </vue-seamless-scroll>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default {
    name: "seamless",
    components: {
      vueSeamlessScroll
    },
    data() {
      return {
        chartData:null,
        listData:[],

        value: 100,
        reset: false
      }
    },
    props:{
      sourceLink: String,

    },

    computed: {
      optionSetting () {
        return {
          step: 1.0, // 数值越大速度滚动越快
          limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
          hoverStop: true, // 是否开启鼠标悬停stop
          direction: 1, // 0向下 1向上 2向左 3向右
          // autoPlay: false,
          openWatch: true, // 开启数据实时监控刷新dom
          singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
          singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
          waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
        }
      }
    },
    created() {

        this.$nextTick(function () {
          this.getData()
        })

    },
    watch:{

    },

    methods: {
        getData(){

          this.$axios
                  .get('/job/newJobs/' + this.value)
                  .then(response => {
                            if(response.data.status === 1){

                              this.listData = response.data.body
                              this.$nextTick(function () {

                              })

                              console.log(this.listData)
                            }else{
                              console.log("数据获取失败")
                            }
                          }
                  )

                  .catch(function (error) { // 请求失败处理
                    console.log(error);
                  })

        }
    },
    beforeDestroy() {

    }
  };
</script>

<style lang="scss" scoped>
  .sn-container {
    margin-top: 50px;
    left: 1370px;
    top: 110px;
    height: 500px;
    %table-style {
      background-color: #01ddb2;
      width: 100%;
      height: 50px;
      table-layout: fixed;
      tr {
        td {
          padding: 10px 5px;
          text-align: center;
          background-color: transparent;
          white-space: nowrap;
          overflow: hidden;
          color: #E2E5FF;
          font-size: 14px;
        }
      }
    }
    .table {
      .table-header {
        @extend %table-style;
      }
      .seamless-warp {
        height: 400px;
        overflow: hidden;
        visibility: visible;
        .colorRed {
          color: #FF4669;
        }
        .colorOrange {
          color: #FFC956;
        }
        .item {
          height: auto;
          @extend %table-style;
          tr {
            td {
              &.title {
                text-overflow: ellipsis;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
</style>