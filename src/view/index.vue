<template>
    <div class="demo-image__placeholder">

        <div class="block" >
            <img :src="imgSrc" alt="shinai">

<!--            <el-image :src="src">-->
<!--                <div slot="placeholder" class="image-slot">-->
<!--                    加载中<span class="dot">...</span>-->
<!--                </div>-->
<!--            </el-image>-->
        </div>
        <div id = "intro">   <el-link href="/#/databoard" target="_blank" underline>万维职谷</el-link></div>
    </div>

</template>
<script>
    export default {
        name:"index",
        data() {
            return {
                imgSrc: require('../assets/city.jpg')
            }
        }
    }
</script>
<style scoped>
    .block{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
    img{
        height:100%;
        width:100%;
        border:0;
    }
    #intro{
        color:white;
        font-family: 微软雅黑;
        font-size: 60px;
        display:flex;  /*盒子模型*/
        flex-direction: row;  /*横向*/
        justify-content: space-around; /*主轴居中*/
        align-items: center; /*纵轴居中*/
        margin-top: 15%;


    }
</style>