<template>
  <div class="login">
    <el-card class="login-card">
      <div class="tu">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 輸入框 -->
      <el-form>
        <!-- 手機號 -->
         <el-form-item>
           <el-input  placeholder="請輸入手機號">
           </el-input>
         </el-form-item>
         <!-- 驗證碼 -->
         <el-form-item>
           <el-input style="width:65%" placeholder="請輸入驗證碼">
           </el-input>
           <el-button style="float:right" plain>發送驗證碼</el-button>
           <!-- 複選框 -->
       <el-checkbox style="margin-top: 20px;">
         我已閲讀并同意
       </el-checkbox>
       <!-- 登錄按鈕 -->
       <el-form-item>
         <el-button type="primary" style="width:100%;margin-top: 10px;" >登錄</el-button>
       </el-form-item>
         </el-form-item>
       </el-form>
    </el-card>
  </div>

</template>

<script>
export default {

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
