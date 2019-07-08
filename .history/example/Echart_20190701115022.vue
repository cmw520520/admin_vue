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
          title: {
              text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
        ]
        });
      }
  }
}
</script>

<style>
</style>
