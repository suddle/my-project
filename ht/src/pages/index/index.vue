<!-- <template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
      
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'World asd',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>
 -->
 <template>
    <div class="jy_wrap">
      <div class="jy_head">
        <input type="text" class="search" placeholder="请输入商品名称"/>
        <img src="../../../static/images/p4.png"  alt="" />
      </div>
      <div class="lanmu">
        <h3 :text="motto">{{'商品更新'}}</h3>
        <div class="lanmu_ct">
           <div class="lanmu_list"><img src="../../../static/images/p1.png"  alt="" /></div>
           <div class="lanmu_list"><img src="../../../static/images/p2.png"  alt="" /></div>
           <div class="lanmu_list"><img src="../../../static/images/p3.png"  alt="" /></div>
        </div>
      </div>
      <div class="lanmu">
        <h3 :text="motto">{{'精选商品'}}</h3>
        <div class="lanmu_ct">
           <div class="lanmu_list"><img src="../../../static/images/new_2_03.png"  alt="" /></div>
           <div class="lanmu_list"><img src="../../../static/images/new_3_03.png"  alt="" /></div>
           <div class="lanmu_list"><img src="../../../static/images/new_4_03.png"  alt="" /></div>
        </div>
      </div>
      <div class="footer">
        <h3>{{'宸宇商城'}}</h3>
        <p>{{'版权声明：盗版必究'}}</p>
      </div>
    </div>
 </template>
 <script>
import card from '@/components/card'
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  components: {
    card
  },
  methods: {
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  beforeCreate () {

  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  beforeMount () {

  }
}
</script>
<style scoped>
.jy_wrap{
  width:100%;    
  height:100%;
}
.jy_head{
  width:100%;
  height:5rem;
  background:#333;
  color:#fff;
  overflow:hidden;
  position:relative;
}
.search{
  position:absolute;
  top: 0.5rem;
  margin:0 auto;
  width:90%;
  height:1rem;
  border:1px solid #fff;
  padding-left:0.1rem;
  left:4%;
}
.lanmu{
  height:3.5rem;
  color:#333;
  margin-top: 0.5rem;
}
.lanmu h3{
  text-align: center;
  color:#333;
/*  margin-bottom: 0.5rem;*/
}
.lanmu_ct{
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-around;
}
.lanmu_list{
  width:30%;
  height:3rem;
  line-height:3rem;
    background:#eee;    
    text-align: center;
}
.lanmu_list img{
  width:100%;
  height:100%;
}
.footer{
  padding-top: 0.5rem;
  text-align: center;
  background:#333;
  height:2rem;
  margin-top: 0.5rem;
}
</style>