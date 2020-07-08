<template>
    <div>
        <div id = "salaryMap"></div>
    </div>
</template>

<script>
    export default {
        name: "salaryMap",
        data(){
            return{
                alirl:  [[[121.15, 31.89],[109.781327, 39.608266]],
                    [[120.38, 37.35],[122.207216, 29.985295]],
                    [[123.97, 47.33],[120.13, 33.38]],
                    [[118.87, 42.28],[120.33, 36.07]],
                    [[121.52, 36.89],  [117.93, 40.97]],
                    [[102.188043, 38.520089], [122.1, 37.5]],
                    [[118.58, 24.93],[101.718637, 26.582347]],
                    [[120.53, 36.86],[121.48, 31.22]],
                    [[119.46, 35.42],[122.05, 37.2]],
                    [[119.97, 35.88],[116.1, 24.55]],
                    [[121.05, 32.08],[112.02, 22.93]],
                    [[91.11, 29.97],[118.1, 24.46]]
                ],
                geoCoordMap : this.geoMap(),
                chartData: null
            }
        },
        mounted() {
            this.getData()
        },
        methods:{
            getData(){
                this.$axios
                    .get('/job/areaSalary')
                    .then(response => {
                        console.log(response.data)
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
            convertData(data) {
                const res = [];
                for (let i = 0; i < data.length; i++) {
                    const geoCoord = this.geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                // console.log(res)
                return res;
            },
            initCharts(){
                console.log("init")
                let myChart = this.$echarts.init(document.getElementById('salaryMap'))
                let info = this.chartData

                let options={
                    title: {
                        text: '不同地区平均薪资',
                            x: 'left',
                            top: "10",
                            textStyle: {
                            color: '#000',
                                fontSize: 20
                        }
                    },
                    tooltip: {
                        show: true,
                        // formatter:(params)=>{
                        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
                        //   return data;
                        // },
                    },
                    visualMap: [{
                        type: 'continuous',
                        seriesIndex: 0,
                        text: ['bar3D'],
                        calculable: true,
                        max: 30000,
                        inRange: {
                            //todo 柱子颜色
                            color: ['lightGreen','#87aa66', '#eba438', 'orange', '#d94d4c','red']
                        }
                    }, {
                        type: 'continuous',
                        seriesIndex: 1,
                        text: ['scatter3D'],
                        left: 'right',
                        max: 100,
                        aspectScale :1,
                        zoom: 2,
                       // center: [115.97, 29.71],
                        calculable: true,
                        inRange: {
                            color: [ 'blue', 'purple']
                        }
                    }],
                        geo3D: {
                            map: 'china',
                            roam: true,
                            left: '20px',
                            layoutSize: '900px',
                            itemStyle: {
                                areaColor: '#87aa66',
                                opacity: 1,
                                //todo修改颜色
                                color: 'darkCyan',
                                borderWidth: 0.4,
                                borderColor: '#000',

                    },
                    label: {
                        show: true,
                            textStyle: {
                            color: '#000', //地图初始化区域字体颜色
                                fontSize: 8,
                                opacity: 1,
                                backgroundColor: 'rgba(0,23,11,0)'
                        },
                    },
                    emphasis: { //当鼠标放上去  地区区域是否显示名称
                        label: {
                            show: true,
                                textStyle: {
                                color: '#fff',
                                    fontSize: 3,
                                    backgroundColor: 'rgba(0,23,11,0)'
                            }
                        }
                    },
                    //shading: 'lambert',
                    light: { //光照阴影
                        main: {
                            color: '#fff', //光照颜色
                                intensity: 1.2, //光照强度
                                //shadowQuality: 'high', //阴影亮度
                                shadow: false, //是否显示阴影
                                alpha:55,
                                beta:30

                        },
                        ambient: {
                            intensity: 0.3
                        }
                    }
                },
                    series: [

                        //柱状图
                        {
                            name: 'bar3D',
                            type: "bar3D",
                            coordinateSystem: 'geo3D',
                            barSize: 1, //柱子粗细

                            shading: 'lambert',
                            minHeight: 3,
                            opacity: 1,
                            color: 'darkCyan',
                            bevelSize:0.3,

                            label: {
                                show: false,
                                formatter: '{b}'
                            },
                            data: this.convertData(info),
                        },


                        {
                            name: 'scatter3D',
                            type: "scatter3D",
                            coordinateSystem: 'geo3D',
                            symbol: 'pin',
                            symbolSize: 30,
                            opacity: 1,
                            label: {
                                show: false,
                                formatter: '{b}'
                            },
                            itemStyle: {
                                borderWidth: 0.5,
                                borderColor: '#fff'
                            },
                            data: this.convertData([{
                                name: "阳泉",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }, {
                                name: "莱州",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }, {
                                name: "湖州",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }, {
                                name: "汕头",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }, {
                                name: "昆山",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }, {
                                name: "张家口",
                                value: ((Math.random() * 100) + 50).toFixed(2)
                            }])
                        },


                        //画线

                        {
                            type: 'lines3D',

                            coordinateSystem: 'geo3D',

                            effect: {
                                show: true,
                                trailWidth: 1,
                                trailOpacity: 0.5,
                                trailLength: 0.2,
                                constantSpeed: 1
                            },

                            blendMode: 'lighter',

                            lineStyle: {
                                width: 0.2,
                                opacity: 0.05
                            },

                            data:this.alirl
                        }
                    ]
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #salaryMap{
        width: 100%;
        height: 600px;

    }
</style>