<template>
  <div class="header all-header">
    <!-- logo图标开始 -->
    <div class="header-logo">
      <img src="../../public/img/header/logo2.png" alt="" />
      <span>乐观数据</span>
    </div>
    <!-- logo图标结束 -->
    <!-- 页头列表开始 -->
    <div  class="itemm">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="botton1" >首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">创意直击</template>

          <el-menu-item index="2-1">播主搜索</el-menu-item>
          <el-menu-item index="2-2">领域红人榜</el-menu-item>
          <el-menu-item index="2-3">粉丝飙升榜</el-menu-item>
          <el-menu-item index="2-4">影响传播榜</el-menu-item>
          <el-menu-item index="2-5">新锐小生榜</el-menu-item>
          <el-menu-item index="2-6">区域排行榜</el-menu-item>
          
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">博主发现</template>

          <el-menu-item index="2-1">播主搜索</el-menu-item>
          <el-menu-item index="2-2">领域红人榜</el-menu-item>
          <el-menu-item index="2-3">粉丝飙升榜</el-menu-item>
          <el-menu-item index="2-4">影响传播榜</el-menu-item>
          <el-menu-item index="2-5">新锐小生榜</el-menu-item>
          <el-menu-item index="2-6">区域排行榜</el-menu-item>
          
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">数据洞察</template>

          <el-menu-item index="2-1">播主搜索</el-menu-item>
          <el-menu-item index="2-2">领域红人榜</el-menu-item>
          <el-menu-item index="2-3">粉丝飙升榜</el-menu-item>
          <el-menu-item index="2-4">影响传播榜</el-menu-item>
          <el-menu-item index="2-5">新锐小生榜</el-menu-item>
          <el-menu-item index="2-6">区域排行榜</el-menu-item>
          
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">电商变现</template>

          <el-menu-item index="2-1">播主搜索</el-menu-item>
          <el-menu-item index="2-2">领域红人榜</el-menu-item>
          <el-menu-item index="2-3">粉丝飙升榜</el-menu-item>
          <el-menu-item index="2-4">影响传播榜</el-menu-item>
          <el-menu-item index="2-5">新锐小生榜</el-menu-item>
          <el-menu-item index="2-6">区域排行榜</el-menu-item>
          
        </el-submenu>
        
        
      </el-menu>
      <!-- <div class="header-item">
      <div>
        <a href="#">首页</a>
      </div>
      <div>
        <a href="#">创意直击</a>
        <img src="../../public/img/header/more.png" alt="" />
      </div>
      第一个隐藏页面开始
      <div class="hidden1">
        <ul>
          <li>短视频最新热门TOP</li>
          <li>带货短视频最新TOP</li>
          <li>短视频热门BGM榜单</li>
          <li>热议话题TOP榜单</li>
          <li>最新热搜短视频</li>
          <li>时下热门评论榜单</li>
        </ul>
      </div>
      <div class="">
       <a href="#"></a>
      </div>
    </div>
    页头列表结束 -->
    </div>
    <div class="navlogin">
       <div class="syXs">限时</div>
      <div class="syvip">
        <a href="#" class="syVip" @click="ewmapper">课程干货免费领取</a>
      </div>
      <!-- 登录开始 -->
      <div class="logReg" @click="loginBox">
        <a href="#"  class="logReg"  @click="loginBox">登录</a>
      </div>
    <!-- 登录结束 -->
    </div>
     <!-- 点击出来的弹窗开始 -->
    <div class="ewmBoxs"  :style="active">
      <div class="activityBox">
        <img src="../../public/img/header/activity-ec740.png" alt="">
      </div>
      <div class="loginType">
        <div class="loginHeader">
          <div class="loginHeader-top">
            <img src="../../public/img/header/smalllogo.png" alt="">
            <span>乐观数据</span>
            <img src="../../public/img/header/dianshi.png" alt="">
          </div>
          <div class="infoTit">短视频运营与变现一站式服务平台</div>
        </div>
        <div class="contentBox">
          <img src="../../public/img/header/erweima.png" alt="">
          <div class="loginCodeTip">使用微信扫一扫登陆或注册</div>
        </div>
      </div>
      <div class="closelogin" @click="loginClose">
        <img src="../../public/img/header/cha.png" alt="">
      </div>
    </div>
    <!-- 点击出来的弹窗结束 -->
    <!-- 黑纱开始 -->
    <div class="popumask"  :style="active"></div>
    <div class="popumask"  :style="free"></div>
    <!-- 黑纱结束 -->
    <!-- 限时领取二维码开始 -->
    <div class="wxPayMainBoxs" :style="free">
      <div class="closeWxPay" @click="ewmclose">
        <img src="../../public/img/header/cha.png" alt="">
      </div>
      <div class="wxPayTxts">
        <span>免费</span>
        领取短视频课程干货
      </div>
      <div class="wxPayQRcode">
        <img src="../../public/img/header/erweima2.png" alt="">
      </div>
      <div class="wxPayTx">
        <p>打开微信扫一扫</p>
        <p>
          即可免费领取
          <span>VIP</span>
        </p>
        <p>数据更全面</p>
        <p>工具更丰富</p>
      </div>
      <div class="vipInfo">
        <span>加入社群即可享受：</span>
        <span>业内干货、行业动态、一线大咖每周直播干货分享+群内答疑、大数据榜单分析、多元化内容输出、定期会员福利放送，让流量变现更简单！</span>
      </div>
    </div>
    <!-- 限时领取二维码结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      active:"",
      free:""
    };
    
  },
  methods: {
    handleSelect(index) {
      this.activeIndex=index
    },
     loginBox(){
      this.active="display:block";
    },
    loginClose(){
      this.active="";
    },
     ewmapper(){
      this.free="display:block";
    },
    ewmclose(){
      this.free="";
    }
    
  },

// mounted() {
   
// }
};
</script>
<style  scoped>

.all-header {
  display: flex;
  background-color:rgb(34, 18, 138);
  color:deeppink;
  justify-content: space-between;
  align-items: center;
}
.header{
  width: 1300px;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  height: 58px;
  }
/* .header-item {
  display: flex;
} */
.header-logo{
  overflow: hidden !important;
}
.header-logo>img{
  width: 40px;
  vertical-align: middle;
}
.hidden1 {
  display: none;
}
.itemm{
  display: flex;
  
}
.itemm /deep/ .el-menu{
  background-color: rgb(34, 18, 138);
  border-bottom: darkviolet;
  min-height:58px;
  
}
.itemm /deep/ li.el-menu-item.is-active{
  color: aliceblue !important;
  font-size: 20px;
  overflow: hidden !important;
}
.itemm /deep/ li.el-menu-item.is-active:hover{
 background-color: rgb(138, 18, 98) !important ;
  border-bottom-color: aquamarine  !important;
}
.itemm /deep/ div.el-submenu__title{
  color: aliceblue !important;
  font-size: 20px;
  overflow: hidden !important;
}
.itemm /deep/ div.el-submenu__title:hover{
  background-color: rgb(138, 18, 98) !important ;
  border-bottom-color: aquamarine  !important;
  
}
.navlogin{
  display: flex;
}
.syVip{
  display: inline-block;
  border-radius:20px;
  background: coral;
  text-decoration: none;
  width: 140px;
  height: 32px;
  line-height: 32px;
  color: aliceblue;
  margin-right: 30px;
}
.logReg{
  display: inline-block;
  width: 58px;
  height: 30px;
  background-color: aliceblue;
  border-radius:5px ;
  color: black;
  line-height: 30px;
  cursor: pointer;
  text-decoration: none;
}
.syXs{
  background-color:chocolate;
  width: 32px;
  height: 18px;
  color: aliceblue;
  font-size: 5px;
  border-radius:5px ;
  position: absolute;
  left: 1214px;
  top:5px
}
.ewmBoxs{
 position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: #ff0;
  transform: translate(-50%,-50%);
  /* overflow: hidden; */
  z-index: 999;
  width: 597px;
  box-sizing: border-box;
  display: none;
}
.activityBox,.loginType{
  display: inline-block;
}
.loginType{
  width: 325px;
  box-sizing: border-box;
  vertical-align: middle;
}
.activityBox>img{
  max-width: 100%;
  vertical-align: middle;
}
.loginHeader{
  padding: 0 30px;
}
.loginHeader-top{
  width: 100%;
  text-align: left;
}
.loginHeader-top>img,.loginHeader-top>span{
  vertical-align: middle;
}
.loginHeader-top>img:last-child{
  margin-left: 120px;
}
.infoTit{
  font-size: 20px;
  color: #333;
  width: 170px;
  display: block;
  margin: 0 auto;
  line-height: 30px;
  margin-top: 40px;
}
.contentBox{
  height: 250px;
  padding-top: 30px;
  box-sizing: border-box;
}
.contentBox>img{
  width: 130px;
  height: 130px;
}
.loginCodeTip{
  color: #999;
  margin-top: 30px;
  font-size: 14px;
}
.closelogin{
  position: absolute;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  right: -10px;
  top: -25px;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.1);
  background: #ffffff;
  transition: all 1s;
}
.closelogin>img{
  margin: 9.5px;
}
.closelogin:hover{
  transform: rotate(360deg);
}
.wxPayMainBoxs{
  width: 355px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  background-color: #ff0;
  transform: translate(-50%,-50%);
  /* overflow: hidden; */
  z-index: 999;
  padding: 30px 20px;
  text-align: center;
  box-sizing: border-box;
  display: none;
}
.closeWxPay{
  position: absolute;
  width: 35px;
  height: 35px;
  cursor: pointer;
  right: 0;
  top: 3px;
}
.closeWxPay>img{
  width: 20px;
  height: 20px;
}
.wxPayTxts{
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
}
.wxPayTxts>span{
  font-size: 20px;
  color: #ff3b1b;
}
.wxPayQRcode>img{
  width: 190px;
}
.wxPayTx{
  color: #333;
  font-size: 18px;
  margin-top: 10px;
  border-bottom: 1px solid #434343;
  line-height: 26px;
}
.wxPayTx>p>span{
  color: #ff3b1b;
}
.wxPayTx>p:nth-child(3),.wxPayTx>p:nth-child(4){
  display: inline-block;
  width: 50%;
  margin: 10px auto;
}
.vipInfo{
  padding-top: 20px;
  text-align: justify;
  line-height: 18px;
  font-size: 14px;
  color: #515151;
}
.vipInfo>span:first-child{
  font-weight: 600;
}
.popumask{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 7;
  display: none;
}
</style>
