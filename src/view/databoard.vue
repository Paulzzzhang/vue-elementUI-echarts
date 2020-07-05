<template>
    <el-container>
        <el-header>职业信息大数据平台</el-header>
        <el-container>
            <side-bar></side-bar>
            <el-main>
                <div class="content">
                    <div id=" view " >
                        <el-row :gutter="20">
                            <el-col :span="24">
                                <el-card shadow="hover">
                                    <router-view></router-view>
                                </el-card>
                            </el-col>

                        </el-row>

                    </div>

                </div>
            </el-main>
        </el-container>
    </el-container>


</template>

<script>
   // import AppMain from "./AppMain";
    import SideBar from "../components/sideBar";
    export default {
        name: "databoard",
        components: {SideBar}
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