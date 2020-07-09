<template>
  <div>
		<div id="bar3DChart"></div>
	</div>
</template>
<script>
export default {
	name: 'bar3DChart',
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
					.get('/job/expEduSalary/')
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
			let hours = ['初中', '高中', '大专', '本科','硕士'];
			let days = ['不限', '一年', '一到三年', '三到五年','五到十年'];
			let data = this.chartData.salary

			let myChart = this.$echarts.init(document.getElementById('bar3DChart'))
			let options = {
				title: {
					text: '薪资-学历-经验',
					textStyle: {
						fontSize: 18,
						fontWeight: 600,
						fontFamily: 'siyuanheiti_Thin',
						color: '#3b8060'
					},
					top: 10,
					left: 10,

					subtextStyle: {
						fontSize: 16,
						color: '#ffffff'
					}
				},
				tooltip: {
					show: true
				},
				visualMap: {
					show: true,
					max: 35000,
					inRange: {
						color:  ['lightGreen','#87aa66', '#eba438', 'orange', '#d94d4c','red']
					}
				},
				xAxis3D: {
					name: '经验',
					type: 'category',
					data: hours,
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				yAxis3D: {
					name: '学历',
					type: 'category',
					data: days,
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				zAxis3D: {
					name: '',
					type: 'value',
					axisLabel: {
						textStyle: {
							color: '#1f8e74'
						}
					}
				},
				grid3D: {
					//todo 大小
					boxWidth: 200,
					boxDepth: 180,
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#206353',
							width: 1
						}
					},
					axisLabel: {
						textStyle: {
							color: '#1f8e74',
							fontSize: 14
						}
					},
					light: {
						main: {
							intensity: 1.2,
							shadow: true
						},
						ambient: {
							intensity: 0.7,
							shadow: true
						}
					},
					viewControl: {
						alpha: 10,
						beta: 40,
						autoRotate: true,
						zoomSensitivity: 0,
						autoRotateAfterStill: 1,
						distance:240
					}
				},
				series: [{
					type: 'bar3D',
					name: '数量',
					data: data.map(function(item) {
						return {
							value: [item[0], item[1], item[2]]
						}
					}),
					shading: 'lambert',
					label: {
						show: true,
						distance: 1,
						textStyle: {
							color: '#9c7a1b',
							fontSize: 18,
							borderWidth: 0,
							borderColor: 'none',
							backgroundColor: 'rgba(255,255,255,0)',
							fontFamily: 'impact, Simhei'
						},
					},
					itemStyle: {
						opacity: 1
					},
					emphasis: {
							label: {
									textStyle: {
											fontSize: 20,
											color: '#900'
									}
							},
							itemStyle: {
									color: '#95E1D3'
							}
					}
				}]
			}
			myChart.setOption(options)
		}
	}
}
</script>
<style lang="scss" scoped>
#bar3DChart{
	width: 100%;
	height: 550px;
}
</style>
