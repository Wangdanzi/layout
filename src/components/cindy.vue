<template>
<el-container>
  <el-header height="100px">
    <div>
      <div class="log fl clearfix">
        <p>w.in后台配置系统</p>
      </div>
      <div class="title">
        <ul>
          <li> <router-link to="/list">1我是标题</router-link></li>
          <li><router-link to="/page">2我是标题</router-link></li>
          <li><router-link to="/user">3我是标题</router-link></li>
          <li><router-link to="/">4我是标题</router-link></li>
        </ul>
      </div>
      <div class="user fr clearfix">
        <ul class="fl clearfix">
          <li class="photo fl"><img src="../assets/logo.png" alt=""></li>
          <li class="fl user-name" > user name
            <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div class="user-data">
                  <p><a href="user">处处闻啼鸟</a></p>
                  <p>处处闻啼鸟</p>
                  <p>夜来风雨声</p>
                  <p>花落知多少</p>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </el-header>
  <el-container class="container">
    <el-aside width="236px">
      <div class="aside-uesr">
        <img src="../assets/logo.png" alt="">
        <p>你有8个蛋</p>
      </div>
      <div class="aside-list">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          active-text-color="#ffd04b"
          text-color="#ffd04b"
          router
          >
          <el-submenu index="">
            <template slot="title" style="padding-left:1px" active-text-color="red">
              <i class="el-icon-location"></i>
              <span>一级菜单</span>
            </template>
            <!-- 放菜单项 -->
            <el-menu-item index="list">
              <span slot="title">二级菜单 2</span>
            </el-menu-item>
            <el-menu-item index='user'>
              <span slot="title">二级菜单 23</span>
            </el-menu-item>
            <el-menu-item index='page'>
              <span slot="title">二级菜单 23</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-aside>
    <el-main width="100%">
      <router-view></router-view>
    </el-main>

  </el-container>
  <el-footer>Footer</el-footer>
</el-container>

</template>



<script >
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
        userData:false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      hinde(){
        this.userData=true;
        console.log("1111111");
        
      }
      //mian表格方法
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row);
      //     });
      //   } else {
      //     this.$refs.multipleTable.clearSelection();
      //   }
      // },
      // handleSelectionChange(val) {
      //   this.multipleSelection = val;
      // },
      // handleEdit(index, row) {
      //   console.log(index, row);
      // },
      // handleDelete(index, row) {
      //   console.log(index, row);
      // }
    }
  }
</script>

<style scoped lang="less">
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
  background-color: #EDF2FF;
}
  .el-header, 
  .el-footer {
    width: 100%;
    line-height: 100px;
  }
  // 头部开始
  .el-header {
    width: 100%;
    background-color: #2C56E7;
    color: #fff;
    position: relative;
    .log {
      font-size: 28px;
    }
    .title {
      // width: ;
      position: absolute;
      font-size: 18px;
      left:654px;
      text-align: center;
      ul{
        display: flex;
        li {
          width: 150px;
          flex:1;
          a {
            opacity: 0.5;
          }
      }
      li:hover {
        background-color:  #002ECC;
        a {
          color:#fff;
          opacity: 1;
        }
      }
      }
    }
    .user {
      .photo {
        margin-right: 20px;
        img {
          width: 50px;
        height: 50px;
        border: 1px solid skyblue;
        background-color: skyblue;
        border-radius:50%;
        vertical-align: middle;
        }
      }
      .user-name {
        margin-right: 20px;
        span {
        color:#fff;
        }
      }
      .more {
        margin: 0 20px;
      }
    }
    .user-data {
      // position: absolute;
      // top: 100px;
      // right: 0;
      // height: 200px;
      // width: 150px;
      // z-index: 9999;
      background-color: #666;
      p {
        line-height: 20px;
        text-align: center;
        padding: 10px;
      }
    }
  }
  .container {
    width: 100%;
    margin: 0 auto;
    display:flex;
  }
  .el-aside {
    margin-right: 10px;
    width: 236px;
    text-align: center;
    background-color: #fff;
    .el-menu {
      border-right:none;
    }
    .aside-uesr {
      margin: 0 18px ;
      padding-bottom: 30px;
      width: 200px;
      border-bottom: 2px solid #ccc;
      img {
        width: 60px;
        height: 60px;
        background-color: #ccc;
        border-radius: 50%;
        margin: 20px 0  8px 0 ;
      }
    }
  }
  .el-footer{
    margin-top: 10px;
    background-color: #fff;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
  }
</style>
