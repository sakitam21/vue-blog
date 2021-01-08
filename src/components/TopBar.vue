<template>
  <div class="topbar">
    <ul class="ul">
      <!--key的作用是快速找到被修改的数据更新虚拟DOM-->
      <li v-for="item in items" :key="item.index" class="item">
        <router-link :to="{name:item.name}">
          <h2>{{item.text}}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  data: function () {
    return {
      items: [
        { id: 0, text: 'Blog', name: 'blog' },
        // { id: 1, text: 'Canvas', name: 'canvas' },
        // { id: 2, text: 'Animation', name: 'animation' },
        { id: 1, text: 'Echarts', name: 'echarts' }
      ]
    }
  }
}
</script>

<style scoped>
.topbar{
  padding: 10px 0;
}
.item{
  display: inline-block;
  text-align: left;
  padding: 0 40px;
  vertical-align: top;
  border-right: 2px solid #cecece;
}
li:last-child{
  border: none;
}
/*动态menu*/
.topbar .ul a{
  display: inline-block;
  color: #939393;
}
.topbar .ul .router-link-active{
  color: #008b8b !important;
}
</style>
