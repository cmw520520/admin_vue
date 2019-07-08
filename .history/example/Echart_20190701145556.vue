<template>
  <el-row>
    <el-col>图表</el-col>
    <el-col>
        <div id="bar" style="height:300px;"></div>
    </el-col>
    <el-col>
        <div id="line" style="height:300px;"></div>
    </el-col>
  </el-row>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入曲线图
import "echarts/lib/chart/line";
import 'echarts/lib/component/tooltip';

// 柱状图 配置参数
const barOption = {
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : ''        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            data:  ['10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#666666'
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
                                {offset: 0.5, color: '#f39391'},
                                {offset: 0, color: '#C25552'}
                            ]
                        )
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 520, 182, 391, 234, 290, 330]
            }
          ]
        }

// 曲线图 配置参数
const lineOotion = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};




export default {
  name: "echart",
  data() {
    return {
      // 柱状图
      chartBar: null,
      // 曲线图
      chartLine: null
    }
  },
  mounted() {
    // 初始化图表
    this.chartInit();
  },
  methods: {
    // 初始化图表
    chartInit () {
      // 柱状图
      this.chartBar = echarts.init(document.getElementById("bar"));
      this.chartBar.setOption(barOption);

      // 曲线图
      this.chartLine = echarts.init(document.getElementById('line'));
      this.chartLine.setOption(lineOotion);
    }
  }
}
</script>

<style>
</style>
