<template>
  <!-- 第二组件 -->
  <div class="discovery">
    <div class="toptitle">
       <div class="translation">
        <!-- 底部图片与标题文字 -->
          
        <p class="textTit">视频多层筛选与热门追踪</p>
      </div>
    </div>
    <div class="middle">
        
            <p class="second">海量数据实时发掘短视频热门视频与音乐多算法精准定位</p>
            <p class="second">前沿热门视频、话题、音乐</p>
            <ul class="second" id="text">
                <li>短视频实时热门视频，多条件组合筛选</li>
                <li>短视频优质音乐，提前一步热度研判</li>
                <li>短视频最新话题，用话题引爆热度</li>
                <li>短视频评论词云，大数据分析观众热议内容</li>
            </ul>
            <div class="example">
        <img src="../../public/img/op2/example1-19109.png" alt />
      </div>
        
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      scrollTop: document.body.scrollTop,
    };
  },
  mounted() {
    //监听
    window.addEventListener("scroll", this.scrolla);
  },
  methods: {
    scrolla() {
      let roll = document.documentElement.scrollTop;
      // console.log(roll)
      //获取class为discovery
      let discovery = document.getElementsByClassName("discovery")[0];
      //获取class为first
      let first = document.getElementsByClassName("toptitle")[0];
      
      //获取class为seconds
      let second = document.getElementsByClassName("second");
      
      //获取class为example
      let example = document.getElementsByClassName("example")[0];
      
      //滑动触发
      if (roll >= 220) {
        // console.log(roll)
        discovery.classList.add("animated", "fadeInUp");
        first.classList.add("animated", "fadeInUp");
        example.classList.add("animated", "fadeInleft");
      }
      //遍历
      for (var i of second) {
        if ((roll = 220)) {
          i.classList.add("animated", "fadeInLeft");
        }
      }
    },
  },
};
</script>
<style scoped>
*{margin: 0;padding: 0;}
.discovery {
  margin: 180px auto ;
  position: relative;
  
  }
  .toptitle{
     max-width: 1000px; 
     margin-left: 800px;
      opacity: 0;
  }
  
  /* 标题样式 */
 
.textTit {
  display: inline-block;
  vertical-align: middle;
  background-image: url("../../public/img/op2/discovery-4b7b8.png");
}
/* =============================================== */
/* .translation {
  /* position: absolute; */
/* opacity: 0; 
} */
/* =============================================== */

.translation img {
  border-style: none;
  max-width: 100%;
  vertical-align: middle;
  
}
/* =============================================== */

/* =============================================== */
.translation .textTit {
  width: 460px;
  
  font-size: 30px;
  font-weight: 600;
  color: #f1f1ff;
  line-height: 86px;
  display: inline-block;
  
  text-align: center;
  
}
/* =============================================== */

.middle{
    padding: 70px 70px;
    border:2px solid rgb(204, 73, 95);
    margin-left: 300px;
    margin-top: 70px;
    width: 1200px;
    
}
#text{
    list-style: none;
    font-size: 14px;
  color: #8f8fc5;
  letter-spacing: 1px;
  margin-top: 40px;
  line-height: 26px;
  width: 100%;
 text-align: right;
 
}
.second{
     color: #f1f1ff;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  width: 100%;
  text-align: right;
    opacity: 0;
}
.example{
    position:absolute;
    left:200px;
    top:250px;
     opacity: 0;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
   50%{
      opacity: .5;
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
/* =============================================== */
/* 向左动画 */
@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    -ms-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
   50%{
      opacity: .5;
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
/* =============================================== */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    -ms-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
   50%{
      opacity: .5;
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

</style>