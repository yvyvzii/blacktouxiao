<template>
  <el-card>
    <bread slot="header">
      <template slot='title'>
        評論管理
      </template>
    </bread>
    <el-table>
      <el-table-column width="500px" label="標題"></el-table-column>
      <el-table-column label="評論狀態"></el-table-column>
      <el-table-column label="縂評論數"></el-table-column>
      <el-table-column label="粉絲評論數"></el-table-column>
      <el-table-column label="操作"></el-table-column>

    </el-table>
  </el-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
