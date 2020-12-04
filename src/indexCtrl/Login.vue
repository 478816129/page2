<template>
  <div class="mylogin">
    <!-- 登录框开始 -->
    <div class="logRegDiv">
      <div class="logRegBtn log" @click="mylogin">登录</div>
      <div class="logRegBtn reg" @click="myregister">注册</div>
    </div>
    <!-- 登录框结束 -->
    <!-- 企业作者选择框开始 -->
    <div class="select-role-list" :style="active">
      <img class="hand close-btn" src="../../public/img/login/login_close.png" @click="myclose">
		  <div class="select-role-item">
			  <img src="../../public/img/login/company.png">
			  <div style="padding:10px;"></div>
			  <div @click="selectAdvert" class="select-role-advert">我是企业</div>
		  </div>
		  <div class="select-role-item">
			  <img src="../../public/img/login/media.png">
			  <div style="padding:10px;"></div>
			  <div @click="selectMedia" class="select-role-media">我是作者</div>
		  </div>
    </div>
    <!-- 企业作者选择框结束 -->
    <!-- 登录企业作者界面开始 -->
    <div class="login-list" data-myid="login">
      <div class="login-logo-p">
        <div v-if="isAdvert">企业</div>
        <div v-else>作者</div>
      </div>
      <!-- 登录标签页开始 -->
      <div class="login-contain">
        <el-tabs type="border-card">
          <el-tab-pane label="扫码登录">
            <div class="lr-box">
              <div class="two-code-title">微信扫描，安全登录</div>
              <div class="two-code-img">
                <img src="../../public/img/login/grant_qr_pic.png" alt="">
              </div>
              <div class="scale-text-p">
                <img src="../../public/img/login/login-scan.png" alt="">
                <span>&nbsp;打开</span>
                <span class="weixin-text">&nbsp;微信&nbsp;</span>
                <span>扫一扫，经乐观服务验证后即可</span>
                <span class="dlzz-text">&nbsp;登录/注册</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="账号登录">
            <div class="lr-box">
              <div class="login-main">
                <div class="tip-box"></div>
                <div class="user-box">
                  <img src="../../public/img/login/login-phone.png" alt="">
                  <input type="text" id="userName" class="advertising_input" placeholder="手机号">
                </div>
                <div class="pwd-box">
                  <img src="../../public/img/login/login-pwd.png" alt="">
                  <input type="password" id="password" class="advertising_input" placeholder="密码">
                </div>
              </div>
              <div class="jdcheckbox_div">
                <input type="checkbox" class="jdcheckbox" id="rembpasd">
                <span>记住账号</span>
                <span>忘记密码</span>
              </div>
              <div class="login-btn login-btn-text">登录</div>
              <div class="regist-btn-p lr-box-bottom">
                还没有账号？
                <span class="register-btn">立即注册</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 登录标签页结束 -->
      <div class="login-close-parent" @click="myclose">
        <img src="../../public/img/login/login_close.png" alt="">
      </div>
    </div>
    <!-- 登录企业作者界面结束 -->
    <!-- 注册企业作者界面开始 -->
    <div class="login-list" data-myid="register">
      <div class="login-logo-p">
        <div v-if="isAdvert">企业</div>
        <div v-else>作者</div>
      </div>
      <!-- 注册标签页开始 -->
      <div class="login-contain">
        <el-tabs type="border-card">
          <el-tab-pane label="扫码注册">
            <div class="lr-box">
              <div class="two-code-title">微信扫描，安全注册</div>
              <div class="two-code-img">
                <img src="../../public/img/login/grant_qr_pic.png" alt="">
              </div>
              <div class="scale-text-p">
                <img src="../../public/img/login/login-scan.png" alt="">
                <span>&nbsp;打开</span>
                <span class="weixin-text">&nbsp;微信&nbsp;</span>
                <span>扫一扫，经乐观服务验证后即可</span>
                <span class="dlzz-text">&nbsp;登录/注册</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="账号注册">
            <div class="lr-box">
              <div class="login-main">
					      <div class="register-inline">
						      <img src="../../public/img/login/login-phone.png">
						      <input id="registerPhone" type="text" class="advertising_input ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-pattern" autocomplete="off" placeholder="手机号"  name="registerPhone" required="required">
					      </div>
					      <div class="re-form-error-p">
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>手机号码不正确</span>
						      </div>
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>手机号码必须填写</span>
						      </div>
					      </div>
					      <div class="ver-code-inline">
						      <img class="ver-code-img" title="点击更换" src="../../public/img/login/rc.jpg">
						      <input id="registerVerCodeNum" type="text" placeholder="图片中的数字">
						      <span id="registerVerCodeBtn" class="get-ver-code">获取短信验证码</span>
					      </div>
					      <div class="register-inline">
						      <img src="../../public/img/login/login-sms.png">
						      <input type="text"  autocomplete="off" placeholder="短信验证码" style="width:80px;"  name="registerVerCode" required="required">
					      </div>
					      <div class="re-form-error-p">
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>请填写验证码</span>
						      </div>
					      </div>
					      <div class="register-inline">
						      <img src="../../public/img/login/login-pwd.png">
						      <input type="password" autocomplete="off" placeholder="设置密码(6-16个字母或数字)"  name="password" required="required">
					      </div>
					      <div class="re-form-error-p">
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>密码必须填写</span>
						      </div>
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>密码最短6位</span>
						      </div>
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>密码最长20位</span>
						      </div>
					      </div>
					      <div class="register-inline">
						      <img src="../../public/img/login/login-conf.png">
						      <input type="password" class="advertising_input ng-pristine ng-untouched ng-valid" autocomplete="off" placeholder="确认密码" name="password1">
					      </div>
					      <div class="re-form-error-p">
						      <div class="form-error ng-hide">
							      <span class="index-icon input-warning"></span>
							      <span>密码不一致</span>
						      </div>
					      </div>
					      <div class="login-btn login-btn-text">注册</div>
					      <div class="regist-btn-p lr-box-bottom">
						      <div class="tyxy">
                    注册即同意并遵守
                    <a class="hand" target="_blank">
                      《乐观用户协议》
                    </a>
                  </div>
						      <div class="zzqdl">
							      已有账号？
                    <span class="register-btn">
                      去登录
                    </span>
						      </div>
					      </div>
				      </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 注册标签页结束 -->
      <div class="login-close-parent" @click="myclose">
        <img src="../../public/img/login/login_close.png" alt="">
      </div>
    </div>
    <!-- 注册企业作者界面结束 -->
    <!-- 黑纱开始 -->
    <div class="theblack_mask" :style="maskstate"></div>
    <!-- 黑纱结束 -->
  </div>
</template>

<script>
export default {
  name:'v-login',
  data(){
    return{
      active:"",
      maskstate:"",
      isAdvert:true,
      islogin:""
    }
  },
  methods:{
    mylogin(){
      //console.log(1);
      this.active="display:block";
      this.maskstate="display:block";
      this.islogin="islog";
    },
    myregister(){
      this.active="display:block";
      this.maskstate="display:block";
      this.islogin="notlog";
    },
    myclose(){
      this.active="";
      this.maskstate="";
      this.islogin="";
      let loginEle=document.querySelector(`[data-myid=login]`);
      let registerEle=document.querySelector(`[data-myid=register]`);
      loginEle.style.display="none";
      registerEle.style.display="none";
    },
    selectAdvert(){
      this.isAdvert=true;
      this.maskstate="display:block";
      this.active="";
      let loginEle=document.querySelector(`[data-myid=login]`);
      let registerEle=document.querySelector(`[data-myid=register]`);
      if(this.islogin=="islog"){
        loginEle.style.display="block";
      }else{
        registerEle.style.display="block";
      }
      
    },
    selectMedia(){
      this.isAdvert=false;
      this.maskstate="display:block";
      this.active="";
      let loginEle=document.querySelector(`[data-myid=login]`);
      let registerEle=document.querySelector(`[data-myid=register]`);
      if(this.islogin=="islog"){
        loginEle.style.display="block";
      }else{
        registerEle.style.display="block";
      }
    }
  }
}
</script>
<style scoped>
/* .mylogin{
  position: relative;
} */
/* .logRegDiv{
  position: absolute;
} */
.theblack_mask{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 990;
  opacity: 0.2;
  background-color: rgb(0, 0, 0);
  display: none;
}
.select-role-list{
  /* position: fixed; */
  top: 160px;
  padding: 30px;
  left: 30%;
  background: #fff;
  position: absolute;
  border-radius: 10px;
  width: 660px;
  box-sizing: border-box;
  /* border: 1px solid #000; */
  z-index: 999;
  display: none;
}
.close-btn {
  position: absolute;
  right: -20px;
  top: -20px;
}
.select-role-item{
  display: inline-block;
  vertical-align: middle;
  margin: 20px;
}
.select-role-advert{
  font-size:1.5em;
  border:1px solid #589bea;
  color:#589bea;
  border-radius:10px;
  cursor:pointer;
  display:inline-block;
  padding:10px 50px;
}
.select-role-advert:hover{
  background:#589bea;
  color:#fff;
}
.select-role-media{
  font-size:1.5em;
  border:1px solid #c73d18;
  color:#c73d18;
  border-radius:10px;
  cursor:pointer;
  display:inline-block;
  padding:10px 50px;
}
.select-role-media:hover{
  background:#c73d18;
  color:#fff;
}
.logRegBtn{
  width: 60px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  border: solid 1px #0196fe;
  cursor: pointer;
}
.log{
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  background: #0196fe;
  color: white;
}
.reg{
  border-radius: 0px 5px 5px 0px;
  color: #0196fe;
}
.lr-box{
  color: #a9a9a9;
  font-size: 14px;
}
.login-list{
  margin: 15px auto;
  background: #fff;
  position: absolute;
  left: 35%;
  top:160px;
  border-radius: 10px;
  width: 460px;
  border: 1px solid #000;
  z-index: 999;
  display: none;
}
.login-logo-p{
  padding: 10px 0 0 0;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: #474747;
}
.login-contain {
  margin: 20px auto;
  width: 400px;
  border: 1px solid #dcdcdc;
}
.two-code-title{
  font-size: 1.2em;
  color: #348dff;
  font-weight: 700;
  margin: 40px 0 0 0;
}
.two-code-img{
  padding: 30px 0;
}
.two-code-img>img{
  width: 200px;
  height: 200px;
}
.scale-text-p{
  padding-bottom: 20px;
  color: #a9a9a9;
  font-size: 14px;
}
.scale-text-p>img,.scale-text-p>p{
  vertical-align: middle;
}
.weixin-text{
  color: #348dff;
}
.dlzz-text{
  color: #348dff;
}
.tip-box {
  text-align: center;
  color: #ea1c42;
  height: 30px;
  line-height: 40px;
}
.user-box,.pwd-box{
  width: 360px;
  border-bottom: 1px solid #71afff;
  margin: 0 auto 30px auto;
  color: #a9a9a9;
}
.user-box>input,.pwd-box>input{
  border: 0px;
  outline: none;
  background-color: #ffffff;
  padding: 8px;
  width: 85%;
}
.jdcheckbox_div{
  margin: 20px 0;
}
.jdcheckbox{
  margin: 5px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
}
.jdcheckbox_div>span{
  display: inline-block;
}
.jdcheckbox_div>span:last-child{
  margin: 0 0 0 110px;
  cursor: pointer;
}
.login-btn-text {
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;
  box-sizing: border-box;
}
.login-btn {
  width: 288px;
  height: 42px;
  background: #27b7f5;
  display: inline-block;
  border-radius: 30px;
  line-height: 42px;
}
.regist-btn-p{
  margin: 15px auto;
}
.register-btn {
  color: #348dff;
  cursor: pointer;
}
.login-close-parent {
  position: absolute;
  width: 30px;
  top: -20px;
  right: -10px;
}

/* 作者注册开始 */
.login-main input{
	border: 0px;
	outline: none;
	background-color: #ffffff;
	padding:8px;
	width:85%;
}
.register-inline{
  width: 360px;
  border-bottom: 1px solid #71afff !important;
  margin: 10px auto 0 auto;
  text-align: left;
}
.register-inline{
  width: 360px;
  border-bottom: 1px solid #cbcbcb; 
  margin: 10px auto 0 auto;
  text-align:left;
}
.register-inline>img{
  vertical-align: middle;
}
.re-form-error-p {
  height: 20px;
  margin: 0 auto 10px auto;
  width: 360px;
  text-align: left;
}
.re-form-error-p>div{
  display: inline-block;
}
.form-error {
  color: #f34e4e;
  text-align: left;
}
.index-icon {
  display: inline-block;
}
.ver-code-inline {
  width: 350px;
  text-align: left;
  margin: 10px auto;
}
.ver-code-img {
  width: 50px;
  height: 35px;
  cursor: pointer;
  vertical-align: middle;
}
.ver-code-inline input {
  width: 100px !important;
  border: 1px solid #ccc !important;
  margin-left: 4px;
  margin-right: 4px;
}
.get-ver-code {
    background: #008be8;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    padding: 5px 12px;
}





/* .re-form-error-p{display: none;} */
/* 作者注册结束 */
</style>

<style>
#tab-0,#tab-1{
  width: 199px;
  height: 53px;
  line-height: 53px;
  font-size: 1.2em;
  color: #666;
}
</style>
