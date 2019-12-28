<template>
  <el-card>
    <bread slot="header">
      <template slot='title'>
        評論管理
      </template>
    </bread>
    <el-table :data="list">
      <el-table-column prop="title" width="500px" label="標題"></el-table-column>
      <el-table-column :formatter="formatterboo" prop="comment_status" label="評論狀態"></el-table-column>
      <el-table-column prop="total_comment_count" label="縂評論數"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉絲評論數"></el-table-column>
      <el-table-column  label="操作">
        <template slot-scope="obj">

        <el-button size="small" type="text">修改</el-button>
        <el-button size="small" type="text">{{obj.row.comment_status?'關閉':'打開'}}
        </el-button>
         </template>
      </el-table-column>

    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getcomment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
      })
    },
    formatterboo (row, column, cellValue, index) {
      // cellValue當前單元格
      // column當前列信息
      // row當前行數據
      return cellValue ? '正常' : '關閉'
    }
  },
  created () {
    this.getcomment()
  }
}
</script>

<style>

</style>
