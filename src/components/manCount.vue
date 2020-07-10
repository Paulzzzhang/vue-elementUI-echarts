<template>
  <div>
    <div id="manCount"></div>
  </div>
</template>

<script>
export default {
  name: "manCount",
  data() {
    return {
      maxData: 200
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("/job/jobCount")
        .then(response => {
          if (response.data.status === 1) {
            this.chartData = response.data.body;
            this.initCharts();
          } else {
            console.log("数据获取失败");
          }
        })

        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    initCharts() {
      let myChart = this.$echarts.init(document.getElementById("manCount"));
      let hireCount = this.chartData.hireCount;
      let jobType = this.chartData.jobType;
      let arr = new Array(jobType.length);
      arr.fill(50000);
      let options = {
        left: 20,
        title: {
          text: "不同岗位需求人数",
          left: "center",
          y: "10",
          textStyle: {
            fontSize: 18,
            fontWeight: 600,
            fontFamily: "siyuanheiti_Thin",
            color: "#fff"
          }
        },
        backgroundColor: "darkCyan",
        grid: {
          left: "20%",
          top: "10%",
          bottom: 10
        },
        tooltip: {
          trigger: "item",
          textStyle: {
            fontSize: 12
          },
          formatter: "{b0}:{c0}"
        },
        xAxis: {
          //todo
          max: 50000,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            inverse: false,

            data: jobType.reverse(),
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              margin: -4,
              textStyle: {
                color: "#fff",
                fontSize: 16.25
              }
            }
          }
        ],
        series: [
          {
            type: "pictorialBar",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbolClip: true,
            symbolSize: 22.5,
            symbolPosition: "start",
            symbolOffset: [20, 0],

            data: hireCount.reverse(),
            z: 10
          },
          {
            type: "pictorialBar",
            itemStyle: {
              normal: {
                opacity: 0.3
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            animationDuration: 100,
            symbolRepeat: "fixed",
            symbolMargin: "5%",
            symbol:
              "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
            symbolSize: 22.5,

            symbolPosition: "start",
            symbolOffset: [20, 0],
            //todo
            data: arr,
            z: 5
          }
        ]
      };
      myChart.setOption(options);

      // Make dynamic data.
      //                 function random() {
      //                     return +(Math.random() * (this.maxData - 10)).toFixed(1);
      //                 }
      //                 setInterval(function () {
      //                     var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
      //                     myChart.setOption({
      //                         series: [{
      //                             data: dynamicData.slice()
      //                         }, {
      //                             data: dynamicData.slice()
      //                         }]
      //                     })
      //                 }, 3000)
    }
  }
};
</script>

<style lang="scss" scoped>
#manCount {
  width: 100%;
  height: 600px;
}
</style>