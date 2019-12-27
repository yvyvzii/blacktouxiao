<template>
    <el-row class="layout-header" type="flex" align="middle">
         <el-col :span='12' class="left">
             <i class="el-icon-s-fold"></i>
             <span>江蘇傳智播客教育科技股份有限公司</span>
         </el-col>
         <el-col class="right" :span='12'>
         <el-row type="flex" justify="end" align="middle">
            <img :src="!userInfo.photo?userInfo.photo: defaultImg" alt="">
            <el-dropdown  @command=" clickmeu">
                <span >{{userInfo.name}}</span>
                 <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="info">個人信息</el-dropdown-item>
                    <el-dropdown-item command="live">GitHub地址</el-dropdown-item>
                    <el-dropdown-item command="tiuchu">退出</el-dropdown-item>
                 </el-dropdown-menu>
            </el-dropdown>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/yezi.jpg')
    }
  },
  created () {
    // let token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile'
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    }).then(result => {
      this.userInfo = result.data
    })
  },
  methods: {
    clickmeu (command) {
      // this.$message('觸發')
      if (command === 'info') {

      } else if (command === 'live') {
        window.location.href = 'https://github.com/15143413602/blacktouxiao'
      } else if (command === 'tiuchu') {
        window.localStorage.removeItem('user-token')// 刪除令牌
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='less' scoped>
    .layout-header{
        height: 60px;
        .left{
            font-size: 20px;
            span{
                color: #2c3e50;
                font-size: 16px;
                margin-left: 4px;
            }
        }
        .right{
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
</style>
