<template>
  <el-row>
    <el-col>图表</el-col>
    <el-col>
        <div id="main" style="height:500px;"></div>
    </el-col>
  </el-row>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";

export default {
  name: "echart",
  data() {
    return {
      chartBar: null
    }
  },
  mounted() {
    // 初始化图表
    this.chartInit();
  },
  methods: {
      chartInit () {
        this.chartBar = echarts.init(document.getElementById("main"));
        this.chartBar.setOption({
          xAxis: {
            data:  ['10月', '11月', '12月', '13月', '14月', '15月'],
            axisLabel: {
                inside: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            z: 10
            },
          yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#999'
                }
            }
          },
          dataZoom: [
            {
                type: 'inside'
            }
          ],
          series: [
            { // For shadow
                type: 'bar',
                itemStyle: {
                    normal: {color: 'rgba(0,0,0,0.05)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: [],
                animation: false
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#f6d4d3'},
                                {offset: 0.5, color: '#f39391'},
                                {offset: 1, color: '#C25552'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 1, color: '#f6d4d3'},
                                {offset: 0.7, color: '#f39391'},
                                {offset: 0, color: '#C25552'}
                            ]
                        )
                    }
                },
                data: [220, 182, 191, 234, 290, 330]
            }
          ]
        });
      }
  }
}
</script>

<style>
</style>
