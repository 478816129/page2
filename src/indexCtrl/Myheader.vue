<template>
  <div>
    <el-row class="disflex-start-end">
      <el-col :span="8">
        <a href="#" class="headerLogo">
          <div>柯基联盟</div>
          <div class="headerSlogan">
            <img src="../../public/img/img_header/lgSlogan.png" alt="" />
          </div> </a
      ></el-col>
      <el-col :span="10" class="tab">
        <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" lazy 
    active-text-color="blue">
  <el-menu-item index="1" class="bt2" >首页</el-menu-item>
  <el-submenu index="3">
    <template slot="title" >柯基大课堂</template>
    <el-menu-item index="2-2" class="bt1">柯基品种</el-menu-item>
    <el-menu-item index="2-3"  class="bt1">柯基数据</el-menu-item>
    <el-menu-item index="2-4"  class="bt1">柯基广场</el-menu-item>
  </el-submenu>
  <el-menu-item index="2" class="bt2">柯基2.0</el-menu-item>
  <el-menu-item index="4" class="bt2">干货资料</el-menu-item>
  <el-menu-item index="5" class="bt2">工具集合</el-menu-item>
  <el-menu-item index="6" class="bt2">了解更多</el-menu-item>
</el-menu> -->

        <div class="button1 moveBox" id="homepage2">
          <router-link to="#">首页</router-link>
        </div>
        <div class="button1"><router-link to="#">乐观数据2.0</router-link></div>
        <div class="button1" data-btn="tab">
          <router-link to="#"
            >乐观课堂<span class="arrowIcon"></span
          ></router-link>
        </div>

        <div class="button1"><router-link to="#">乐观舆情</router-link></div>
        <div class="button1"><router-link to="#">乐观数据</router-link></div>
        <div class="button1"><router-link to="#">交易广场</router-link></div>
      </el-col>
      <el-col :span="4" class="login"> <div>aaaaaaaaaaaaaaaaaa</div> </el-col>
    </el-row>
    <!-- 隱藏列表開始 -->
    <div class="headerSubNav">
      <div class="headerSubNavBox">
        <ul>
          <li class="headerSubList"><a href="#">乐观课堂 >></a></li>
          <li class="headerSubList"><a href="#">干货资料 >></a></li>
          <li class="headerSubList"><a href="#">工具合集 >></a></li>
        </ul>
      </div>
    </div>
    <!-- 影藏列表結束 -->
  </div>
</template>
<style  scoped>
.disflex-start-end {
  display: flex;
  text-align: left;
  margin-left: 5px;
  align-items: center;
  width: 100%;
  height: 55px;
  overflow: hidden;
}
.headerLogo > div {
  display: inline-block;
}
.headerLogo > div:first-child {
  margin-right: 10px;
  font-size: 35px;
  font-weight: bold;
  color: #000;
  font-family: STHupo;
}
.tab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.tab > div {
  cursor: pointer;
  padding: 5px 13px;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  height: 50px;
  overflow: hidden;
}
.button1 > a {
  color: #000;

  text-decoration: none;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  height: 20px;
  overflow: hidden;
}

.headerSubNav {
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 100%;
  position: absolute;
  top: 55px;
  left: 0;
  display: none;
}
.headerSubNav > .headerSubNavBox {
  position: relative;
}
.headerSubNav > .headerSubNavBox > ul {
  width: 600px;
  padding: 20px;
  margin: 0 auto;
  list-style: none;
  text-align: left;
  display: flex;
}
.headerSubList {
  width: 120px;
  margin: 10px;
  height: 40px;
  line-height: 40px;
  background-color: #3e3e3e;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  position: relative;
}
.moveBox {
  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.14);
  border-bottom-color: #1a98fb;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: #1a98fb;
}
.moveBox:hover > a {
  color: #1a98fb;
}

.arrowIcon {
  background: url(../../public/img/img_header/blue-arrow.png) no-repeat center;
}

.login {
  text-align: right;
}
</style>
<script>
import vLogin from "./Login.vue";
export default {
  name: "v-Myheader",
  components: {
    vLogin,
  },
  data() {
    return {
      left: 346,
    };
  },
  mounted() {
    //var tabs=document.querySelectorAll(`[data-btn=tab]`);
    var boxs = document.querySelectorAll(".button1");
    //var activebox=document.querySelector(".headerNavListActive");
    for (var box of boxs) {
      box.onmouseover = function () {
        var bgdiv = document.querySelector("div.moveBox.button1");
        bgdiv.className = "button1";
        this.className = "moveBox button1";
        var tabEle = this.getAttribute("data-btn");
        var headd = document.querySelector(".headerSubNav");
        if (tabEle) {
          headd.style.display = "block";
        }
      };
      box.onmouseleave = function () {
        var hpEle = document.getElementById("homepage2");
        this.className = "button1";
        hpEle.className = "moveBox button1";
        var tabEle = this.getAttribute("data-btn");
        var headd = document.querySelector(".headerSubNav");
        if (tabEle) {
          headd.style.display = "none";
        }
      };
    }
    // for(var tab of tabs){
    //   tab.onmouseover=function(){
    //     this.lastElementChild.style.display="block";
    //   }
    //   tab.onmouseleave=function(){
    //     this.lastElementChild.style.display="none";
    //   }
    // }
  },
};
</script>