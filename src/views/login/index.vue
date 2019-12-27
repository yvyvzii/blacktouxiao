<template>
  <div class="login">
    <el-card class="login-card">
      <div class="tu">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 輸入框 -->
      <el-form ref="myform" :model="loginform" :rules="loginrules">
        <!-- 手機號 -->
         <el-form-item  prop="mobile">
           <el-input v-model="loginform.mobile" placeholder="請輸入手機號">
           </el-input>
         </el-form-item>
         <!-- 驗證碼 -->
         <el-form-item  prop="code">
           <el-input v-model="loginform.code" style="width:65%" placeholder="請輸入驗證碼">
           </el-input>
           <el-button style="float:right" plain>發送驗證碼</el-button>
          </el-form-item>
           <!-- 複選框 -->
            <el-form-item  prop="check">
       <el-checkbox v-model="loginform.check" >
         我已閲讀并同意
       </el-checkbox>
       <!-- 登錄按鈕 -->
         <el-button @click="submitlogin" type="primary" style="width:100%;margin-top: 10px;" >登錄</el-button>

         </el-form-item>
       </el-form>
    </el-card>
  </div>

</template>

<script>

export default {
  data () {
    return {
      loginform: {
        mobile: '',
        code: '',
        check: false
      },
      loginrules: {
        mobile: [{ required: true, message: '手機號' },
          { pattern: /^1[3456789]\d{9}$/, message: 'no' } ],
        code: [{ required: true, message: '驗證碼' },
          { pattern: /^\d{6}$/, message: 'no' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('同意就帶你玩'))
          }
        } }]

      }
    }
  },
  methods: {
    submitlogin () {
      this.$refs.myform.validate((isok) => {
        if (isok) {
          // console.log('通過')
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginform
          }).then(result => {
            // 前端緩存 獲得令牌
            // console.log(result.data)
            window.localStorage.setItem('user-token', result.data.token)
            this.$router.push('/home')
          })
          // .catch(() => {
          //   this.$message({
          //     type: 'warning',
          //     message: '錯誤'
          //   })
          // })
        }
      })
    }
  }

}
</script>

<style lang='less' scoped>
  .login{
    background-image: url('../../assets/img/gugong.jpeg') ;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
      width: 450px;
      height: 330px;
      .tu{
        text-align: center;
        margin-bottom: 25px;
        img{
          height: 42px;
        }

      }

    }
  }
</style>
