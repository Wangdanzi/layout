<template>
  <div>
     <div class="nav" style="padding:20px">
        <el-breadcrumb >
          <el-breadcrumb-item :to="{ path: '/' }">一级目录</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: 'list' }">二级目录</el-breadcrumb-item>
        </el-breadcrumb>
        <el-input class="search" suffix-icon placeholder="请输入内容">
        </el-input>
          <i class="icon-search el-icon-search"></i>
      </div>
      <div class="main1">
        <ul class="fl">
          <li>
            <span>名称名称</span>
            <el-input v-model="input" placeholder="请输入内容">2222</el-input>
          </li>
           <li>
            <span>名称名称</span>
            <el-input v-model="input" placeholder="请输入内容">2222</el-input>
          </li>
          <li>
            <span>名称名称</span>
            <el-time-select
              v-model="value1"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间">
            </el-time-select>
          </li>
          <li>
            <span>名称名称</span>
              <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </li>
        </ul>
        <el-button type="primary" :plain="true" class="nuo" @click="open" round>主按钮</el-button>
      </div>
      <div class="main2">
        <div class="title">
          <el-button :plain="true" type="info"  @click="open" >信息按钮</el-button>
          <el-button :plain="true" type="info"  @click="open">信息按钮</el-button>
        </div>
        <div class="table">
          <el-table
            ref="multipleTable"
            :data="tableData"
            stripe border
            tooltip-effect="dark"
            style="width: 100%; background-color: #002ECC; "
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="text" @click="handleEdit">{{nuo}}</el-button>
                <el-button size="mini" type="text" @click="handleDelete"><span style="color:skyblue">{{look}}</span></el-button>
                <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"><span style="color:red">移除</span></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div>
          <el-pagination
            class="page"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout=" prev, pager, next, sizes, jumper, slot"
            :total="1000">
          </el-pagination>
        </div>
      </div>
      
  </div>
</template>
<script>
export default {
  data() {
      return {
        isCollapse: true,
        value1: '',
        //mian表格数据
         tableData: [
            {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
           {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, 
        ],
        multipleSelection: [],
        // 下拉菜单
        options: [
            {
              value: '选项1',
              label: '黄金糕'
            }
          ],
        value: '',
        nuo:'',
        look:''
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //mian表格方法
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit() {
        alert("未发布成功")
      },
      statusData(){
        const dataNuo = '1';
          if(dataNuo === '1' ){
            this.nuo="发布"
          }else{
            this.nuo== "下线"
          }
      },
      statusLook(){
        const dataLook = '1';
          if(dataLook === '1' ){
            this.look="查看"
          }else{
            this.look="修改"
          }
      },
      handleDelete() {
        alert("暂无数据")
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      open(){
         this.$message('暂无功能');
      },
      //分页方法 
       handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    created(){
      this.statusData()
      this.statusLook()
    }
}
</script>
<style lang="less" scoped>
  * {
  margin: 0;
  padding: 0;
  ul,ol {
    list-style-type: none;
  }
  a {
    text-decoration : none;
    color:#ccc;
    display: inline-block;
  }
  span {
    color:#666;
    font-size: 14px;
  }
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  overflow: auto;
}
.el-container{
  background-color: #B3C0D1;
}
  .el-header, 
  .el-footer {
    width: 100%;
    line-height: 100px;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    display:flex;
  }
  .search {
      display: inline-block;
      width: 240px;
      height: 32px;
      position: absolute;
      right: 0;
      top: 10px;
      border-radius: 50%;
       /deep/.el-input__inner {
        border-radius:50px;
      }
  }
  /deep/.el-input__inner {
     border-radius:10px;
      }
  .nav {
    position: relative;
  }
  .icon-search {
    position: absolute;
    right: 12px;
    top: 20px;
    font-size: 20px;
    color :#5175F4;
  }
  
  .main1,
  .main2 {      
    margin-top: 10px ;
    background-color: #fff;
  }
  .main1 {
    height: 189px;
    position: relative;
    li {
      height: 50px;
      float: left;
      margin: 15px;
    }
    .el-input {
      display: inline-block;
      width: 164px;
      height: 32px;
      
    }
    .el-button {
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-bottom: 20px;
      transform: translateX(-50%)
    }
    
  }
  .main2 {
    // width: 100%;
    height: 450px;
    .title {
      .el-button {
        width: 99.5px;
        height: 36px;
        margin: 20px;
      }
    }
    .page {
      float: right;
      padding: 20px;
    }

  }
  .nuo {
    background-color: #5175F4;
    color:#fff;
  }
  // .father {
  //   width: 1200px;
  //   margin: 0 auto;
  // }
  
  .el-footer{
    margin: 10px 0 40px 0;
    background-color: #fff;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
</style>