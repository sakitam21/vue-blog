<template>
  <div class="blog">
    <!--模块化-->
    <!--<h1>Blog Component</h1>-->

    <div class="blogcontent">
      <div class="sidebar">
        <!--分类-->
        <ul>
          <li>Blog分类1</li>
          <li>Blog分类2</li>
          <li>Blog分类3</li>
          <li>Blog分类4</li>
        </ul>
      </div>
      <div class="blogbody">
        <!--每个分类抽取点赞+回复最多的前十条-->
        <div class="blogs">
          <div class="blogstitle">
            Blog分类1
          </div>
          <div class="blogitem">
            Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1
          </div>
          <div class="blogitem">
           Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2
          </div>
        </div>
        <div class="blogs">
          <div class="blogstitle">
            Blog分类2
          </div>
          <div class="blogitem">
            Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1
          </div>
          <div class="blogitem">
           Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2
          </div>
        </div>
        <div class="blogs">
          <div class="blogstitle">
            Blog分类3
          </div>
          <!--点击跳转到详情页-->
          <div class="blogitem">
            Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1Blog1回复10点赞2
          </div>
          <div class="blogitem">
           Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2Blog2回复2点赞9
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style scoped>
.blogcontent{
  margin: 10px 0;
  text-align: left;
}
.sidebar{
  width: 16%;
  padding: 20px;
  float: left;
  background-color: #59616E;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
.sidebar li{
  border-bottom: 1px solid #ccc;
}
.blogbody{
  width: 70%;
  float: left;
  padding: 0 20px;
  line-height: 40px;
}
.blogs{
  margin-bottom: 20px;
}
.blogs .blogstitle{
  background-color: #59616E;
  padding: 0 20px;
  color: #fff;
}
.blogs .blogitem{
  padding: 0 20px;
  border-bottom: 1px solid #59616E;
}
</style>
