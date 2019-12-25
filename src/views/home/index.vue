<template>
  <el-container>

    <!-- 左側 -->
    <el-aside style="height:100vh;background-color:#323745;width:230px">
      <layout> </layout>
    </el-aside>
    <!-- 右側 -->
    <el-container>

      <el-header>
        <!-- 頭部 -->
      <layout-header></layout-header>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import layoutaside from '../../components/home/layout'
// import layoutheader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layout': layoutaside,
  //   'layout-header': layoutheader
  // }
}
</script>

<style>

</style>
