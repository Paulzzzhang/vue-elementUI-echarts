<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <img :src="imgSrc" alt="shinai" />

      <!--            <el-image :src="src">-->
      <!--                <div slot="placeholder" class="image-slot">-->
      <!--                    加载中<span class="dot">...</span>-->
      <!--                </div>-->
      <!--            </el-image>-->
    </div>
    <div>
      <i id="icon-fullscreen" @click="toggleFullscreen"></i>
    </div>
    <div id="intro1">万维职谷</div>
    <div id="intro2">大数据职业信息分析及可视化平台</div>
    <div id="startButton" onclick="window.location.href = '/#/databoard'">开始</div>
    <!-- <div id = "startButton">   <el-link href="/#/databoard" target="_blank">开始</el-link></div> -->
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      imgSrc: require("../assets/earth.png")
    };
  }
};
</script>
<style scoped>
.block {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
img {
  height: 100%;
  width: 100%;
  border: 0;
}
#intro1 {
  color: white;
  font-family: 微软雅黑;
  font-size: 100px;
  letter-spacing: 19px;
  font-weight: bold;
  display: flex; /*盒子模型*/
  flex-direction: row; /*横向*/
  justify-content: space-around; /*主轴居中*/
  align-items: center; /*纵轴居中*/
  margin-top: 15%;
}

#intro2 {
  color: white;
  font-family: 微软雅黑;
  font-size: 30px;
  letter-spacing: 12px;
  display: flex; /*盒子模型*/
  flex-direction: row; /*横向*/
  justify-content: space-around; /*主轴居中*/
  align-items: center; /*纵轴居中*/
  margin-top: 1%;
}

#startButton {
  color: white;
  font-family: 微软雅黑;
  font-size: 17px;
  letter-spacing: 7px;
  display: flex; /*盒子模型*/
  flex-direction: row; /*横向*/
  justify-content: space-around; /*主轴居中*/
  align-items: center; /*纵轴居中*/
  /* margin-top: 50%; */
  margin: 50px auto;
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid;
  /* border-color: blueviolet; */
}
#startButton:hover {
  /* background-color: blueviolet; */
  border: 2px solid;
}
</style>