<template>
    <el-carousel height="600px" :interval="5000" arrow="always">
    <el-carousel-item  v-for="item in list" :key="item">
      <h3>
          <!-- {{ item }} -->
        <img :src="item" alt="">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['http://pic.jj20.com/up/allimg/512/0F512115105/120F5115105-6.jpg',
        'http://img1.imgtn.bdimg.com/it/u=4271447706,2153163392&fm=214&gp=0.jpg',
        'http://viewpoint.mydrivers.com/Img/20120423/2012042308504815.jpg']
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel{
    img{
        width: 100%;
        height: 100%;
    }

}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
