<template>
    <div>
        <div id="manCount"></div>
    </div>
</template>

<script>
    export default {
        name: "manCount",
        data(){
            return{
                maxData :200,
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
                let myChart = this.$echarts.init(document.getElementById('manCount'))
                let options = {
                    "title": {
                        "text": "自定义象形柱图--PictorialBarCustomize",
                        "left": "center",
                        "y": "10",
                        "textStyle": {
                            "color": "#fff"
                        }
                    },
                    "backgroundColor": "#101a3c",
                    "grid": {
                        "left": "20%",
                        "top": "10%",
                        "bottom": 10
                    },
                    "tooltip": {
                        "trigger": "item",
                        "textStyle": {
                            "fontSize": 12
                        },
                        "formatter": "{b0}:{c0}"
                    },
                    "xAxis": {
                        "max": 300,
                        "splitLine": {
                            "show": false
                        },
                        "axisLine": {
                            "show": false
                        },
                        "axisLabel": {
                            "show": false
                        },
                        "axisTick": {
                            "show": false
                        }
                    },
                    "yAxis": [
                        {
                            "type": "category",
                            "inverse": false,
                            "data": [
                                "山西",
                                "四川",
                                "西藏",
                                "北京",
                                "上海",
                                "内蒙古",
                                "云南",
                                "黑龙江",
                                "广东",
                                "江苏"
                            ],
                            "axisLine": {
                                "show": false
                            },
                            "axisTick": {
                                "show": false
                            },
                            "axisLabel": {
                                "margin": -4,
                                "textStyle": {
                                    "color": "#fff",
                                    "fontSize": 16.25
                                }
                            }
                        },

                    ],
                    "series": [
                        {
                            "type": "pictorialBar",
                            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
                            "symbolRepeat": "fixed",
                            "symbolMargin": "5%",
                            "symbolClip": true,
                            "symbolSize": 22.5,
                            "symbolPosition": "start",
                            "symbolOffset": [
                                20,
                                0
                            ],
                            "symbolBoundingData": 300,
                            "data": [
                                13,
                                42,
                                67,
                                81,
                                86,
                                94,
                                166,
                                220,
                                249,
                                262
                            ],
                            "z": 10
                        },
                        {
                            "type": "pictorialBar",
                            "itemStyle": {
                                "normal": {
                                    "opacity": 0.3
                                }
                            },
                            "label": {
                                "normal": {
                                    "show": false
                                }
                            },
                            "animationDuration": 0,
                            "symbolRepeat": "fixed",
                            "symbolMargin": "5%",
                            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
                            "symbolSize": 22.5,
                            "symbolBoundingData": 300,
                            "symbolPosition": "start",
                            "symbolOffset": [
                                20,
                                0
                            ],
                            "data": [
                                13,
                                42,
                                67,
                                81,
                                86,
                                94,
                                166,
                                220,
                                249,
                                262
                            ],
                            "z": 5
                        }
                    ]
                };
                myChart.setOption(options)


// Make dynamic data.
                function random() {
                    return +(Math.random() * (this.maxData - 10)).toFixed(1);
                }
                setInterval(function () {
                    var dynamicData = [random(), random(), random(), random(),random(), random(), random(), random(),random(),random()];
                    myChart.setOption({
                        series: [{
                            data: dynamicData.slice()
                        }, {
                            data: dynamicData.slice()
                        }]
                    })
                }, 3000)

            }

        }
    }
</script>

<style lang="scss" scoped>
    #manCount{
        width: 100%;
        height: 400px;
    }
</style>