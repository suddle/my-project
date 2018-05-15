<template>
  <div id="app">
    <div class="cy_top">
      <div class="cy_top_logo">
        <span></span>
      </div>
      <ul class="cy_top_ul">
         <li>
            <router-link to="/one">用户管理</router-link>
         </li>
         <li>
            <router-link to="/two">配置管理</router-link>
         </li>
         <li>
            <router-link to="/">角色管理</router-link>
         </li>
       </ul>
    </div>
    <div class="cy_left">
       <ul>
         <li>
            <router-link to="/one">用户管理</router-link>
         </li>
         <li>
            <router-link to="/two">配置管理</router-link>
         </li>
         <li>
            <router-link to="/">角色管理</router-link>
         </li>
       </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName2: 'first',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
*{margin:0;padding:0;}
body,html{
  height:100%;
  width:100%;
}
.el-tabs__content{
  display:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  border:1px solid #ddd;
  height:70px;
  line-height: 70px;
  background:#333;
}
.cy_top_logo{
    width:50px;
    height:50px;
    background:purple;
    border-radius: 50%;
    float:left;
     margin-right: 144px;
     margin-left: 100px;
     margin-top: 10px;
}
.cy_top_ul{
float:left;
width:79%;
}
.imgs{
  float:left;
  width:100px;
  height:100px;
}
.cy_top ul li{
  float:left;
  width:30%;
}
.cy_top ul li a{
  display:inline-block;
  color:#fff;
  width:100%;
  height:100%;
}
.cy_top ul li:hover{
  background:#999;
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
