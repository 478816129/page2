<template>
  <div class="page2-first">
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
  </div>
</template>
<script>
import myhead from "./myhead";

export default {
  components: {
    myhead,
  },
};
</script>
<style  scoped>
.top {
  widows: 1300px;
  height: 1300px;
}
.top > .toptext > div {
  color: aliceblue;
  margin-top: 30px;
}
.toptext {
  position: absolute;
  top: 150px;
  left: 200px;
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
</style>