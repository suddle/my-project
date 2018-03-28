<template>
  <div>
 <!--    <ul class="container log-list"> -->
     <!--  <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li> -->
<!--     </ul> -->
<div class="details_wrap">
   <div class="details_head">
     <ul>
       <li><img src="../../../static/images/p3.png" alt="" /></li>
     </ul>
   </div>
   <div class="details_ct">
     <div class="pj_wrap">
       <span v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)" :key="index">{{item.title}}</span>
     </div>
     <div class="tabCon">
      <div v-for='(itemCon,index) in tabContents' v-show=" index == num" class="pj_ct">
        <p>{{itemCon.title}}</p>
        <img :src="itemCon.img" alt="" />
      </div>  
     </div>
   </div>
</div>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },
  data () {
    return {
      logs: [],
      tabs: [
        { title: '全部' },
        { title: '有图' },
        { title: '好评' },
        { title: '差评' }
      ],
      tabContents: [
        {
          title: '全部评价',
          img: '../../../static/images/p1.png'
        },
        {
          title: '有图评价',
          img: '../../../static/images/p2.png'
        },
        {
          title: '好评评价',
          img: '../../../static/images/p3.png'
        },
        {
          title: '差评评价',
          img: '../../../static/images/p4.png'
        }
      ],
      num: 1
    }
  },

  created () {
    // const logs = (wx.getStorageSync('logs') || [])
    // this.logs = logs.map(log => formatTime(new Date(log)))
  },

  methods: {
    tab: function (index) {
      this.num = index
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
.details_head{
  
}
.pj_wrap{
  display:flex;
  justify-content: space-around;
}
.pj_wrap span{
  border:1rpx solid #ff00ee;
  padding:0.03rem 0.16rem;
}
.pj_wrap{
  border:1rpx solid #ddd;
  padding:28rpx 0rpx;
  border-left: 0;
  border-right: 0;
}
.tabs{
    padding:36rpx;
}
.pj_ct p{
  padding:0 0.2rem;
}
.pj_ct img{
  width:2rem;
  height:2rem;
  padding-left: 0.2rem;
}
</style>
