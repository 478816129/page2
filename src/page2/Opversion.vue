<template>
  <div class="page2-first" id="home" @mousemove="mymove()">
    <myhead></myhead>
    <div class="top">
      <div class="toptext">
        <div id="p1">乐观数据2.0</div>
        <div id="p2">短视频管理运营与商品变现 一站式大数据分析平台</div>

        <div id="p3">
          ——
          通过数据分析与解读后，形成大数据追踪、短视频流量趋势报告，提供热门视频、音乐、爆款商品和优质账号的参考方式。
        </div>
        <div id="p4">
          ——
          优化视频的内容、粉丝对象、拍摄技巧、上传方式、上传的标题及关键词做优化，助力账号内容定位、粉丝增长、粉丝画像优化及流量变现转化的财富神器。
        </div>
      </div>
      <div class="toppic">
        <img
          class="analysisImg"
          src="../../public/img/op2/analysisImg-be2a9.png"
          alt
        />

      </div>
    </div>
    <!-- <div class="secondtop">
      <el-button type="primary" icon="el-icon-search">登录领取24小时会员</el-button>
   
    </div> -->
    <!-- 下半部分开始 -->
     <div class="bottom" style="padding:0px 100px">
      <div class="dataList">
        <div class="rotate">
          <img src="../../public/img/op2/circle_01.png" alt />
          <img src="../../public/img/op2/circle_02.png" alt />
          <img src="../../public/img/op2/circle_03.png" alt />
          <img src="../../public/img/op2/tv.png" alt />
        </div>
        <p>1,697,128</p>
        <span>今日新增视频</span>
      </div>
      <div class="dataList">
        <div class="rotate">
          <img src="../../public/img/op2/circle_01.png" alt />
          <img src="../../public/img/op2/circle_02.png" alt />
          <img src="../../public/img/op2/circle_03.png" alt />
          <img src="../../public/img/op2/music.png" alt />
        </div>
        <p>539,620</p>
        <span>今日新增音乐</span>
      </div>
      <div class="dataList">
        <div class="rotate">
          <img src="../../public/img/op2/circle_01.png" alt />
          <img src="../../public/img/op2/circle_02.png" alt />
          <img src="../../public/img/op2/circle_03.png" alt />
          <img src="../../public/img/op2/people.png" alt />
        </div>
        <p>1,529,260</p>
        <span>今日更新播主信息</span>
      </div>
    </div>
  </div>
</template>
<script>
import myhead from "./myhead";

export default {
  components: {
    myhead,
  },
  methods:{
 mymove(e) {
      e = window.event || e;
      let home = document.getElementById("home");
     
      let imgs = document.getElementsByClassName("analysisImg")[0];
      
      // console.log(home)
      // console.log(imgs)
      let w = e.movementX;
      let h = e.movementY;
      // console.log(w)
      // console.log(h)
      if (w >50 || w<-50) {
        w = 0;
      }
      if (h >50 || h<-50) {
        h = 0;
      }
      //移动
      imgs.style.top = h + "px";
       
      imgs.style.left = w + "px";
      
    },
  }
  

};
</script>
<style  scoped>

#home{
  position: relative;
   
  
}
.top {
  width: 1300px;
  
}

.top > .toptext > div {
  color: aliceblue;
  margin-top: 30px;
}
.toptext {
  
  margin-top: 120px;
  margin-left: 400px;
  text-align: left;
  width: 500px;
}
#p1 {
  font-size: 50px;
}
#p2 {
  font-size: 40px;
   /* color: #3766ff; */
  background: linear-gradient(-90deg, #5e42c6, #ff4698);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#p3,#p4{
  font-size: 16px;
  color: #9896e0;
}
.toppic{
 position:absolute ;
  margin-left: 1100px;
  top:200px
}
.analysisImg{
  
  position:absolute ;
  
  
  transition: all 0.35s ;
  
}

.bottom {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 100px 400px;
}


.rotate {
  position: relative;
  width: 105px;
  height: 105px;
  margin: 20px auto 0;
  
}
.rotate img {
  position: absolute;
}
.rotate img:first-child {
  left: 0;
  animation: xz 2s linear infinite;
}
.rotate img:nth-child(2) {
  left: 9px;
  top: 10px;
  animation: nxz 2s linear infinite;
}
.rotate img:nth-child(3) {
  left: 15px;
  top: 17px;
  animation: xz 2s linear infinite;
}
.rotate img:last-child {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@keyframes xz {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes nxz {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.dataList p {
  font-size: 34px;
  color: #f1f1f1;
  margin-top: 10px;
  font-weight: 400;
}
.dataList span {
  color: #9896e0;
  font-weight: 400;
  margin-top: 5px;
  display: block;
  text-align: center;
  font-size: 14px;
}
</style>