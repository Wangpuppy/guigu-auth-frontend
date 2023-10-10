<template>
  <div class="app-container">
    角色列表
    <!-- 表格 -->
    <el-table
        v-loading="listLoading"
        :data="list"
        stripe
        border
        style="width: 100%;margin-top: 10px;">

      <el-table-column
          label="序号"
          width="70"
          align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="roleName" label="角色名称" />
      <el-table-column prop="roleCode" label="角色编码" />
      <el-table-column prop="createTime" label="创建时间" width="160"/>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row.id)" title="修改"/>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeDataById(scope.row.id)" title="删除"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//引入定义接口的js文件
import api from '@/api/role/role.js'
import th from "element-ui/src/locale/lang/th";

export default {
  //定义初始值
  data(){
    return{
      listLoading:true,//是否显示加载
      list:[],//角色列表
      total:0,//总记录数
      page:1,//当前页
      limit:3,//每页显示记录数
      searchObj:{}//条件查询封装对象
    }
  },
  //页面渲染之前执行
  created() {
    //调用列表方法
    this.fetchData()
  },
  methods: {//具体方法
    //条件分页查询列表
    //pageNum 查询页数 默认为1
    fetchData(pageNum=1) {
      //页数赋值
      this.page =  pageNum
      //ajax
      api.getPageList(this.page,this.limit,this.searchObj)
          .then(response =>{
            this.listLoading = false
            // console.log(response)
            //每页数据列表
            this.list = response.data.records
            //总记录数
            this.total = response.data.total
          })

    }

  }




}

</script>
