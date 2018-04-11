<template>
<div id="project-all">
   <w-header></w-header>
    <div class="manage-part flexLine white">
      <div class="left-table-bar">
        <el-row class="tac">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  theme="light" :router="routerFlag">
              <el-submenu index="1">
                  <template slot="title" >商城管理</template>
                  <el-menu-item index="category">行业管理</el-menu-item>
                  <el-menu-item index="store">店铺管理</el-menu-item>
                  <el-menu-item index="supplier">商家管理</el-menu-item>
                  <!-- <el-menu-item index="shopAttr">商品属性</el-menu-item> -->
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">认证管理</template>
                  <el-menu-item index="applicationIn">入驻申请</el-menu-item>
                  <el-menu-item index="settledApplication">公司认证</el-menu-item>
                  <el-menu-item index="certification">实名认证</el-menu-item>
                  <el-menu-item index="personal-avatar-auth">头像认证</el-menu-item>
                  <el-menu-item index="personal-poster-certification">海报认证</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">广告管理</template>
                  <el-menu-item index="shopIndex">商城首页</el-menu-item>
                  <el-menu-item index="business_circle">商友圈</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">维权</template>
                  <el-menu-item index="report">举报列表</el-menu-item>
                  <!-- <el-menu-item index="refundOrder">退款处理</el-menu-item> -->
              </el-submenu>
              <!-- <el-submenu index="5">
                <template slot="title">资金管理</template>
                  <el-menu-item index="withdraw">商家提现</el-menu-item>
              </el-submenu> -->
             <!--  <el-submenu index="6">
                <template slot="title">需求管理</template>
                  <el-menu-item index="matchList">撮合列表</el-menu-item>
              </el-submenu> -->
            </el-menu>
        </el-row>
      </div>
      <div class="router-page">
      <div class="router-box"><router-view></router-view></div>
      </div>
    </div>
</div>
</template>

<script>
import * as aTypes from '../vuex/action-types';
import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        routerFlag: true
      }
    },
     methods: {
      handleOpen(key, keyPath) {
         
      },
      handleClose(key, keyPath) {
        // window.location.reload();
      }
    }
  }
</script>
<style lang="scss">
body{
  overflow-y: auto!important;
}
#project-all{
  width:100%;
  height:100%;
  padding:0px 0px;
}
.el-menu{
  background-color: #333;
  color:#fff;
}
.el-menu .el-submenu__title{
  color:#fff;
}
.el-menu .el-submenu__title:hover{
  background-color:rgba(72,72,72,.8);
  color:#fff;
}
.el-menu-item{
  color:#fff;
  background-color: #333;
}
.manage-part{
  width:100%;
  height:100%;
 /* background:#F1F2F7;*/
 .left-table-bar{
    flex:2;
    background:#333333;
    height:100%;
 }
 .router-page{
   flex:17;
     height:100%;
    .router-box{
      width:96%;
      margin:0 auto;
      margin-top:.3rem;
      margin-bottom:0rem;
    }
 }
}
.el-menu-item.is-active{
  background:#fff;
  color:#333;
  margin-left: .05rem;
}
.el-submenu .el-menu{
  background:#FF5555;
}
.el-tabs__header{

  background:#fff;
}
.el-tabs__content:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.el-tabs__content {
  zoom: 1;
  background:#fff;
}
.el-message-box__header{
  background:#ddd;
}
.el-dialog__header{
  padding:10px 10px;
  background:#ddd;
  text-align: center;
}
.el-dialog__footer{
  position:absolute;
  bottom:.2rem;
  right:.2rem;
}
.bottom-msg{
  text-align: center;
}
.pic-wrap em{
  color:#ccc;
}
.el-icon-arrow-down:before {
    content: "\e604";
}
.router-box{
  background:#F1F2F7;
}
</style>
