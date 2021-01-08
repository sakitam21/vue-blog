<template>
  <div class="content">
    <TopBar/>

    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'Content',
  components: {
    TopBar
  }
}
</script>

<style scoped>
.content{
  margin-top: 10px;
}
</style>
