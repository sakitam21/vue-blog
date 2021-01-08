<template>
  <div class="echarts">
    <h1>Echarts Component</h1>
    <div id="myechart" style="width:100%;height:500px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  mounted: function () {
    let echarts = require('echarts')
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('myechart'))
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }
}
</script>
