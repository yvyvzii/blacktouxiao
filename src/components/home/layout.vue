<template>
  <div class="layout">
      <div class="title">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 左側 -->
      <el-menu router background-color="#323745" text-color=" #adafb5" active-text-color=" #ffd04b">
          <!-- 沒摺叠 -->
          <el-menu-item index="/home">首頁</el-menu-item>
          <!-- 二級摺叠菜單 -->
          <el-submenu index="1">
              <span slot="title">内容管理</span>
              <!-- <template></template> -->
                <el-menu-item index="/home/publish">發佈文章</el-menu-item>
                <el-menu-item index="/home/articles">分類管理</el-menu-item>
                <el-menu-item index="/home/materia">文章管理</el-menu-item>
                <el-menu-item index="/home/comment">評論管理</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
              <span slot="title">粉絲管理</span>
              <!-- <template></template> -->
                <el-menu-item index="/home/photo">圖文數據</el-menu-item>
                <el-menu-item index="/home/fansinfo">粉絲概況</el-menu-item>
                <el-menu-item index="/home/fansphoto">粉絲畫像</el-menu-item>
                <el-menu-item index="/home/fanslist">粉絲列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home/userinfo">賬戶信息</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .layout{
    width: 230px;

    .el-menu{
      border: none;
    }
    .title{
      text-align: center;
      padding: 10px 0;
       background-color:#2e2f32;
      img{
         height: 35px;
      }
    }
  }
</style>
