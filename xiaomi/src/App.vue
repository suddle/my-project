<template>
  <div id="app">
    <div class="cy_top">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
    <div class="cy_left">
       <ul>
         <li>
            <router-link to="/one">one</router-link>
         </li>
         <li>
            <router-link to="/two">two</router-link>
         </li>
         <li>
            <router-link to="/">index</router-link>
         </li>
       </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
*{margin:0;padding:0;}
body,html{
  height:100%;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
  height:100%;
}
.cy_left{
  width:20%;
  border:1px solid #ddd;
  height: 90%;
  float: left;
  background: #909399;
}
.cy_top{
  width:100%;
  height:10%;
  border:1px solid #ddd;
  background:#409eff;
}
.cy_top img{
  display:inline-block;
  width:100px;
  height:100px;
}
.cy_left ul li{
  height:60px;
  line-height: 60px;
  text-align: left;
  padding-left: 20px;
  background:#333;
  margin:5px 0;
}
.cy_left ul li:hover{
  background:#666;
}
.cy_left ul li a{
  display:inline-block;
  width:100%;
  height:100%;
  color:#fff;
}
</style>
