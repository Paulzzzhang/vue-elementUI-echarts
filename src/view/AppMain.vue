<template>
    <router-view></router-view>
</template>

<script>

    //import Occupation from "./occupation";

    export default {
        name: "AppMain",
        components: {}
    }
</script>

<style scoped>
    body {
        margin: 0;
        height: 100%;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-header, .el-footer {
        background-color: darkcyan;
        color: #333;
        text-align: left;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;

        line-height: 200px;
    }

    .el-main {

        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
        height: 800px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>